import {useState} from "react";
import './App.css';

function App() {
  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(["Mustafa", "Halibo"]);
  const [address, setAddress] = useState({title:"Erzincan", zip:24000})
  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>
      <button onClick={()=>setName('Ozi')}>Change Name</button>
      <button onClick={()=>setAge(40)}>Change Age</button>
      <hr />
      <br></br>
      <h2>Friends</h2>
      {friends.map((friend, index) =>(
      <div key={index}>{friend}</div>
      ))}
      <br></br>
      <button onClick={()=>setFriends([...friends, "Ayşe", "Didem"])}>Add New Friend</button>
      <hr />
      <br></br>
      <h2>Address</h2>
      <div>
          {address.title} {address.zip}
      </div>      
      <br></br>
      <button onClick={()=>setAddress({title: "Konya", zip: 42000})}>Change The Address</button>
    </div>
  );
}
export default App;