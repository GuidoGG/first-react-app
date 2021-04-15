import React, { Component } from "react";
import Logo from "./Pictures/Picborrel.png";

class ShowPicture extends Component {	 
	render() {
		return (
			<div> 
				hello
                <div>
                <img className="photo" src={Logo} alt="Logo"></img>
                 </div>
			 </div>
		);
	}
}

export default ShowPicture;