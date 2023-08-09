import Bloglist from './Bloglist';
import useFetch from './useFetch';


const Home = () => {

    const {blogs,pending,error} = useFetch('https://theblog.up.railway.app/blogs/getall');

    return (
        <div className="Home">
            
            {error && <div>{error}</div>}
            {/* it will show the message loading untill the data is not fetched */}
            {pending && <div>loading...</div>}
            {/* this will do a check and if the blogs value does not exist then the component will not be fetched */}
            {blogs && <Bloglist blogs = {blogs}/>}
        </div>
    )
}

export default Home;