import { useState } from 'react';

const Home = () => {

    const handleClick = (e) => {
        console.log("Hello", e); // prints the event which is a default parameter of these event specific functions
    }

    const handleClickAgain = (name, e) => {
        console.log("Hello " + name);
        console.log(e.target);
    }

    const [name, setName] = useState("Mario");
    const [age, setAge] = useState(15);

    const Statefunction = () => {
        setName("Luigi");
        setAge(16);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick = {handleClick}>Click Me</button>
            <button onClick = {(e) => handleClickAgain("Mario", e)}>Click Me Again</button>
            <p>{name + ": " + age}</p>
            <button onClick = {Statefunction}>State and Hooks Button</button>

        </div>
    );
}
 
export default Home;