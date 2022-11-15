import React, { Component } from "react";
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);
    }

    getpeoplelist = () => {
        axios
            .get("http://203.250.32.193:8000/sampleapi/people/")
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err));
    };

    insertpeople = () => {
        const person = {
            name: "POST TEST",
            birth_year: "1945",
            eye_color: "BLUE",
            species: 1
        };
        axios
            .post("http://203.250.32.193:8000/sampleapi/people/", person)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <main>
                This is main
                <button onClick={this.getpeoplelist}>
                    GET
                </button>
                <button onClick={this.insertpeople}>
                    POST
                </button>
            </main>
        );
    }
}

export default App;