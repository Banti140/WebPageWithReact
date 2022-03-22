import React, { Component } from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";

import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer-parent">
        <div className="support-team-info">
          {}
          <span className="suppport-email-address">
            <div className="support-details">supportIteam@swiggy.com</div>
          </span>
        </div>
        <div className="social-media-links">
          <div className="social-media-link">
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0.25)"
              borderWidth="5"
              borderStyle="solid"
              icon="twitter"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgba(26,166,233,1)"
              iconSize="5"
              roundness="50%"
              // url="https://some-website.com/my-social-media-url"
              size="38"
            />
          </div>
          <div className="social-media-link">
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0.25)"
              borderWidth="5"
              borderStyle="solid"
              icon="facebook"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="rgba(26,166,233,1)"
              iconSize="5"
              roundness="50%"
              url="https://some-website.com/my-social-media-url"
              size="38"
            />
          </div>
          <div className="social-media-link">
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0.25)"
              borderWidth="5"
              borderStyle="solid"
              icon="instagram"
              iconColor="rgba(255,255,255,1)"
              backgroundColor="red"
              iconSize="5"
              roundness="50%"
              url="https://some-website.com/my-social-media-url"
              size="38"
            />
          </div>
          <div className="social-media-link">
            <SocialMediaIconsReact
              borderColor="rgba(0,0,0,0.25)"
              borderWidth="5"
              borderStyle="solid"
              icon="linkedin"
              iconColor="rgba(255,255,255,1)"
              backgroundColor=" blue"
              iconSize="5"
              roundness="50%"
              url="https://some-website.com/my-social-media-url"
              size="38"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
