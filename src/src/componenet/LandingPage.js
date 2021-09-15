import React from "react";
import './css/LandingPage.css'

const LandingPage = () => {
  return (
    <header className="landingPage">
        <div className="mainContainer">
        
            <div className="searchBox">

                <input
                    type="text"
                    placeholder="looking for a movie ?"
                    id="searchBar">
    
                </input>

            </div>

         </div>
    </header>
  );
};

export default LandingPage;
