import {useParams,useHistory} from 'react-router-dom';
import useFetch from './useFetch';


const BlogDetail = () => {

    //takes the parameter from the route and put the value in id;
    const {id} = useParams();
    const {blogs:blog,pending,error} = useFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/'+blog.id, {
            method: 'DELETE',
        }).then(()=> {
            console.log("blog deleted");
            history.push('/');
        });
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