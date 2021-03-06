import React from "react";

import "./gallery.styles.scss";

import {ReactComponent as Logo} from "../../assets/instagram.svg";

const GalleryPage = () => (
    <div className="gallery">
     <div className="gallery-hero-section">
       <h1 className="hero-section-title">check out our Artists work</h1>
     </div>
     <div className="gallery-directory">

 <div className="matheus-gallery">
      <div className="image1"></div>
      <div className="image2"></div>
      <div className="image3"></div>
      <div className="image4"></div>
      <div className="image5"></div>
      <div className="image6"></div>
      <div className="image7"></div>
      <div className="image8"></div>
      <div className="image9"></div>
      <div className="image10"></div>
      <div className="bio">
          <h3 className="bio-title">matheus ipsum</h3>
          <p className="bio-content">
          ijvwi uhwiu weufhiuw ierwuhfiwu iewuhfiuw 
          jw oewufhnowuenh ewiuh wihbf sihbh hb jbihbwi
          </p>
      </div>
      <div className="insta-button">
          <h3>Instagram link</h3>
          <Logo className="logo"/>
      </div>
 </div>


 <div className="leo-gallery">
      <div className="image1"></div>
      <div className="image2"></div>
      <div className="image3"></div>
      <div className="image4"></div>
      <div className="image5"></div>
      <div className="image6"></div>
      <div className="image7"></div>
      <div className="image8"></div>
      <div className="image9"></div>
      <div className="image10"></div>
      <div className="bio">
          <h3 className="bio-title">matheus ipsum</h3>
          <p className="bio-content">
          ijvwi uhwiu weufhiuw ierwuhfiwu iewuhfiuw 
          jw oewufhnowuenh ewiuh wihbf sihbh hb jbihbwi
          </p>
      </div>
      <div className="insta-button">
          <h3>Instagram Link</h3>
          <Logo className="logo"/>
      </div>
 </div>

     </div>

    </div>
)

export default GalleryPage;