import React, {useState} from "react";
import { Modal } from "../Modal/index.js";
import Navbar from "../Navbar/Navbar";
import ProjectImages from "../ProjectImages/ProjectImages";
import Footer from "../Footer/Footer"
import EnlargedImg from "../EnlargedImg/EnlargedImg.js";
import "./HomePage.css";


function HomePage() {

  const [showEnlargedImg, setShowEnlargedImg] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  return (
    <div id="page-container">
      <Navbar />
      <ProjectImages
        showEnlargedImg={showEnlargedImg}
        setShowEnlargedImg={setShowEnlargedImg}
        currentImg={currentImg}
        setCurrentImg={setCurrentImg}
      />
      <Footer />
      {showEnlargedImg && (
        <Modal onClose={() => setShowEnlargedImg(false)}>
          <EnlargedImg
            showEnlargedImg={showEnlargedImg}
            setShowEnlargedImg={setShowEnlargedImg}
            currentImg={currentImg}
            setCurrentImg={setCurrentImg}
          />
        </Modal>
      )}
    </div>
  );
}

export default HomePage;
