"use server";

import fs from "fs";
import path from "path";
import { revalidatePath } from "next/cache";

const contentFilePath = path.join(process.cwd(), "data", "content.json");

export async function getContent() {
  try {
    const fileContents = fs.readFileSync(contentFilePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error reading content.json", error);
    return null;
  }
}

export async function verifyPassword(password: string) {
  const correctPassword = process.env.ADMIN_PASSWORD || "admin";
  return password === correctPassword;
}

export async function updateContent(newContent: any) {
  try {
    // Basic verification - this could be improved with actual auth
    // Note: Since this is an unauthenticated public portfolio by default, 
    // the password check will happen in the UI/Middleware, but we can also 
    // pass a token to this action for extra security.
    fs.writeFileSync(contentFilePath, JSON.stringify(newContent, null, 2), "utf8");
    revalidatePath("/"); // Revalidate the home page to show new content
    return { success: true };
  } catch (error) {
    console.error("Error writing content.json", error);
    return { success: false, error: "Failed to save content" };
  }
}

export async function uploadImage(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) {
      return { success: false, error: "No file provided" };
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Save to public directory
    const fileName = `profile-${Date.now()}${path.extname(file.name)}`;
    const filePath = path.join(process.cwd(), "public", fileName);
    
    fs.writeFileSync(filePath, buffer);
    revalidatePath("/");
    
    return { success: true, imagePath: `/${fileName}` };
  } catch (error) {
    console.error("Error uploading image", error);
    return { success: false, error: "Failed to upload image" };
  }
}
