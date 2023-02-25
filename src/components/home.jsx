import { useContext } from "react";
import { Link } from "react-router-dom";
import { recipeContext } from "./contextApi/context";
import "./home.css"
const Home=()=>{
    const {menu} = useContext(recipeContext);
    console.log(menu);
    return(
        <div className="container">
           <div className="header"><h3>Recipe App</h3></div>
           <div className="searchbar">
            <input type="text" placeholder="search here..."/>
            <Link to="/create"><div id="add">🍕new</div></Link>
           </div>
           <div className="content">
            {
                menu.map((item, i)=>{
                    return(
                           <div className="div1" key={i}>
                            <p>{item.title}</p>
                            <img src={item.file} alt="recipe" />
                           </div>
                    )
                })
            }
           </div>
        </div>
    )
}
export default Home;