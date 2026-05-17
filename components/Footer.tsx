export default function Footer({ data }: { data: any }) {
  return (
    <footer>
      <span className="f-copy">{data.copy}</span>
      <span className="f-name">{data.name}</span>
      <span className="f-copy">{data.location}</span>
    </footer>
  );
}
