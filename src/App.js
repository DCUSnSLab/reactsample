import React, { useState } from 'react';
import axios from "axios";

function App() {
    const [users, setUsers] = useState(null);
    const [images, setImages] = useState(null);

    const backend_url = "http://203.250.32.193:8000"

    const getpeoplelist = () => {
        axios
            .get(backend_url + "/sampleapi/peoples/")
            .then(res => {
                setUsers(res.data)
                console.log(res.data)
            })
            .catch((err) => console.log(err));
    };

    const getimagelist = () => {
        axios
            .get(backend_url + "/sampleapi/images/")
            .then(res => {
                setImages(res.data)
                console.log(res.data)
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
            .post(backend_url + "/sampleapi/people/", person)
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
            <button onClick={getimagelist}>
                Image GET
            </button>
            <div>
                example
            </div>
            <div>
                <h2>User result</h2>
                <div>{ users && users[0].name }</div>
                <div>{ users && users[0].birth_year }</div>
                <div>{ users && users[0].eye_color }</div>
            </div>
            <div>
                <h2>Image result</h2>
                { images && images.map((list, i) => (
                    <div key={i}>
                        <div>
                            <img src={backend_url + list.image} />
                            <div>
                                <h4>{list.title}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default App;