import "./styles.css";
import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
  activity: "Learn Express.js",
  accessibility: 0.25,
	type: "education",
	participants: 1,
	price: 0.1,
	link: "https://expressjs.com/",
	key: "3943506"

  }

  getActivity = (event) => {
    const url = "https://www.boredapi.com/api/activity/"
    const body = {

    }
    axios
      .get(url, body, {
          header: {
            Authorization: "joice-silva-molina"
          }
      })
      .then((res) => {
        console.log(res.data);
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
        <h1>Ainda não decidi</h1>
        <button onClick={this.getActivity}>Clique aqui!</button>
        <hr />
        <h3>Atividade</h3>
        <p>Nome: {activity} </p>
        <p>Tipo: {type}</p>
        <p>Participantes: {participants} </p>
        <p>Preço: ${price} </p>
      </div>
    );
  }
}
 
