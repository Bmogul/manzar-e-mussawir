import React from 'react';
import styles from '../styles/footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact_info}>
        <p>Email: info@ManzareMussawir.com</p>
        <p>17730 Coventry Park Dr, Houston, TX 77084</p>
      </div>
      <div className="map">
        {/* You can embed a Google Maps iframe here */}
        <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBeH1KdupaQhVQl2zFjnTzWARicMF5wW5E&q=Masjid+E+Mohammedi,+Coventry+Park+Dr,+Houston,+TX+77084" width="200" height="100" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
      </div>
    </footer>
  );
};

export default Footer;
