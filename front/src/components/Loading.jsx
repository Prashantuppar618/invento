import Load from "../assets/juggling.gif"
import "./Loading.css";

const Loading = () => (
    <div className="loading-screen">
      <img src={Load} alt="Loading..." />
    </div>
);

export default Loading;