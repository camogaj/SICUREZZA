import "./Footer.scss";
import imgfooter from "../assets/blueFootPc-01.svg";
import github from "../assets/github.jpg";
import mail from "../assets/gmail.png";
import telefono from "../assets/telef.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={imgfooter} alt="Footer" />
      </div>
      <span> ¡CONTÁCTANOS! </span>

      <div className="footer-boxes">
        <a title="Github" href="https://github.com/Jammings/Sicurezza">
          <img src={github} alt="Github" target="_blank" />
        </a>
        <a title="Mail" href={"mailto:" + "cdepedro1998@gmail.com"}>
          <img src={mail} alt="Mail" target="_blank" />
        </a>
        <a title="Telefono" href="tel:+34608402706">
          <img src={telefono} alt="Telefono" target="_blank" />
        </a>
      </div>
    </>
  );
};

export default Footer;
