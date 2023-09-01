import { Link } from "react-router-dom";

const ButtonComponent = () => {
  return (
    <div>
      {/* admin login */}
      <Link to="/admin">
        <button>Admin Login</button>
      </Link>
    </div>
  );
};

export default ButtonComponent;
