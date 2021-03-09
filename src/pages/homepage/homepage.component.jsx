import React from "react";

import "./homepage.styles.scss";

import Directory from "../../components/directory/directory.component";
import CtaContainer from "../../components/cta/cta.component"

const HomePage = ({history}) => (
  
    <div className="homepage">
     <CtaContainer/>
      <Directory />
    </div>
)

export default HomePage;