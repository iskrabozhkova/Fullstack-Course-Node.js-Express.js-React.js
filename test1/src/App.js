import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import { useState } from 'react';

import BasicCard from './components/Card';

function App() {
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [publisher, setPublisher] = useState('');
  const [year, setYear] = useState('');
  const [categories, setCategories] = useState('');
  const [searchedTerm, setSearchedTerm] = useState('');

  function changeSerachedTerm(event){
    setSearchedTerm(event.target.value);
    }
  const onSearch = (event) => {
  event.preventDefault();
   fetch('https://www.googleapis.com/books/v1/volumes?q=javascript+spa', {
      method: 'GET'
    }).then(data => data.json())
    // .then(data => {
    //   setTitle(data.)
    // })
  }
  return (
    <div className="App">
      <Form onSearch={onSearch} changeTerm={changeSerachedTerm}/>
      <BasicCard title={title} authors={authors} publisher={publisher} year={year} categories={categories}/>
    </div>
  );
}

export default App;
