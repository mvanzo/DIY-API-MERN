import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import BlogDetails from "../BlogDetails"
import BlogEditForm from "../BlogEdit"

export default function Blog({ setBlogs }) {
    const [blog, setBlog] = useState({})
    const [comments, setComments] = useState([])
    const [showForm, setShowForm] = useState(false)
    
    const { id } = useParams()
    
    useEffect(()=> {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/blog/${id}`)
            .then(response=> {
                setBlog(response.data)
                setComments(response.data.comments)
            })
            .catch(err=> {
                console.log(err)
            })
    }, [showForm])

    const deleteBlog = () => {
        // e.preventDefault()
        console.log('delete', id)
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/blog/${id}`)
            .then(response=> {
                console.log('blog deleted')
                return axios.get(process.env.REACT_APP_SERVER_URL + '/blog')
            })
            .then(response=>setBlogs(response.data))
            .catch(err => {
                console.log('there was an error during the delete', err)
            })
    }

    return (
        <>
        {
        showForm ? 
            <BlogEditForm 
                showForm={showForm}
                setShowForm={setShowForm}
                blog={blog}
            /> : 
            <BlogDetails 
                blog={blog}
                comments={comments}
            />
            
        }
        <hr />
        < Link to="/blogs">Back to all blogs</Link><br />
        <button onClick={()=>setShowForm(!showForm)}>{showForm ? 'Go Back' : 'Edit'}</button>
        <Link to="/blogs"><button onClick={deleteBlog}>Delete</button></Link>
        </>
    )
}