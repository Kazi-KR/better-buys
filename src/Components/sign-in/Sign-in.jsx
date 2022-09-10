import React from "react";

import './signIn.scss'

import FormInput from "../form-input/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { auth, signInwithGoogle } from "../../firebase/firebase";


class SignIn extends React.Component{
    state={
        email:'',
        password:''
    }
    
    handleSubmit = async event => {
        event.preventDefault();
    
        const{email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});

        }catch(error){
            console.log(error);
        }
      };
    
    handleChange = event =>{
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
    };
    
    render(){
        return(
            <div className="sign-in">
                <h1>I already have an account</h1>
                <p>Sign In using your credentials</p>
                <form onSubmit={this.handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label='Email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='Password'
                    required
                />
                <div className="buttons">
                <CustomButton type='submit'>
                    Sign In    
                </CustomButton>
                <CustomButton onClick={signInwithGoogle} isGoogleSignIn>
                    Sign In With Google   
                </CustomButton>
                </div>
                </form>
            </div>
        )
    }
}

export default SignIn;