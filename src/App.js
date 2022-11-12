import React, { Component } from "react";
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);
    }

    getpeoplelist = () => {
        axios
            .get("http://localhost:8000/sampleapi/people/")
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err));
    };

    insertpeople = () => {

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