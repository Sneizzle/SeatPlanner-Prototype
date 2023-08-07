
import { Link } from "react-router-dom";

const ButtonComponent = () => {
    return (
      <div>
        <h1>Hvad leder du efter?</h1>
        {/* find person */}
        <Link to="/search">
          <button>Find Person</button>
        </Link>
        {/* find lokale */}
        <Link to="/findRoom">
          <button>Find Lokale</button>
        </Link>
        {/* admin login */}
        <Link to="/admin">
          <button>Admin Login</button>
        </Link>
        
      </div>








    );
  };
  

export default ButtonComponent;