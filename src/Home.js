
import { useState,useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome to the bread bank' , body: 'Here we sell bread, we sell loaf', author: 'luigi', id: 2 },
        { title: 'Web dev tips', body: 'lorem ipsum...', author: 'yoshi', id: 3 },
        { title: 'React vs Vue', body: 'lorem ipsum...', author: 'mario', id: 4 },
        { title: 'CSS Tricks', body: 'lorem ipsum...', author: 'luigi', id: 5 },
        { title: 'JavaScript Basics', body: 'lorem ipsum...', author: 'yoshi', id: 6 },
        { title: 'Understanding Hooks', body: 'lorem ipsum...', author: 'mario', id: 7 },
    ])

    const handleDelete= (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !==id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('useEffect ran'); 
    })


    return ( 
        <div className="home">
            <BlogList blogs={blogs} title = {"All blogs"} handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title={"Mario's blogs"} handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;