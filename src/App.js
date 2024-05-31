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

      return ( <div>
        <div className ='head' key={id}>
        <div>
          <h2>{id} - {name}</h2>
        </div>
        <div> 
          <img src={image} alt="foto" width="250px"/>
        </div>
        <div> 
          <h4>{options}</h4>
        </div>
        <div> 
          <h3>{location}</h3>
        </div>
        <div> 
          <h4>{description}</h4>
        </div>
        <div>
          <button onClick={()=> {removeTower(id)}}>Remove</button>
        </div>
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
