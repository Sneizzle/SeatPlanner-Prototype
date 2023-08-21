import ButtonComponent from "../components/buttonComponent";
import ButtonTest from "../components/buttonTest";
import "../Styles/Home.css";

function Home() {
  return (
    //Header

    <div className="body">
      <div className="background-image">
        <div>
          <ButtonTest></ButtonTest>
          <ButtonComponent></ButtonComponent>
        </div>
      </div>
    </div>
  );
}

export default Home;
