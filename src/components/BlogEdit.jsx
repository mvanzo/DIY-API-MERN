import axios from "axios"
import { useState } from "react"
import BlogForm from "./BlogForm"

export default function BlogEditForm({ blog, showForm, setShowForm }) {

    const [formData, setFormData] =useState(blog)

    const handleSubmit = e => {
        e.preventDefault()
        axios.put(`${process.env.REACT_APP_SERVER_URL}/blog/${blog._id}`, formData)
            .then(response=>{
                // console.log('🌈🌈🌈🌈🌈🌈🌈🌈',response.data)
                setShowForm(!showForm)
            })
            .catch(console.log)
    }

    return(
        <>
        <h1>Blog Edit Form</h1>
        < BlogForm 
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
        />
        </>
    )
}