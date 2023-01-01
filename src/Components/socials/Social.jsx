import React from "react";
import "./social.css"

const Social = () => {
  return (
    <div className="socials">
      <div className="container social-container">
        <a
          href="https://web.facebook.com/ogunsoluqudus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-facebook-f social-icon"></i>
        </a>

        <a
          href="  https://github.com/ogunsolu007"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-github social-icon"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/ogunsoluqudus/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-linkedin social-icon"></i>
        </a>
        <a
          href="https://twitter.com/Elec3fied"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-twitter social-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Social;
