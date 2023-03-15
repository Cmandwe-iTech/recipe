import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { recipeContext } from "./contextApi/context";
import "./login.css"
const LogIn = () => {
  const {user, setUser, login} = useContext(recipeContext);
  const [check, setcheck] = useState(false)
  const SubmitHAndler=()=>{
    console.log("ok");
    if(check){
      login();
    }else{
      alert("not ok")
    }
  }
  return (
    <div className="login-container">
      <h1>Sign In</h1>
      <div className="div">
        <label htmlFor="email">Email</label><br/>
        <input type="email" placeholder="enter emial here..." className="input" onChange={(e)=>setUser({...user, email:e.target.value})}/>
      </div>
      <div className="div">
        <label htmlFor="password">Password</label><br/>
        <input type="password" placeholder="enter password here..."className="input" onChange={(e)=>setUser({...user, password:e.target.value})}/>
      </div>
      <input type="checkbox" onChange={()=>setcheck(true)}/><span>remember me?</span>
      <div><button onClick={SubmitHAndler}>Submit</button></div>
      <Link to="/signup"><button>Signup</button></Link>
    </div>
  );
};
export default LogIn;
