import "../componets/f.css";
function Footer() {
  return (
    <div className="footer">
      <p>
        &copy; {new Date().getFullYear()}  Seamless Community Interaction and
        Management All Rights Reserved.
      </p>
      <p>
        Designed by{" "}
        <a
          href="https://yourportfolio.com"
          target="_blank"
          rel="noopener noreferrer"
        >
         Mohammed Aadil
        </a>
      </p>
    </div>
  );
}
export default Footer;
