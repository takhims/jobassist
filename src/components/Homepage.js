import React from 'react';
import Background from './background2.jpg';
import { Link } from "react-router-dom";

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <div style={{
                    backgroundImage: `url(${Background})`,
                    justifyContent: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100%", 
                    height:"100%",
                    
                    backgroundPosition: "center"
                }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "92.5vh"
                        }}
                        >
                        <p style={{ color: "#428e8d", marginTop: "200px", fontSize: "60px", lineHeight: "0px" }}><b>JobAssist</b></p>
                        <p
                            style={{
                            color: "#414141",
                            lineHeight: "0px"        
                            }}
                        >
                            <b>WE RECOMMEND THE MOST SUITABLE JOBS!</b>
                        </p>
                        <br/>
                        <Link to="/knowmore">
                            <button className="ui button" style={{backgroundColor: "#428e8d"}}>Know More</button>
                        </Link>
                        <br/>

                        
                        <Link to="/tryit">
                             <div className="ui animated button" tabindex="0" style={{backgroundColor: "#428e8d"}}>
                            <div className="visible content">Try it</div>
                            <div className="hidden content">
                                <i className="right arrow icon"></i>
                            </div>
                            </div>
                        </Link>
                        
                        </div>
                
                </div>  
            </div>
        )
    }
}

export default Homepage;