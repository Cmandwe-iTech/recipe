import { useContext } from "react";
import { recipeContext } from "./contextApi/context";
import "./create.css"
const Create = ()=>{
    const {settitle, setauthor, setfile, setingredients, setdirection, createrecipe} = useContext(recipeContext);
    return(
        <div className="create-conatiner">
          <h1>Create Your Recipe</h1>
          <form action="" onSubmit={createrecipe}>
          <div className="recipe-creator">
              <p>recipe title</p>
              <input type="text" onChange={(e)=>{settitle(e.target.value)}}/>
              <p>Author</p>
              <input type="text" onChange={(e)=>{setauthor(e.target.value)}}/>
              <p>Please upload your recipe image</p>
              <input type="file" accept="image/*" onChange={(e)=>{setfile(e.target.files[0])}}/>
              <p>ingredients</p>
              <input type="text" onChange={(e)=>{setingredients(e.target.value)}}/>
              <p>Recipe Directions</p>
              <input type="text" onChange={(e)=>{setdirection(e.target.value)}}/><br/>
              <button type="submit">Create new recipe</button>
          </div>
          </form>
        </div>
    )
}
export default Create;