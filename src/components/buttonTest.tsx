
import { Link } from "react-router-dom";

const ButtonTest = () => {
    return (
      <div>
         {/* Draw Testing */}
         <Link to="/drawtesting">
          <button>Draw testing Page</button>
        </Link>


         {/* Draw Testing 2*/}
         <Link to="/xarrowtesting">
          <button>xArrowTest Page</button>
        </Link>


  {/* Draw Testing 3*/}
  <Link to="/xarrowtesting2">
          <button>xArrowTesting 2 Page</button>
        </Link>


{/* Draw Testing 3*/}
<Link to="/gridGame">
          <button>Grid Game</button>
        </Link>



      </div>




















    );
  };
  

export default ButtonTest;