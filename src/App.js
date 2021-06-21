import config from './config'
import axios from "axios";
import React, {Component} from "react";
import { Route, Switch, withRouter } from 'react-router-dom';
import Landing from "./components/Landing";

class App extends Component {

  state = {
    movies: []
  }

  getInitialDetails = () => {
    axios
      .get(`${config.API_URL}/api/main`)
      .then((response) => {
        this.setState({
          movies: response.data,
        }, (() => {
          console.log(response.data)
        }));
      })
      .catch((err) => {
        console.log("Fetching data failed", err);
      });
  };

  componentDidMount() {
    this.getInitialDetails();
  }

  render() {

    return (
      <div className="App">
        <Switch>
          <Route
              exact path="/main"
              render={(routeProps) => {
                return <Landing movies={this.state.movies} {...routeProps} />;
              }}
            />
        </Switch>
      </div>
    );

  }

}

export default withRouter(App);
