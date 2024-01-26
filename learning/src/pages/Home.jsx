import { useState } from "react";
const Home = () => {

    const [name, setName] = useState('mario')
    const [age, setAge] = useState(26)
    const handleClick = () => {
      setName('ahmad');
      setAge(30)
    }

  return (
    <div>
      <h1>Home Page </h1>
      <p>{name} is {age}</p>
      <button onClick={handleClick}>Click Me</button>
     
    </div>
  )
}

export default Home
