import React from "react";

import "./cta.styles.scss"

import CustomButton from "../custom-button/custom-button.component";

const CtaContainer = () => (
        <div
        className="cta-container"
        >
        
        <h1 className="cta-heading">WHY NOT TREAT YOURSELF? </h1>
        <CustomButton>BOOK NOW</CustomButton>
        <CustomButton>VIEW GALLERY</CustomButton>
        </div>
)

export default CtaContainer;