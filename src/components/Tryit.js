import React from 'react';
import Automcomplete1 from './Autocomplete1';
import Automcomplete2 from './Autocomplete2';
import Automcomplete3 from './Autocomplete3';
import Automcomplete4 from './Autocomplete4';

class Tryit extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      s1: '',
      s2: '',
      s3: '',
      s4: '',
      result: ''
    };
  }

  setValue1 = (value) => {
    this.setState({
      s1: value
    })
  }

  setValue2 = (value) => {
    this.setState({
      s2: value
    })
  }

  setValue3 = (value) => {
    this.setState({
      s3: value
    })
  }

  setValue4 = (value) => {
    this.setState({
      s4: value
    })
  }

  onSubmit = () => {
    let { s1, s2, s3, s4 } = this.state;
    if (s1 === '' || s2 === '' || s3 === '' || s4 === '') {
      alert('Please fill all four skills')
    }
    else {

      let params = {
        s1, s2, s3, s4
      }

      let query = Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
      fetch("http://127.0.0.1:5000/job-assist/api/v1/predict?" + query)
        .then(response => response.json())
        .then(data => {
          this.setState({result: data.result[0]})
          this.props.history.push('/result/'+data.result[0])
        })
        .catch(error => alert('An Error Occured'));
    }
  }

  render() {
    return (
      <div className="container" style={{ alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ color: "#428e8d", marginTop: "100px", alignItems: "center" }}>Hi! Please type atleast four skills that you possess</h1>
        <Automcomplete1 setValue={this.setValue1} /><br />
        <Automcomplete2 setValue={this.setValue2} /><br />
        <Automcomplete3 setValue={this.setValue3} /><br />
        <Automcomplete4 setValue={this.setValue4} /><br />
        <div onClick={this.onSubmit} className="ui animated button" tabindex="0" style={{ backgroundColor: "#428e8d" }}>
          <div className="visible content">Go</div>
          <div className="hidden content">
            <i className="right arrow icon"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Tryit;
