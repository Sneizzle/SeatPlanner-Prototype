import ButtonComponent from "../components/buttonComponent";
import ButtonTest from "../components/buttonTest";
import "../Styles/Home.css";
import Search from "./searchPage";
import { useState } from "react";
function Home() {
  const inputElement = document.querySelector("input");

  const [message, setMessage] = useState("");

  const [updated, setUpdated] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // 👇 Get input value
      setUpdated(message);
    }
  };

  const FindPerson = (person) => {
    console.log("hey");
  };

  return (
    //Header
    <body>
      <div className="background-image">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          // width="100vw"
          // height="100vh"
          version="1.1"
        >
          <rect x="0" y="0" width="100vw" height="100vh" fill="#001220" />
          <path
            d="M0 431L21.5 421.2C43 411.3 86 391.7 128.8 394.2C171.7 396.7 214.3 421.3 257.2 421.7C300 422 343 398 385.8 397C428.7 396 471.3 418 514.2 416.8C557 415.7 600 391.3 642.8 389.7C685.7 388 728.3 409 771.2 410.2C814 411.3 857 392.7 878.5 383.3L900 374L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#fa7268"
          />
          <path
            d="M0 416L21.5 425C43 434 86 452 128.8 452C171.7 452 214.3 434 257.2 432.5C300 431 343 446 385.8 442.8C428.7 439.7 471.3 418.3 514.2 417.5C557 416.7 600 436.3 642.8 439.3C685.7 442.3 728.3 428.7 771.2 423.8C814 419 857 423 878.5 425L900 427L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#ef5f67"
          />
          <path
            d="M0 450L21.5 456.5C43 463 86 476 128.8 482C171.7 488 214.3 487 257.2 488.8C300 490.7 343 495.3 385.8 490.5C428.7 485.7 471.3 471.3 514.2 472.2C557 473 600 489 642.8 491C685.7 493 728.3 481 771.2 481.7C814 482.3 857 495.7 878.5 502.3L900 509L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#e34c67"
          />
          <path
            d="M0 486L21.5 487.3C43 488.7 86 491.3 128.8 494.5C171.7 497.7 214.3 501.3 257.2 508.3C300 515.3 343 525.7 385.8 524C428.7 522.3 471.3 508.7 514.2 499.7C557 490.7 600 486.3 642.8 493.3C685.7 500.3 728.3 518.7 771.2 525.8C814 533 857 529 878.5 527L900 525L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#d53867"
          />
          <path
            d="M0 548L21.5 546.5C43 545 86 542 128.8 541.5C171.7 541 214.3 543 257.2 548C300 553 343 561 385.8 563.7C428.7 566.3 471.3 563.7 514.2 561.5C557 559.3 600 557.7 642.8 555.2C685.7 552.7 728.3 549.3 771.2 548.8C814 548.3 857 550.7 878.5 551.8L900 553L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#c62368"
          />
        </svg>
        <header>
          <h1>
            {/* <Search /> */}
            Who are you looking for?
          </h1>
        </header>
        <section className="images-section"></section>
        <section className="bottom-section">
          <div className="input-container">
            {/* <input></input> */}
            <Search></Search>
            <button onClick={FindPerson} id="submit-icon">
              ➢
            </button>
          </div>
        </section>
      </div>
      <div>
        {" "}
        <ButtonComponent></ButtonComponent> <ButtonTest></ButtonTest>
      </div>
      {/* <div className="components-background">
          <div>
            <ButtonTest></ButtonTest>
            <ButtonComponent></ButtonComponent>
          </div>
        </div> */}
    </body>
  );
}

export default Home;
