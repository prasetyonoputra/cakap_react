export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="form-footer">
      <p>&#169; {year} Cakap Messenger</p>
    </footer>
  );
}
