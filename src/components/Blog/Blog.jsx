import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleAddToBookmarks, handleTime }) => {
    const {id, title, banner_img, author, author_img, published_date, reading_time, tags} = blog;
    // console.log(blog)
    return (
        <div>
            <img src={banner_img} alt="" className="rounded-xl w-full"/>
            <div className="flex items-center justify-between py-4">
                <div className="flex items-center">
                    <img src={author_img} alt="" className="w-16 rounded-full h-16" />
                    <div className="ml-5">
                        <h4 className="text-xl font-semibold">{author}</h4>
                        <p className="text-gray-600">{published_date}</p>
                    </div>
                </div>

                <div className="flex items-center">
                    <p>{reading_time} min read</p>
                    <button 
                    onClick={()=> handleAddToBookmarks(blog)}
                    className="text-2xl text-blue-600"><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h1 className="text text-3xl">{title}</h1>
            <div>
                {tags.map((hash,i) => <span key={i} className="mr-2 text-gray-700">#{hash}</span>)}
            </div>
            <h5 onClick={()=>handleTime(reading_time)} className="font-semibold underline text-blue-500 mb-5">Mark as read</h5>

        </div>
    );
};


export default Blog