import React from "react";
import Autosuggest from 'react-autosuggest';
import { skills } from './language';

const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : skills.filter(lang =>
      lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };
  
  
  const getSuggestionValue = suggestion => suggestion.name;
  
 
  const renderSuggestion = suggestion => (
    <div>
      {suggestion.name}
    </div>
  );
  

class Autocomplete1 extends React.Component{

    constructor() {
        super();
    
      
        this.state = {
          value: '',
          suggestions: []
        };
      }

    componentDidMount = () => {
        console.log(skills)
    }

    onChange = (event, { newValue }) => {
        this.props.setValue(newValue)
        this.setState({
          value: newValue
        });
      };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: getSuggestions(value)
        });
      };
    
      // Autosuggest will call this function every time you need to clear suggestions.
      onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
      };
    

    render(){
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'Type a Skill',
            value,
            onChange: this.onChange
            };
        return(
            <div >
                    <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />             
            
            </div> 
        )
    }
}

export default Autocomplete1;