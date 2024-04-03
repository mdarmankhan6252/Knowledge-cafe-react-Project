import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [markAsRead, setMarkAsRead] = useState(0)

  const handleAddToBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handleTime = (time) =>{
    const a = (markAsRead + time);
    setMarkAsRead(a)

  }

  return (
    <div className="container mx-auto max-w-7xl px-1">
    <Header></Header>
    <div className="md:flex gap-x-4">
      <Blogs handleAddToBookmarks={handleAddToBookmarks}
      handleTime={handleTime}
      ></Blogs>
      <Bookmarks 
      markAsRead={markAsRead}
       bookmarks={bookmarks}></Bookmarks>
    </div>
    </div>
  )
}

export default App
