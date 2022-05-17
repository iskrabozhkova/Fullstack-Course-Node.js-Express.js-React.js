import React, {useState} from 'react'
import Menu from '../Menu'
import RecipeCard from './RecipeCard'
import { TextField } from '@mui/material'

export default function RecipeCards({recipies}) {
  const [searchedTerm, setSearchedTerm] = useState('');

  return (
    <div>
    <Menu/>
    <TextField id="outlined-basic" label="Search for recipe" variant="outlined" sx={{m: 5}} />
    {recipies.slice(-10).map(recipe => {
       return <RecipeCard key={recipe.id} recipe={recipe}/>
    })}
    </div>
  )
}
