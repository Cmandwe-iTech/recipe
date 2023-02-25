import { useContext } from "react";
import { recipeContext } from "./contextApi/context";
import "./create.css"
const Create = ()=>{
    const {recipe, setRecipe, createrecipe} = useContext(recipeContext);
    const Newrecipehandler=()=>{
        createrecipe();
    }
    console.log(recipe);
    return(
        <div className="create-conatiner">
          <h1>Create Your Recipe</h1>
          <div className="recipe-creator">
              <p>recipe title</p>
              <input type="text" onChange={(e)=>setRecipe({...recipe, title:e.target.value})}/>
              <p>Author</p>
              <input type="text" onChange={(e)=>setRecipe({...recipe, author:e.target.value})}/>
              <p>Please upload your recipe image</p>
              <input type="file" onChange={(e)=>setRecipe({...recipe, flie:e.target.files[0]})}/>
              <p>ingredients</p>
              <input type="text" onChange={(e)=>setRecipe({...recipe, ingredients:e.target.value})}/>
              <p>Recipe Directions</p>
              <input type="text" onChange={(e)=>setRecipe({...recipe, direction:e.target.value})}/><br/>
              <button onClick={Newrecipehandler}>Create new recipe</button>
          </div>
        </div>
    )
}
export default Create;