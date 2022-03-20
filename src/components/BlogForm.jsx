export default function BlogForm({ handleSubmit, formData, setFormData }){
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input 
                id="title"
                type="text"
                value={formData.title}
                onChange={e=>setFormData({ ...formData, title: e.target.value })}
            />

            <label htmlFor="body">Body:</label>
            <input 
                id="body"
                type="text"
                value={formData.body}
                onChange={e=>setFormData({ ...formData, body: e.target.value })}
            />

            <label htmlFor="Name">Name:</label>
            <input 
                id="name"
                type="text"
                value={formData.name}
                onChange={e=>setFormData({ ...formData, name: e.target.value })}
            />

            <input type="submit" />

        </form>
        </>
    )
}