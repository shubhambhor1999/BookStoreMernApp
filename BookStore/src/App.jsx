import React from 'react'
import { Route,Routes } from 'react-router-dom'
import ShowBook from './Views/ShowBook.jsx'
import CreateBook from './Views/CreateBook.jsx'
import DeleteBook from './Views/DeleteBook.jsx'
import EditBook from './Views/EditBook.jsx'
import Home from './Views/Home.jsx'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/books/create' element={<CreateBook/>}></Route>
      <Route path='/books/details/:id' element={<ShowBook/>}></Route>
      <Route path='/books/edit/:id' element={<EditBook/>}></Route>
      <Route path='/books/delete/:id' element={<DeleteBook/>}></Route>
    </Routes>
  )
}

export default App
