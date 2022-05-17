import './App.css';
import Menu from './components/Menu'
import Registration from './components/Registration';
import { useEffect, useState } from 'react';
import Users from './components/Users'
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddRecipe from './components/Recipies/AddRecipe';
import RecipeCards from './components/Recipies/RecipeCards';
import Recipies from './components/Recipies/Recipies'
import Login from './components/Login';
import EditRecipe from './components/Recipies/EditRecipe'
import { useNavigate } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  const [recipies, setRecipies] = useState([]);


  const registerUser = user => {
    setUsers(oldUsers =>[...oldUsers, user])
  }
  const addRecipe = recipe => {
    setRecipies(old =>[...old, recipe])
  }
  const login = ({username,password}) => {
      if(users.some(u => u.username === username && u.password === password)){
        console.log('Success login');
      }else{
        console.log('Unsuccess login');
      }
  }

  //users
  useEffect(() => {
    if(localStorage.getItem("users")){
      setUsers(JSON.parse(localStorage.getItem("users")));
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])
  //recipies
  useEffect(() => {
    if(localStorage.getItem("recipies")){
      setRecipies(JSON.parse(localStorage.getItem("recipies")));
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('recipies', JSON.stringify(recipies))
  }, [recipies])
  
  const removeRecipe = (recipe) => {
    setRecipies(oldRecipes => oldRecipes.filter(r => r.id !== recipe.id))
  }
  const removeUser = (user) => {
    setUsers(oldUsers => oldUsers.filter(u => u.id !== user.id))
  }
  const editRecipe = (recipe) => {
    setRecipies(oldRecipes => oldRecipes.filter(r => r.id !== recipe.id))
    //r.id !== recipe.id))
   // delete recipe.lastUserId;
    //setRecipies(old => [...old,recipe]);
  }
  // const removeRecipe = (recipe) => {
    
  // }

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/registration' element={<Registration onRegister={registerUser}/>}/>
        <Route path='/login' element={<Login onLogin={login}/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/users' element={<Users users={users} onRemoveUser={removeUser}/>}/>
        <Route path='/recipies/new' element={<AddRecipe onAddRecipe={addRecipe}/>}/>
        <Route path='/recipies/new/:id' element={<EditRecipe onEditRecipe={editRecipe}/>}/>
        <Route path='/recipies' element={<Recipies recipies={recipies} onRemoveRecipe={removeRecipe}/>}/>
        <Route path='/recipies/newest' element={<RecipeCards recipies={recipies}/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
