import {useParams} from 'react-router-dom';
import useFetch from './useFetch';


const BlogDetail = () => {

    //takes the parameter from the route and put the value in id;
    const {id} = useParams();
    const {blogs,pending,error} = useFetch(`https://kshitiiij.github.io/TheBlog-db/db.json`);
    const blog=blogs[id-1];


    return (
        <div className="blog-details">
                {error && <div>{error}</div>}
                {pending && <div>loading....</div>}
                {blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                        <div>{blog.body}</div>

                    </article>
                )
                }
        </div>
    )
} 

export default BlogDetail;