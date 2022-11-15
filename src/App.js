import React, { useState } from 'react';
import axios from "axios";

function App() {
    const [users, setUsers] = useState(null);

    const getpeoplelist = () => {
        axios
            .get("http://203.250.32.193:8000/sampleapi/people/")
            .then(res => {
                setUsers(res.data)
                setLoading(true)
            })
            .catch((err) => console.log(err));
    };

    const insertpeople = () => {
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

    return (
        <main>
            This is main
            <button onClick={getpeoplelist}>
                GET
            </button>
            <button onClick={insertpeople}>
                POST
            </button>
            <div>
                example
            </div>
            <div>
                <div>{ users && users[0].name }</div>
                <div>{ users && users[0].birth_year }</div>
                <div>{ users && users[0].eye_color }</div>
            </div>
        </main>
    );
}

export default App;