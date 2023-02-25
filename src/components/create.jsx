import { useContext } from "react";
import { recipeContext } from "./contextApi/context";
const Create = ()=>{
    const {recipe, setrecipe} = useContext(recipeContext);
    
    return(
        <div className="create-conatiner">
          <h1>Create Your Recipe</h1>
          <div className="recipe-creator">
              <p>recipe title</p>
              <input type="text" onChange={(e)=>setrecipe({...recipe,title:e.target.value})}/>
              <p>Author</p>
              <input type="text" onChange={(e)=>setrecipe({...recipe,author:e.target.value})}/>
              <p>Please upload your recipe image</p>
              <input type="file" onChange={(e)=>setrecipe({...recipe,flie:e.target.value})}/>
              <p>ingredients</p>
              <input type="text" onChange={(e)=>setrecipe({...recipe,ingredients:e.target.value})}/>
              <p>Recipe Directions</p>
              <input type="text" onChange={(e)=>setrecipe({...recipe,direction:e.target.value})}/>
          </div>
        </div>
    )
}
export default Create;