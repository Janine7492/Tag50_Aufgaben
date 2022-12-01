import "./Bloglist.css";
import Data from "../data/Data";
import BlogItem from "../blogItem/BlogItem";

function Bloglist() {

    return (
        <div className="bloglistWrapper">
            {Data.map((singleBlogItem) => {
                return <BlogItem key={singleBlogItem.id} img={singleBlogItem.img_url} title={singleBlogItem.title} id={singleBlogItem.id} />
            })}
        </div>
    )
};

export default Bloglist;