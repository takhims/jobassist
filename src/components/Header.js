import React from 'react';
//import GoogleAuth from './GoogleAuth';

class Header extends React.Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark" style={{height: "70px"}}>
                    <a className="navbar-brand" href="/">
                            JobAssist
                    </a>
                
                   
                </nav>
            </div>
        )
    }
}

export default Header;