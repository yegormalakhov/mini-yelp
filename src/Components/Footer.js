import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-style">
        <ul className="footer-list">
          <h4>About</h4>
          <li>About Yelp</li>
          <li>Careers</li>
          <li>News</li>
          <li>Investors</li>
          <li>Trust & Safety</li>
          <li>Content Guidelines</li>
          <li>Accessibility Statement</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Ad Choices</li>
        </ul>
        <ul className="footer-list">
          <h4>Discover</h4>
          <li>Yelp Project Cost Guides</li>
          <li>Collections</li>
          <li>Talk</li>
          <li>Events</li>
          <li>The Local Yelp</li>
          <li>Yelp Blog</li>
          <li>Support</li>
          <li>Yelp Mobile</li>
          <li>Developers</li>
          <li>RSS</li>
        </ul>
        <ul className="footer-list">
          <h4>Yelp for Business</h4>
          <li>Claim your Business Page</li>
          <li>Advertise on Yelp</li>
          <li>Yelp for Restaurant Owners</li>
          <li>Table Management</li>
          <li>Business Success Stories</li>
          <li>Business Support</li>
          <li>Yelp Blog for Business</li>
        </ul>
        <ul className="footer-list">
          <h4>Languages</h4>
          <li>English ▼</li>
          <h4>Country</h4>
          <li>Germany ▼</li>
        </ul>
      </div>
      <span className="copyright">Copyright © 2004–2022 Yelp Inc. Yelp, and related marks are registered trademarks of Yelp.</span>
    </div>
  );
};
export default Footer;
