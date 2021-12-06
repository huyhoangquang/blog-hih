import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" 
                src="https://images.pexels.com/photos/2964916/pexels-photo-2964916.jpeg?cs=srgb&dl=pexels-aleksandar-pasaric-2964916.jpg&fm=jpg" 
                alt="" />
        </div>
    )
}
