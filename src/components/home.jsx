import { useContext } from "react";
import { Link } from "react-router-dom";
import { recipeContext } from "./contextApi/context";
import "./home.css"
const Home=()=>{
    const {rs,recipesearch,logout} = useContext(recipeContext);
    return(
        <div className="container">
           <div className="header">
            <span id="heading">Recipe App</span>
            <span onClick={logout} id="logout">logout</span>
           </div>

           <div className="searchbar">
            <input type="text" placeholder="search here..." onChange={recipesearch}/>
            <Link to="/create"><div id="add">🍕new</div></Link>
           </div>
           <div className="content">
            {
               rs.map((item, i)=>{
                    return(
                           <div className="div1" key={i}>
                            <div className="image-container">
                            <p>{item.title}</p>
                            <img src={item.file} alt="recipe" />
                            </div>
                            <div className="description-container">
                             <p>{item.author}</p>
                             <p>{item.ingredients}</p>
                             <p>{item.direction}</p>
                            </div>
                           </div>
                    )
                })
            }
           </div>
        </div>
    )
}
export default Home;