import "../pages.css/about.css"; // Ensure the CSS file exists

function About_1() {
  return (
    <div className="about-content">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Community  Management</strong>, a platform designed to bring people together, foster collaboration, and provide easy access to essential resources. Our community-driven website is built to help users connect, share knowledge, and navigate the roadmap of our services with ease.
      </p>

      <h2>How Our Community Works</h2>
      <p>
        Our platform is designed to bridge gaps and create meaningful connections. Whether you are a user exploring the site for the first time or an admin managing the platform, we ensure a seamless experience for everyone. Users can check out our <strong>blog</strong> to stay updated with the latest insights, explore the <strong>roadmap</strong> of our website, and review our <strong>terms and conditions</strong> for a better understanding of our policies.
      </p>

      <h2>How This Website Helps People Connect</h2>
      <p>
        We provide a space where users can interact, gain access to valuable information, and utilize features tailored to their needs. The website ensures a structured approach where <strong>admins manage user access</strong>, allowing each member to have the right level of interaction with the platform.
      </p>

      <h2>Website Features & Access Levels</h2>
      <div className="features">
        <div className="feature-box">
          <h3>Admin Role</h3>
          <ul className="ul">
            <li className="li">Admins have full access to all website features.</li>
            <li className="li">Admins are responsible for creating user accounts and managing permissions.</li>
          </ul>
        </div>
        
        <div className="feature-box">
          <h3>User Role</h3>
          <ul className="ul">
            <li className="li">Users receive access based on permissions set by the admin.</li>
            <li className="li">Users can explore limited but essential features.</li>
            <li className="li">Users must provide their information and credentials given by the admin to log in.</li>
          </ul>
        </div>
      </div>

      <p className="closing">
        <strong>Join us today</strong> and become a part of a growing community where knowledge, collaboration, and accessibility come together!
      </p>
    </div>
  );
}

export default About_1;
