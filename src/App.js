import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {
    const [towers, setTowers] = useState(data);
    
    const removeTower =(id)=> {
      let newTowers = towers.filter(tower => tower.id !== id);
      setTowers(newTowers)
    }

  return (<div className='container'>
    <div>
      <h1> the {towers.length} of tallest buildings in the world</h1>
    </div>
    {towers.map((element => {
      const{id, name, options, location, description, image} = element;

      return ( <div key={id}>
        <div className ='head' >
        
          <h2>{id} - {name}</h2>
          <img src={image} alt="foto" width="250px"/>
          <h4>{options}</h4>
          <h3>{location}</h3>
          <h4>{description}</h4>
          <button onClick={()=> {removeTower(id)}}>Remove</button>
        </div>
              </div>
    );
    }))}
    <div className='top'>
    <button  onClick={() => setTowers([])}>delete all</button>
    </div>
  </div>
  );
}

export default App;
