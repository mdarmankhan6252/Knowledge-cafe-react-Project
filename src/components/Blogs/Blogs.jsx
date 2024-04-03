import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmarks,handleTime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('fake.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            {
                blogs.map((blog,i) => <Blog
                handleAddToBookmarks={handleAddToBookmarks}
                handleTime={handleTime}
                key={i} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;