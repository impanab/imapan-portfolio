"use client";

import { useState, useEffect } from "react";
import { getContent, updateContent, verifyPassword, uploadImage } from "../actions";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("admin_auth") === "true") {
      setIsAuthenticated(true);
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    const content = await getContent();
    setData(content);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedPassword = password.trim();
    const isValid = await verifyPassword(trimmedPassword);
    if (isValid) {
      localStorage.setItem("admin_auth", "true");
      setIsAuthenticated(true);
      fetchData();
    } else {
      setError("Invalid password");
    }
  };

  const handleSave = async () => {
    setSaving(true);
    const result = await updateContent(data);
    if (result.success) {
      alert("Saved successfully! Changes are now live on the site.");
    } else {
      alert("Failed to save.");
    }
    setSaving(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    setIsAuthenticated(false);
    setData(null);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setUploadingImage(true);
    
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    
    const result = await uploadImage(formData);
    if (result.success) {
      handleChange(["about", "imagePath"], result.imagePath);
      alert("Image uploaded! Don't forget to click 'Save Changes' to update the site.");
    } else {
      alert(result.error || "Failed to upload image");
    }
    
    setUploadingImage(false);
  };

  // Helper for deep updating state
  const handleChange = (path: string[], value: any) => {
    setData((prev: any) => {
      const newData = JSON.parse(JSON.stringify(prev)); // Deep clone
      let current = newData;
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      current[path[path.length - 1]] = value;
      return newData;
    });
  };

  const handleArrayChange = (section: string, index: number, field: string, value: any) => {
    setData((prev: any) => {
      const newData = JSON.parse(JSON.stringify(prev));
      newData[section][index][field] = value;
      return newData;
    });
  };

  const handleCommaArrayChange = (section: string, index: number, field: string, value: string) => {
    setData((prev: any) => {
      const newData = JSON.parse(JSON.stringify(prev));
      newData[section][index][field] = value.split(',').map((s: string) => s.trim());
      return newData;
    });
  };

  if (!isAuthenticated) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#09100e", color: "white", cursor: "default" }}>
        <form onSubmit={handleLogin} style={{ padding: "40px", background: "#121a17", border: "1px solid rgba(80,180,130,0.1)", display: "flex", flexDirection: "column", gap: "20px", width: "100%", maxWidth: "400px" }}>
          <h2 style={{ fontFamily: "Geist Mono", fontSize: "1.2rem", color: "#4dffa8" }}>Admin Login</h2>
          <input 
            type="password" 
            placeholder="Enter Admin Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "12px", background: "#18231f", border: "1px solid rgba(80,180,130,0.2)", color: "white", cursor: "text" }}
          />
          {error && <p style={{ color: "red", fontSize: "0.8rem" }}>{error}</p>}
          <button type="submit" style={{ padding: "12px", background: "#4dffa8", color: "#09100e", fontWeight: "bold", border: "none", cursor: "pointer" }}>Login</button>
        </form>
      </div>
    );
  }

  if (!data) return <div style={{ color: "white", padding: "50px", background: "#09100e", minHeight: "100vh", cursor: "default" }}>Loading...</div>;

  return (
    <div style={{ padding: "50px", background: "#09100e", color: "white", minHeight: "100vh", fontFamily: "Geist, sans-serif", cursor: "default" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
        <h1 style={{ fontFamily: "Geist Mono", fontSize: "2rem", color: "#4dffa8" }}>Portfolio CMS</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={handleLogout} style={{ padding: "10px 20px", background: "transparent", border: "1px solid #4dffa8", color: "#4dffa8", cursor: "pointer" }}>Logout</button>
          <button onClick={handleSave} disabled={saving} style={{ padding: "10px 20px", background: "#4dffa8", color: "#09100e", fontWeight: "bold", border: "none", cursor: "pointer" }}>
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gap: "40px" }}>
        {/* HERO SECTION */}
        <div style={{ border: "1px solid rgba(80,180,130,0.2)", padding: "30px", background: "#121a17" }}>
          <h2 style={{ color: "#4dffa8", marginBottom: "20px" }}>Hero Section</h2>
          <div style={{ display: "grid", gap: "15px" }}>
            <label>Status</label>
            <input value={data.hero.status} onChange={e => handleChange(["hero", "status"], e.target.value)} style={{ padding: "10px", background: "#18231f", border: "1px solid rgba(80,180,130,0.2)", color: "white", width: "100%" }} />
            <label>Role</label>
            <input value={data.hero.role} onChange={e => handleChange(["hero", "role"], e.target.value)} style={{ padding: "10px", background: "#18231f", border: "1px solid rgba(80,180,130,0.2)", color: "white", width: "100%" }} />
            <label>First Name</label>
            <input value={data.hero.firstName} onChange={e => handleChange(["hero", "firstName"], e.target.value)} style={{ padding: "10px", background: "#18231f", border: "1px solid rgba(80,180,130,0.2)", color: "white", width: "100%" }} />
            <label>Last Name (Italic)</label>
            <input value={data.hero.lastName} onChange={e => handleChange(["hero", "lastName"], e.target.value)} style={{ padding: "10px", background: "#18231f", border: "1px solid rgba(80,180,130,0.2)", color: "white", width: "100%" }} />
            <label>Bio</label>
            <textarea value={data.hero.bio} onChange={e => handleChange(["hero", "bio"], e.target.value)} rows={4} style={{ padding: "10px", background: "#18231f", border: "1px solid rgba(80,180,130,0.2)", color: "white", width: "100%" }} />
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div style={{ border: "1px solid rgba(80,180,130,0.2)", padding: "30px", background: "#121a17" }}>
          <h2 style={{ color: "#4dffa8", marginBottom: "20px" }}>About Section</h2>
          <div style={{ display: "grid", gap: "15px" }}>
            <label>Title</label>
            <input value={data.about.title} onChange={e => handleChange(["about", "title"], e.target.value)} style={{ padding: "10px", background: "#18231f", border: "1px solid rgba(80,180,130,0.2)", color: "white", width: "100%" }} />
            <label>Title (Italic)</label>
            <input value={data.about.titleItalic} onChange={e => handleChange(["about", "titleItalic"], e.target.value)} style={{ padding: "10px", background: "#18231f", border: "1px solid rgba(80,180,130,0.2)", color: "white", width: "100%" }} />
            
            <div style={{ background: "#18231f", padding: "15px", border: "1px solid rgba(80,180,130,0.2)" }}>
              <label style={{ display: "block", marginBottom: "10px" }}>Profile Photo</label>
              <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                {data.about.imagePath && (
                  <img src={data.about.imagePath} alt="Profile preview" style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "50%" }} />
                )}
                <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploadingImage} style={{ color: "white" }} />
                {uploadingImage && <span style={{ color: "#4dffa8", fontSize: "0.9rem" }}>Uploading...</span>}
              </div>
            </div>

            <label>Portrait Caption</label>
            <input value={data.about.portraitCaption} onChange={e => handleChange(["about", "portraitCaption"], e.target.value)} style={{ padding: "10px", background: "#18231f", border: "1px solid rgba(80,180,130,0.2)", color: "white", width: "100%" }} />
            <label>Quote</label>
            <input value={data.about.quote} onChange={e => handleChange(["about", "quote"], e.target.value)} style={{ padding: "10px", background: "#18231f", border: "1px solid rgba(80,180,130,0.2)", color: "white", width: "100%" }} />
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div style={{ border: "1px solid rgba(80,180,130,0.2)", padding: "30px", background: "#121a17" }}>
          <h2 style={{ color: "#4dffa8", marginBottom: "20px" }}>Contact Section</h2>
          <div style={{ display: "grid", gap: "15px" }}>
            <label>Title</label>
            <input value={data.contact.title} onChange={e => handleChange(["contact", "title"], e.target.value)} style={{ padding: "10px", background: "#18231f", border: "1px solid rgba(80,180,130,0.2)", color: "white", width: "100%" }} />
            <label>Title (Italic)</label>
            <input value={data.contact.titleItalic} onChange={e => handleChange(["contact", "titleItalic"], e.target.value)} style={{ padding: "10px", background: "#18231f", border: "1px solid rgba(80,180,130,0.2)", color: "white", width: "100%" }} />
            <label>Description</label>
            <textarea value={data.contact.description} onChange={e => handleChange(["contact", "description"], e.target.value)} rows={3} style={{ padding: "10px", background: "#18231f", border: "1px solid rgba(80,180,130,0.2)", color: "white", width: "100%" }} />
          </div>
        </div>

        {/* FOOTER SECTION */}
        <div style={{ border: "1px solid rgba(80,180,130,0.2)", padding: "30px", background: "#121a17" }}>
          <h2 style={{ color: "#4dffa8", marginBottom: "20px" }}>Footer Section</h2>
          <div style={{ display: "grid", gap: "15px" }}>
            <label>Name</label>
            <input value={data.footer.name} onChange={e => handleChange(["footer", "name"], e.target.value)} style={{ padding: "10px", background: "#18231f", border: "1px solid rgba(80,180,130,0.2)", color: "white", width: "100%" }} />
            <label>Copyright Text</label>
            <input value={data.footer.copy} onChange={e => handleChange(["footer", "copy"], e.target.value)} style={{ padding: "10px", background: "#18231f", border: "1px solid rgba(80,180,130,0.2)", color: "white", width: "100%" }} />
            <label>Location</label>
            <input value={data.footer.location} onChange={e => handleChange(["footer", "location"], e.target.value)} style={{ padding: "10px", background: "#18231f", border: "1px solid rgba(80,180,130,0.2)", color: "white", width: "100%" }} />
          </div>
        </div>

        {/* EXPERTISE SECTION */}
        <div style={{ border: "1px solid rgba(80,180,130,0.2)", padding: "30px", background: "#121a17" }}>
          <h2 style={{ color: "#4dffa8", marginBottom: "20px" }}>Expertise (Skills) Section</h2>
          <div style={{ display: "grid", gap: "30px" }}>
            {data.expertise.map((item: any, idx: number) => (
              <div key={idx} style={{ padding: "15px", borderLeft: "2px solid #4dffa8", background: "#18231f", display: "grid", gap: "10px" }}>
                <label>Icon</label>
                <input value={item.icon} onChange={e => handleArrayChange("expertise", idx, "icon", e.target.value)} style={{ padding: "8px", background: "#121a17", border: "1px solid rgba(80,180,130,0.2)", color: "white" }} />
                <label>Title</label>
                <input value={item.title} onChange={e => handleArrayChange("expertise", idx, "title", e.target.value)} style={{ padding: "8px", background: "#121a17", border: "1px solid rgba(80,180,130,0.2)", color: "white" }} />
                <label>Description</label>
                <textarea value={item.description} onChange={e => handleArrayChange("expertise", idx, "description", e.target.value)} rows={2} style={{ padding: "8px", background: "#121a17", border: "1px solid rgba(80,180,130,0.2)", color: "white" }} />
                <label>Tags (Comma-separated)</label>
                <input value={item.tags.join(", ")} onChange={e => handleCommaArrayChange("expertise", idx, "tags", e.target.value)} style={{ padding: "8px", background: "#121a17", border: "1px solid rgba(80,180,130,0.2)", color: "white" }} />
              </div>
            ))}
          </div>
        </div>

        {/* EDUCATION SECTION */}
        <div style={{ border: "1px solid rgba(80,180,130,0.2)", padding: "30px", background: "#121a17" }}>
          <h2 style={{ color: "#4dffa8", marginBottom: "20px" }}>Education Section</h2>
          <div style={{ display: "grid", gap: "30px" }}>
            {data.education.map((item: any, idx: number) => (
              <div key={idx} style={{ padding: "15px", borderLeft: "2px solid #4dffa8", background: "#18231f", display: "grid", gap: "10px" }}>
                <label>Period</label>
                <input value={item.period} onChange={e => handleArrayChange("education", idx, "period", e.target.value)} style={{ padding: "8px", background: "#121a17", border: "1px solid rgba(80,180,130,0.2)", color: "white" }} />
                <label>Degree</label>
                <input value={item.degree} onChange={e => handleArrayChange("education", idx, "degree", e.target.value)} style={{ padding: "8px", background: "#121a17", border: "1px solid rgba(80,180,130,0.2)", color: "white" }} />
                <label>School</label>
                <input value={item.school} onChange={e => handleArrayChange("education", idx, "school", e.target.value)} style={{ padding: "8px", background: "#121a17", border: "1px solid rgba(80,180,130,0.2)", color: "white" }} />
                <label>Description</label>
                <textarea value={item.description} onChange={e => handleArrayChange("education", idx, "description", e.target.value)} rows={3} style={{ padding: "8px", background: "#121a17", border: "1px solid rgba(80,180,130,0.2)", color: "white" }} />
              </div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE SECTION */}
        <div style={{ border: "1px solid rgba(80,180,130,0.2)", padding: "30px", background: "#121a17" }}>
          <h2 style={{ color: "#4dffa8", marginBottom: "20px" }}>Experience Section</h2>
          <div style={{ display: "grid", gap: "30px" }}>
            {data.experience.map((item: any, idx: number) => (
              <div key={idx} style={{ padding: "15px", borderLeft: "2px solid #4dffa8", background: "#18231f", display: "grid", gap: "10px" }}>
                <label>Period</label>
                <input value={item.period} onChange={e => handleArrayChange("experience", idx, "period", e.target.value)} style={{ padding: "8px", background: "#121a17", border: "1px solid rgba(80,180,130,0.2)", color: "white" }} />
                <label>Title</label>
                <input value={item.title} onChange={e => handleArrayChange("experience", idx, "title", e.target.value)} style={{ padding: "8px", background: "#121a17", border: "1px solid rgba(80,180,130,0.2)", color: "white" }} />
                <label>Company</label>
                <input value={item.company} onChange={e => handleArrayChange("experience", idx, "company", e.target.value)} style={{ padding: "8px", background: "#121a17", border: "1px solid rgba(80,180,130,0.2)", color: "white" }} />
                <label>Location</label>
                <input value={item.location} onChange={e => handleArrayChange("experience", idx, "location", e.target.value)} style={{ padding: "8px", background: "#121a17", border: "1px solid rgba(80,180,130,0.2)", color: "white" }} />
                <label>Description</label>
                <textarea value={item.description} onChange={e => handleArrayChange("experience", idx, "description", e.target.value)} rows={4} style={{ padding: "8px", background: "#121a17", border: "1px solid rgba(80,180,130,0.2)", color: "white" }} />
                <label>Tags (Comma-separated)</label>
                <input value={item.tags.join(", ")} onChange={e => handleCommaArrayChange("experience", idx, "tags", e.target.value)} style={{ padding: "8px", background: "#121a17", border: "1px solid rgba(80,180,130,0.2)", color: "white" }} />
              </div>
            ))}
          </div>
        </div>

        {/* PROJECTS SECTION */}
        <div style={{ border: "1px solid rgba(80,180,130,0.2)", padding: "30px", background: "#121a17" }}>
          <h2 style={{ color: "#4dffa8", marginBottom: "20px" }}>Projects Section</h2>
          <div style={{ display: "grid", gap: "30px" }}>
            {data.projects.map((item: any, idx: number) => (
              <div key={idx} style={{ padding: "15px", borderLeft: "2px solid #4dffa8", background: "#18231f", display: "grid", gap: "10px" }}>
                <label>Project Number</label>
                <input value={item.number} onChange={e => handleArrayChange("projects", idx, "number", e.target.value)} style={{ padding: "8px", background: "#121a17", border: "1px solid rgba(80,180,130,0.2)", color: "white" }} />
                <label>Title</label>
                <input value={item.title} onChange={e => handleArrayChange("projects", idx, "title", e.target.value)} style={{ padding: "8px", background: "#121a17", border: "1px solid rgba(80,180,130,0.2)", color: "white" }} />
                <label>Description</label>
                <textarea value={item.description} onChange={e => handleArrayChange("projects", idx, "description", e.target.value)} rows={4} style={{ padding: "8px", background: "#121a17", border: "1px solid rgba(80,180,130,0.2)", color: "white" }} />
                <label>Featured? (true/false)</label>
                <input value={item.featured ? "true" : "false"} onChange={e => handleArrayChange("projects", idx, "featured", e.target.value === "true")} style={{ padding: "8px", background: "#121a17", border: "1px solid rgba(80,180,130,0.2)", color: "white" }} />
                <label>Tags (Comma-separated)</label>
                <input value={item.tags.join(", ")} onChange={e => handleCommaArrayChange("projects", idx, "tags", e.target.value)} style={{ padding: "8px", background: "#121a17", border: "1px solid rgba(80,180,130,0.2)", color: "white" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
