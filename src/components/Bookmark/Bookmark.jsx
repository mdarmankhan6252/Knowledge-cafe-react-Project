const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="mx-2 my-4 bg-white p-2 rounded-lg border">
            <h3>{title}</h3>
        </div>
    );
};

export default Bookmark;