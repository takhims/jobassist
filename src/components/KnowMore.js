import React from 'react';
import { Link } from 'react-router-dom';

class KnowMore extends React.Component {
    render()
    {
        return (
            <div className="container" style={{ marginTop: "15px"}}>
            <div >
                <h1></h1>
                <h1 style={{ color : "#428e8d"}}>
                    Why JobAssist?
                </h1>
                <h3>
                The problem that is faced a lot in the corporate sector for the employees is that, a lot of the workers are not working with satisfaction, no matter what amount of money you get for some people the biggest satisfaction is to work at the position they are passionate about. 

                <br/><br/>Some of the most common thoughts that arise in one’s mind is : <br/>

                <br/>-->Should i switch my job?<br/>
                -->Am I only capable enough to work here?<br/>
                -->
                Which job will best fit according to the skill sets i possess?<br/><br/>

                So as to eliminate these common problems, our webapp will help remove these issues.
                </h3>

                <br/>
                <h1 style={{ color : "#428e8d"}}>
                    How its useful?
                </h1>
                <h3>
                We have worked upon our idea which works as a tool for making the best predictions according to the skill-sets the user posseses. Our tool caters as a virtual assistant for predicting the best fitted job.
                <br/><br/>
                It will require skillsets as input, it’ll evaluate the inputs and based upon that it will intelligently predict the best fit job title.
                </h3>
                <br/>
            </div>
            <div style={{justifyContent: "center", display: "flex", margin: "0 auto"}}>
            <Link to="/" >
                    <button className="ui button" style={{backgroundColor: "#428e8d", }}>Get started!</button>
            </Link>
            </div>
            </div>
        )
    }
}
export default KnowMore;