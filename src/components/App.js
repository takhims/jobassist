import React from "react";
import Homepage from './Homepage';
import Header from './Header';
import KnowMore from "./KnowMore";
import { BrowserRouter, Route } from "react-router-dom";
import Tryit from "./Tryit";
import Result from "./Result";


class App extends React.Component {
    render() {
      return (
        <div>
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={Homepage} />
              <Route path="/knowmore" exact component={KnowMore} />
              <Route path="/tryit" exact component={Tryit}/>
              <Route path="/result/:result" exact component={Result}/>
            </div>
          </BrowserRouter>
        </div>
      );
    }
  }

  export default App;
  
