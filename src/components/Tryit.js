import React from 'react';
import Automcomplete1 from './Autocomplete1';
import Automcomplete2 from './Autocomplete2';
import Automcomplete3 from './Autocomplete3';
import Automcomplete4 from './Autocomplete4';
import { Link } from "react-router-dom";


class Tryit extends React.Component {

    setValue1 = (value) => {
        console.log(value)
    }

    setValue2 = (value) => {
        console.log(value)
    }

    setValue3 = (value) => {
        console.log(value)

    }

    setValue4 = (value) => {
        console.log(value)
    }
    render() {
        return (
            <div className="container" style={{ alignItems: "center", justifyContent: "center" }}>
                <h1 style={{ color: "#428e8d", marginTop: "100px", alignItems: "center" }}>Hi! Please type atleast four skills that you possess</h1>
                <Automcomplete1 setValue={this.setValue1} /><br />
                <Automcomplete2 setValue={this.setValue2} /><br />
                <Automcomplete3 setValue={this.setValue3} /><br />
                <Automcomplete4 setValue={this.setValue4} /><br />
                <Link to="/result">
                <div className="ui animated button" tabindex="0" style={{ backgroundColor: "#428e8d" }}>
                    <div className="visible content">Go</div>
                    <div className="hidden content">
                        <i className="right arrow icon"></i>
                    </div>
                </div>
                </Link>
            </div>
        );
    }
}

export default Tryit;