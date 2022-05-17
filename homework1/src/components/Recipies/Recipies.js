import React from 'react'
// import User from '../components/User'
import Menu from '../Menu'
import Recipe from './Recipe'

export default function Recipies({recipies, ...props}) {
  return (
    <div>
    <Menu/>
    {recipies.map(recipe => {
      return <Recipe key={recipe.id} recipe={recipe} {...props}/>
    })}
    </div>
  )
}
