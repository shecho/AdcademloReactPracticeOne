import React from 'react'
import './App.css'
import Panel from './components/panel-component/Panel-component'
import AddUser from './components/add- user-component/add-user-component'
import CardContainer from './components/card-container-component/card-container-component'
// import FixedContainer from './components/general-container.component/general-container.component'
// import OutlinedCard from './components/card-component/card-component'



function App() {
  return (
    <div className="App ">
       
            <Panel/>
            <AddUser/>
            <CardContainer>
             
 
            </CardContainer>  
  
       

    </div>
  );
}

export default App;
