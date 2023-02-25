import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { recipeContext } from "./context";
import axios from 'axios'
const RecipeContextProvider = (props)=>{
    const [user, setUser] = useState({email:"",password:""})
    const [data, setdata] = useState({email:"",password:""})
    const [menu,setmenu] = useState([])
    const [recipe, setRecipe] = useState({title:"",author:"",file:"",ingredients:"",direction:""})
    const navigate = useNavigate()
    const login=()=>{
        axios.post("https://recipe-62gj.onrender.com/login",user).then((res)=>{
            if(res.status === 200){
                alert("login successfully");
                window.localStorage.setItem("token",res.data.token);
                navigate("/home")
                fetchdata();
            }
        })
    }
    const signup=()=>{
        axios.post("https://recipe-62gj.onrender.com/register",user).then((res)=>{
            if(res.status === 200){
                alert("register Successfully")
                navigate("/")
            }else{
                alert("user alredy exist")
            }
        })
    }
    const fetchdata = ()=>{
        const token = window.localStorage.getItem("token");
        const config = {
            headers:{
                authorization:token
            }
        }
        axios.get("https://recipe-62gj.onrender.com/recipe",config).then((res)=>{
                setmenu(res.data.recipies)
        })
    }
    const createrecipe=()=>{
        const token = window.localStorage.getItem('token')
        const config={
            headers:{
                authorization:token   
            }
        }
        axios.post("https://recipe-62gj.onrender.com/recipe",recipe,config).then((res)=>{
            if(res.status === 200){
                alert("new recipe added");
                navigate("/home")
            }
        })
    }
  return (
    <recipeContext.Provider value={{
      setUser,
      user,
      login,
      data,
      setdata,
      signup,
      menu,
      setRecipe,
      recipe,
      createrecipe
    }}>
    {props.children}
    </recipeContext.Provider>
  )
}

export default RecipeContextProvider;