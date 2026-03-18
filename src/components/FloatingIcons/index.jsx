import React from "react";
import whatsappIcon from "../../Images/whatsapp.png";
import "./styles.css"; // Import the custom CSS

const FloatingIcons = () => {
  return (
    <div className="floating-icons-container">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://api.whatsapp.com/send?phone=917022215439&text=Hi, can i get more information on KNS Projects"
      >
        <div className="whatsapp-button">
          <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
        </div>
      </a>
    </div>
  );
};

export default FloatingIcons;
