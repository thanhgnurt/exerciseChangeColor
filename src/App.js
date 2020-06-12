import React from 'react';
import './App.css';
// import ListProduct from './components/ListProduct';
import ManiColorFont from './components/ColorFront/ManiColorFont';
// import Demo from './components/TrainingRedux/Demo'
import IndexForm from './components/From/IndexForm';
import TodoIndex from './components/TodoList/TodoIndex';
import Calender from './components/Calender';


 



function App() {
  return (
    <div className="App"  >
      {/* <ListProduct/> */}
      <ManiColorFont/>
      <IndexForm/>
      <br/>
      <hr/>
      <br/>

      <TodoIndex/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Calender/>
     
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      
      
    </div>
  );
}

export default App;
