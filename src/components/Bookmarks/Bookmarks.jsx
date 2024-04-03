import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,markAsRead}) => {
    return (
        <div className="w-1/3 bg-[#f2f2ff] py-4 px-2 rounded-lg border">
            <div>
                <h1 className="border-2 border-purple-600 px-1 py-2 rounded-lg bg-purple-200 text-purple-800 mb-4">Reading Time: {markAsRead}</h1>
            </div>
            <h1 className="text-2xl">BookMarks:{bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,i) => <Bookmark key={i} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;