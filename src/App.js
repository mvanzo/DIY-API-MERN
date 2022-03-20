// import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/pages/Home'
import Blogs from './components/pages/Blogs';
import Blog from './components/pages/Blog'
import BlogForm from './components/BlogForm';
import axios from "axios"
import { useState, useEffect } from 'react'

function App() {
  // blogs state
  const [blogs, setBlogs] = useState([])

  // axios request for blogs
  useEffect(()=> {
    axios.get(process.env.REACT_APP_SERVER_URL + '/blog')
      .then(response=> {
        // console.log(response.data)
        setBlogs(response.data)
      })
      .catch(err=> {
        console.log(err)
      })
  }, [])

  return (
    <Router >
      <div className="App">
        <Routes >

          < Route 
            exact path = '/'
            element = {< Home blogs={blogs} setBlogs={setBlogs}/>}
          />

          < Route 
            exact path = '/blogs'
            element = {< Blogs blogs={blogs} setBlogs={setBlogs} />}
          />

          < Route 
            exact path = 'blogs/:id'
            element = {< Blog />}
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;