import "../../Styles/Modal.css";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link to="/" className="btn-modal">
      <button>
        Main Menu <AiFillHome />{" "}
      </button>
    </Link>
  );
};

export default HomeButton;
