import config from './config'
import axios from "axios";
import React from "react";
import { Route, useNavigate, Routes  } from 'react-router-dom';
import Landing from "./components/Landing";
import MyNav from "./components/MyNav";
import {useState, useEffect} from 'react'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

// class App extends Component {

//   state = {
//     movies: []
//   }

//   getInitialDetails = () => {
//     axios
//       .get(`${config.API_URL}/api/main`)
//       .then((response) => {
//         this.setState({
//           movies: response.data,
//         }, (() => {
//           console.log(response.data)
//         }));
//       })
//       .catch((err) => {
//         console.log("Fetching data failed", err);
//       });
//   };

//   componentDidMount() {
//     this.getInitialDetails();
//   }

//   render() {

//     return (
//       <div className="App">
//       <MyNav />
//         <Switch>
//           <Route
//               exact path="/main"
//               render={(routeProps) => {
//                 return <Landing movies={this.state.movies} {...routeProps} />;
//               }}
//             />
//         </Switch>
//       </div>
//     );

//   }

// }

function App() {

  const [movies, setMovies] = useState([])  

  // This hook is for us to redirect users to different urls
  const navigate = useNavigate()

  return(
    <div> 
      <MyNav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>

    </div>
  )

}

export default App;
