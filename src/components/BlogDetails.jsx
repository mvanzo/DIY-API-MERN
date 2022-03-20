
export default function BlogDetails({ blog, comments }) {
    const blogComments = comments.map((comment, idx)=> {
        return (
            <ul key = {`Comment index: ${idx}`}>
                <li>{comment.content}</li>
            </ul>
            )
    })
    return(
        <div>
            <h1>Blog Details</h1>
            <h2>Title:{ blog.title }</h2>
            <p>Body: { blog.body }</p>
            <h5>Written by: { blog.name }</h5>
            <h4>Comments</h4>
            { blogComments }
        </div>
        )
    }