import React from 'react';
import Automcomplete1 from './Autocomplete1';
import Automcomplete2 from './Autocomplete2';
import Automcomplete3 from './Autocomplete3';
import Automcomplete4 from './Autocomplete4';



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
            <div>
                <Automcomplete1 setValue={this.setValue1} />
                <Automcomplete2 setValue={this.setValue2} />
                <Automcomplete3 setValue={this.setValue3}/>
                <Automcomplete4 setValue={this.setValue4}/>
            </div>
        );
    }
}

export default Tryit;