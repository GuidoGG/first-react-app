import React from "react";
import ShowPicture from "./ShowPicture";
import Logo from "./Pictures/Picborrel.png";
import "./guido.css";
import ToggleBox from "./ToggleBox";


function Portfolio(){
    return (
        <div>
            <ToggleBox title="Show Vehicles">
				<ShowPicture>
                <img className="photo" src={Logo} alt="Logo"></img>
                </ShowPicture>
			</ToggleBox>
        <div>
        <h1>
            Dit is mijn portfolio.
        </h1>
        <p>
            Hier komen voorbeelden van mijn React kunsten te staan.
        </p>
        <br>
        </br>
        <p>
            Hoe ziet dit eruit?
        </p>
        </div>
        <div style={{color:"blue"}}>
            Een blauwe div in een div
        </div>

        <button>Show image</button>
        <br>
        </br>
    

        </div>
    )
}

export default Portfolio;