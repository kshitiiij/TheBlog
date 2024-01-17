import {useParams,useHistory} from 'react-router-dom';
import useFetch from './useFetch';
import axios from "axios";


const BlogDetail = () => {

    const {id} = useParams();
    const {blogs:blog,pending,error} = useFetch('https://theblog-nfzt.onrender.com/blogs/getone/'+id);
    const history = useHistory();

    const handleDelete = () => {
        axios.delete(`https://theblog-nfzt.onrender.com/blogs/delete/${id}`)
        .then( res => {
            console.log("blog deleted!!");
            history.push("/");
        })
    }

    return (
        <div className="blog-details">
                {error && <div>{error}</div>}
                {pending && <div>loading....</div>}
                {blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                        <div>{blog.body}</div>
                        <button onClick={handleDelete}>Delete</button>

                    </article>
                )
                }
        </div>
    )
} 

export default BlogDetail;