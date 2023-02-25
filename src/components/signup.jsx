import { useState } from "react";
import { useContext } from "react";
import { recipeContext } from "./contextApi/context";
import "./login.css";
const Signup = () => {
  const {data, setdata, signup} = useContext(recipeContext);
  const [repeat, setRepeat] = useState("");
  const [check, setcheck] = useState(false)
  const signupHandler=()=>{
    if(isValid && check){
      signup();
    }
  }
  let isValid=(user)=>{
    if(!user.email){
      alert("email is required");
      return 0
    }
    else if(!user.password){
      alert("password is required");
      return 0
    }
    else if(user.password.length < 5){
      alert("password must be more than 4 characters")
      return 0
    }
    else if(user.password.length > 10){
      alert("password must be less than 10 characters")
      return 0
    }
    else if(!repeat){
      alert("repeat password is require")
      return 0
    }else if(user.password !== repeat){
      alert("passwords are not matching");
      return 0
    }
    return 1
  }
  return (
    <div className="login-container">
      <h1>Sign Up</h1>
      <div className="div">
        <input
          type="email"
          placeholder="enter emial here..."
          className="input" onChange={(e)=>setdata({...data, email:e.target.value})}
        />
      </div>
      <div className="div">
        <input
          type="password"
          placeholder="enter password here..."
          className="input" onChange={(e)=>setdata({...data, password:e.target.value})}
        />
      </div>
      <div className="div">
        <input
          type="password"
          placeholder="repeat password here..."
          className="input" onChange={(e)=>setRepeat(e.target.value)}
        />
      </div>
      <input type="checkbox" onChange={(e)=>setcheck(!check)}/>
      <span>I agree with terms and condition</span>
      <div>
        <button onClick={signupHandler}>Continue</button>
      </div>
    </div>
  );
};
export default Signup;
