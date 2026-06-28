import React, { useEffect, useState, useContext } from "react";
import SettingsContext from "../Contexts/SettingsContext";
import getTranslations from "../Translations/Translation";
import Photo from "../Assets/Kendall Guido.png";
import "bootstrap/dist/css/bootstrap.min.css";
import CenterMode from "../Components/CenterMode";
import getProjects from "../Projects/Software/Projects";

export default function Master() {
  const { language, changeLanguage } = useContext(SettingsContext);

  const [devText, setDevtext] = useState([]);
  const [projects, setProjects] = useState([]);

  const handleLanguage = () => {
    changeLanguage(language === "en" ? "es" : "en");
  };

  useEffect(() => {
    setDevtext(getTranslations(language));
    setProjects(getProjects(language));
  }, [language]);

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "550px",
          zIndex: -1,
          overflow: "hidden",
         
        }}
      >
        <iframe
          src="/CodeRain/index.html"
          title="Canvas"
          style={{
            width: "100%",
            height: "2000px",
            border: "none",
           
   
          }}
        />
      </div>

      <div className="m-0 p-5 ">
        <img src={Photo} alt="Kendall Guido" />
        <h1 className="text-light pb-4">KEIZH GD</h1>

        <button className="btn btn-light" onClick={handleLanguage}>
          {language}
        </button>
      </div>

      <div className="mx-auto justify-content-center border rounded p-4 col-8 bg-white"   style={{ paddingLeft: "20%", paddingRight: "20%" }} >
        <div className="mt-4">
          <h3>{devText?.title1}</h3>
          <h5>{devText?.technologies1}</h5>
          <p>{devText?.text1}</p>
        </div>

        {projects.length > 0 && <CenterMode items={[projects[0]]} />}

        <div className="mt-4">
          <h3>{devText?.title2}</h3>
          <h5>{devText?.technologies2}</h5>
          <p>{devText?.text2}</p>
        </div>

        {projects.length > 1 && <CenterMode items={[projects[1]]} />}
      </div>

      <div
        className="py-4 d-flex justify-content-center align-items-center"
        style={{ background: "#000" }}
      >
        <h5 className="text-light mb-0">
          <a href="https://www.linkedin.com" className="text-light mx-2">
            LinkedIn
          </a>
          |
          <a href="mailto:tu-email@gmail.com" className="text-light mx-2">
            Gmail
          </a>
          |
          <a href="https://www.facebook.com" className="text-light mx-2">
            Facebook
          </a>
          |
          <a href="https://wa.me/tu-numero" className="text-light mx-2">
            Whatsapp
          </a>
          |
          <a href="https://www.tiktok.com" className="text-light mx-2">
            TikTok
          </a>
        </h5>
      </div>
    </div>
  );
}
