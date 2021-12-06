import "./post.css";

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://images.pexels.com/photos/2964115/pexels-photo-2964115.jpeg?cs=srgb&dl=pexels-aleksandar-pasaric-2964115.jpg&fm=jpg"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem, ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                repellat praesentium dolores officia tempore officiis, quaerat
                voluptate accusamus ex facere! Voluptatibus ipsum in quod
                molestias deleniti aspernatur possimus mollitia adipisci. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Laborum
                repellat praesentium dolores officia tempore officiis, quaerat
                voluptate accusamus ex facere! Voluptatibus ipsum in quod
                molestias deleniti aspernatur possimus mollitia adipisci. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Laborum
                repellat praesentium dolores officia tempore officiis, quaerat
                voluptate accusamus ex facere! Voluptatibus ipsum in quod
                molestias deleniti aspernatur possimus mollitia adipisci.
            </p>
        </div>
    );
}
