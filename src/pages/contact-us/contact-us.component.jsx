import React from "react";

import "./contact-us.styles.scss"

import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";




class ContactUs extends React.Component {
 constructor(props) {
        super(props);
        
        this.state = {
            email: "",
            password: "",
            message: "",
            name: ""
        }
     }

     handleSubmit = event => {
        event.preventDefault();
    
        this.setState({ email: "", password: "" })
    }
    
    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value })
    };

render() 
   { return(<div className="contact-us">
     <div className="background-div"></div>
     <div className="form-container">
            <FormInput
             name="email" 
             type="email" 
             value={this.state.email} 
             required
             label="email"
             handleChange={this.handleChange}
             />
            <FormInput
             name="name" 
             type="text" 
             value={this.state.name} 
             required
             label="name"
             handleChange={this.handleChange}
             />
              <FormInput
             name="message" 
             type="text" 
             value={this.state.message} 
             required
             label="message"
             handleChange={this.handleChange}
             />
             <div className="address">
                 <span className="address1">Address:</span>
                 <span className="address2">23 somewhere road</span>
             </div>
     </div>
     <CustomButton>Contact Us</CustomButton>
     <div className="map"></div>
    </div>)}
}

export default ContactUs;