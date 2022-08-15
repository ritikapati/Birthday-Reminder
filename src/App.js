import React,{useState} from 'react';
import './App.css';
import './data';
import { data } from './data';
import List from './List';

function App() {
  const [people,setPeople]=useState(data);
  return (
    <section className="container">
      <h3>Birthday's Today</h3><hr/>
      <List people={people}/>
      <p></p>
      <button className='btn' onClick={()=>setPeople([])}>Clear ALL</button>
    </section>
  );
}

export default App;
