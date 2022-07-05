import React  from "react";
import '../App.css'
import MainFile from "./MainFile";


class App extends React.Component{
  
   render(){
     return(
       <div className="App" data-test="App">
      
       <MainFile/>
       </div>
     );
   }
};


export default App;