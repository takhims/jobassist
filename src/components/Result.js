import React from 'react';
import { Link } from "react-router-dom";


class Result extends React.Component{
    render() {
        return(
            <div className = "container">
              <h1 style={{ color: "#428e8d", marginTop: "100px", alignItems: "center" }}>      According to the skillset you possess, you will be most efficient working as an:</h1>
              <h1 style={{ color: "#428e8d", marginTop: "20px", alignItems: "center", textAlign: "center" }}>Software Engineer</h1>
              <div style={{ color: "#428e8d", marginTop: "15px", alignItems: "center", textAlign: "center" }}>
                <Link to="/tryit">
                    <div className="ui animated button" tabindex="0" style={{ backgroundColor: "#428e8d" }}>
                    <div className="visible content">Try Again</div>
                    <div className="hidden content">
                        <i className="right arrow icon"></i>
                    </div>
                </div>
                </Link>
              </div>
            </div>
        )
    }
}

export default Result;