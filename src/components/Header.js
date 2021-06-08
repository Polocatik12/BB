import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
       <div id="home" className="header-wraper">
          <div className="main-info">
              <h1>Myjnia Bwash w Lublinie</h1>
              <Typed
                className="typed-text"
                strings={["MYJNIA SAMOCHODOWA", "DETALE SĄ NAJWAŻNIEJSZE", "POWIERZ NAM SWOJE AUTO", "A MY ZAJMIEMY SIĘ RESZTĄ"]}
                typeSpeed={40}
                backSpeed={60}
                loop
              /> 
              </div> 
       </div>
    )
}

export default Header
