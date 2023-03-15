import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { recipeContext } from "./context";
import axios from 'axios'
const RecipeContextProvider = (props)=>{
    const [user, setUser] = useState({email:"",password:""})
    const [data, setdata] = useState({email:"",password:""})
    const [menu,setmenu] = useState([])
    const [rs, setrs] = useState([]);
    // const [recipe, setRecipe] = useState({title:"",author:"",file:"",ingredients:"",direction:""})
    const [title, settitle] = useState("")
    const [author, setauthor] = useState("")
    const [file, setfile] = useState("")
    const [ingredients, setingredients] = useState("")
    const [direction, setdirection] = useState("")
    const navigate = useNavigate()
    const login=()=>{
        axios.post("https://recipe-62gj.onrender.com/login",user).then((res)=>{
            console.log(res.status);
            if(res.status === 200){
                alert("login successfully");
                window.localStorage.setItem("token",res.data.token);
                fetchdata();
                navigate("/home")
            }else{
                alert("register first")
            }
        })
    }
    const signup=()=>{
        axios.post("https://recipe-62gj.onrender.com/register",data).then((res)=>{
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
                setrs(res.data.recipies)
                navigate("/home")
        })
    }
    const createrecipe=async(e)=>{
        e.preventDefault()
        try {
            let formData = new FormData();
            formData.append("title",title)
            formData.append("author",author)
            formData.append("file",file)
            formData.append("ingredients",ingredients)
            formData.append("direction",direction)
        const token = window.localStorage.getItem('token')
        const config={
            headers:{
                authorization:token,
                "Content-Type": "multipart/form-data"
            }
        }
        
       await axios.post("https://recipe-62gj.onrender.com/recipe", formData, config).then((res)=>{
            if(res.status === 200){
                console.log(res.data.recipies);
                alert("new recipe added");
                fetchdata()
            }
        })
        } catch (error) {
            console.log(error);
        }
        
    }
  const recipesearch=(e)=>{
    e.preventDefault();
            if(e.target.value === ""){
                setrs(menu)
                return
            }
            let fr = menu.filter((item, i)=> item.title.toLowerCase().includes(e.target.value))
            setrs(fr)
    }
const logout =()=>{
    window.localStorage.removeItem("token")
    navigate("/")
}
  return (
    <recipeContext.Provider value={{
      setUser,
      user,
      login,
      data,
      setdata,
      signup,
      createrecipe,
      settitle,
      setauthor,
      setfile,
      setingredients,
      setdirection,
      recipesearch,
      rs,
      logout
    }}>
    {props.children}
    </recipeContext.Provider>
  )
}

export default RecipeContextProvider;