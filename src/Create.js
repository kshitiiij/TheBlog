import {useState} from "react";
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Create = () => {

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,body,author};
        axios.post("https://theblog-nfzt.onrender.com/blogs/post",blog)
        .then((res) => {
            console.log("new blog added!!");
            history.push("/");
        });
    }

    return (
        <div className="create">
            <h2>Add a new blog!!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text" 
                    required
                    onChange={(e) =>setTitle(e.target.value)}
                    value = {title}
                ></input>
                <label>Blog Body:</label>
                <textarea 
                    required
                    value = {body}
                    onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                {/* <select
                    value = {author}
                    onChange = {(e) => setAuthor(e.target.value)}>
                    <option value="Chris Nolan">Chris Nolan</option>
                    <option value="David Fincher">David Fincher</option>
                </select> */}
                <input 
                    type="text" 
                    required
                    onChange={(e) =>setAuthor(e.target.value)}
                    value = {author}
                ></input>
                <button>Add Blog</button>

            </form>
        </div>
    );
}

export default Create;