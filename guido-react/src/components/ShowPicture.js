import React, { Component } from "react";
import Logo from "./Pictures/Picborrel.png";

class ShowPicture extends Component {	 
	render() {
		return (
			<div> 
				
                <img className="photo" src={Logo} alt="Logo"></img>
        
			 </div>
		);
	}
}

export default ShowPicture;