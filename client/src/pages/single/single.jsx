import "./single.css";
import SinglePost from "../../components/singlePost/SinglePost";

export default function Single() {
  return (
    <div className="single">
      <SinglePost/>
      <Sidebar />
    </div>
  );
}