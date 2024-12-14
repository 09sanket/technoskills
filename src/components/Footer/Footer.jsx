import React from "react";
import "./Footer.css";
import Logo from "../../img/sritlogo.png";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundColor: "#ffc857"}}>
      <div className="f-left">
        <img
          src={Logo}
          alt=""
          style={{
            width: "4.5rem",
            heigh: "4.5rem",
          }}
        />
        <span>
          Thank you for visiting our website..!! If you want to do some enquiry
          about the courses kindly contact us through either mail, call or visit
          our institue. We shall be glad to teach and make your programming
          carrier easy.
        </span>
      </div>
      <div className="f-mid">
        <span>Contact</span>
        <div className="f-contact">
          <div>
            <a href="https://maps.app.goo.gl/G7RyNv3Ssf6zjwaT9?g_st=com.google.maps.preview.copy" target="_blank" rel="noreferrer">
              <i
                className="fa-solid fa-location-dot"
                style={{ color: "#454545", fontSize: "18px" }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    color: "var(--black)",
                    fontFamily: "monospace",
                  }}
                >
                  {" "}
                  Balaghat,MadhyaPradesh
                </span>
              </i>
            </a>
          </div>
          <div>
            <a
              href="https://www.truecaller.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-solid fa-phone"
                style={{ color: "#454545", fontSize: "18px" }}
              >
                <span
                  style={{
                    fontSize: "16.5px",
                    color: "var(--black)",
                    fontFamily: "monospace",
                  }}
                >
                  {" "}
                  7089890044
                </span>
              </i>
            </a>
          </div>
          <div>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-solid fa-envelope"
                style={{ color: "#454545", fontSize: "18px" }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    color: "var(--black)",
                    fontFamily: "monospace",
                    marginLeft: "5px",
                  }}
                >
                  09sankets
                </span>
              </i>
            </a>
          </div>
        </div>
      </div>
      <div className="f-right">
        <span
          style={{
            marginLeft: "-0.1rem",
          }}
        >
          Follow Us
        </span>
        <div className="f-social" style={{ display: "flex", gap: "0.5rem" }}>
          <div>
            <a
              href="https://github.com/09sanket"
              target="_blank"
              rel="noreferrer"
            >
              <i id="f-social" className="i-social fa-brands fa-github"></i>{" "}
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/sanket-rahangdale708989/"
              target="_blank"
              rel="noreferrer"
            >
              <i id="f-social" className="i-social fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/tecno__skill?igsh=MWprMmVndGVjNWZrcA=="
              target="_blank"
              rel="noreferrer"
            >
              <i id="f-social" className="i-social fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
