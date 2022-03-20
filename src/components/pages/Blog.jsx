import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import BlogDetails from "../BlogDetails"
import BlogEditForm from "../BlogEdit"

export default function Blog() {
    const [blog, setBlog] = useState({})
    const [comments, setComments] = useState([])
    const { id } = useParams()
    const [showForm, setShowForm] = useState(false)

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
        <button onClick={()=>setShowForm(!showForm)}>{showForm ? 'Go Back' : 'Edit'}</button>

        < Link to="/blogs">Back to all blogs</Link>
        </>
    )
}