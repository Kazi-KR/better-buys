import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";


import Homepage from "./pages/homepage/homepage";

import './App.css';
import Shop from "./pages/shoppage/shop";
import Header from "./Components/header/header";
import LoginPage from "./pages/loginpage/LoginPage";
import { auth, createUserDocument } from "./firebase/firebase";

class App extends React.Component{
  state={currentUser:null}
  unsubscribeAuth=null;
  
  componentDidMount(){
    this.unsubscribeAuth=auth.onAuthStateChanged( async userAuth=>{
      if(userAuth){
        const userRef=await createUserDocument(userAuth);

        userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
           }, () =>{
          });
        });
        console.log(this.state)
      }
      else{
        this.setState({currentUser:userAuth});
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeAuth();
  }

  render(){
  return(
    <div>
      <Router>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/shop" element={<Shop/>}/>
          <Route exact path='/login' element={<LoginPage/>}/>
        </Routes>
      </Router>
      
     
    </div>
  )
  }

}

export default App;
