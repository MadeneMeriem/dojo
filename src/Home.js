
import { useState,useEffect } from 'react';
import useFetch from './useFetch';
import BlogList from './BlogList';
const Home = () => {
   const {data:blogs,isLoading,error} = useFetch('http://localhost:8100/blogs');
    
 

    const handleDelete= () =>{
        // const newBlogs = blogs.filter(blog => blog.id !==id);
        // //setBlogs(newBlogs);
    }

    


    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            <BlogList blogs={blogs} title = {"All blogs"} handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home; 