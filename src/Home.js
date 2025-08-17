
import { useState,useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setisLoadging] = useState(true);
    const [error, setError] = useState(null);
 

    const handleDelete= (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !==id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8100/blogs')
        .then (response =>{
            if(!response.ok){
                throw Error('Could not fetch the data for that resource because of server side error');
            }
            return response.json();
        })
        .then (
            data => {
                setBlogs(data);
                setisLoadging(false);
                setError(null);
            }
        )
        .catch(error => {
            setError(error.message);
            setisLoadging(false);
        })
    },[])


    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            <BlogList blogs={blogs} title = {"All blogs"} handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title={"Mario's blogs"} handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;