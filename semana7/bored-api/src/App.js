import "./styles.css";
import React from "react";
import axios from "axios";



export default class App extends React.Component {
  state = {
    activity: []

  }

  getActivity = (event) => {
    const url = "https://www.boredapi.com/api/activity/"
    const body = {
      activity: "Learn Express.js",
      accessibility: 0.25,
      type: "education",
      participants: 1,
      price: 0.1,
      link: "https://expressjs.com/",
      key: "3943506"

    }
    axios
      .get(url, body, {
          header: {
            Authorization: "joice-silva-molina"
          }
      })
      .then((res) => {
        
        this.setState({activity: res.data})
      })
      .catch((err) => {
        console.log(err);
      });
  };


  render() {
    const {activity, type, participants, price } = this.state.activity
    return (
      <div className="App">
        <div className="Text"><h1 >E-COMMERCE MOLINA</h1></div>
        <div className="Button"><button onClick={this.getActivity}>Próximo!</button></div>
        <hr />
        <h3>Sales Platform!</h3>
        <p>Nome: {activity} </p>
        <p>Tipo: {type}</p>
        <p>Participantes: {participants} </p>
        <p>Preço: ${price} </p>
      </div>
    );
  }
}
