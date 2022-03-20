import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import BlogForm from '../BlogForm'

export default function Blogs({ blogs, setBlogs }) {
    const [formData, setFormData] = useState({})

    // console.log(blogs)
    // map through blogs for list of links
    const blogsLinks = blogs.map((blog, idx)=> {
        return (
        <div key = {`Blog key: ${idx}`}>
            <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
        </div>
        )
    })

    const handleSubmit = e => {
        e.preventDefault()
        // console.log('testing handle submit function')
        console.log(formData)
        axios.post(`${process.env.REACT_APP_SERVER_URL}/blog`, formData)
            .then(response=>{
                setFormData({})
                return axios.get(process.env.REACT_APP_SERVER_URL + '/blog')
                })
            .then(response=>setBlogs(response.data))
            .catch(err=> {
                console.log(err)
            })
    }

    return (
        <>
        {blogsLinks}
        <hr />
        New Blog:
        < BlogForm 
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
        />
        </>
    )
}