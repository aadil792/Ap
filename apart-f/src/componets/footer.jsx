import "../componets/f.css";
function Footer() {
  return (
    <div className="footer">
      <p>
        &copy; {new Date().getFullYear()} Seamless Community Interaction and
        Management All Rights Reserved.
      </p>
      <p>
        Designed by{" "}
        <a
          href="https://github.com/aadil792"
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
