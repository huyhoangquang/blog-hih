import "./write.css";

export default function write() {
    return (
        <div className="write">
            <img
                className="writeImg"
                src="https://images.pexels.com/photos/1191403/pexels-photo-1191403.jpeg?cs=srgb&dl=pexels-lisa-1191403.jpg&fm=jpg"
                alt=""
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input
                        type="text"
                        placeholder="Title"
                        className="writeInput"
                        autoFocus={true}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="Tell your story..."
                        type="text"
                        className="writeInput writeText"
                    ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    );
}
