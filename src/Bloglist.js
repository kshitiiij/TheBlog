import {Link} from 'react-router-dom';

const Bloglist = ({blogs}) => {
    return (
        <div className="bloglist">
            {blogs.map((blog) => (
                <div className='blog' key={blog.id}>
                    <Link to = {`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>directed by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Bloglist;