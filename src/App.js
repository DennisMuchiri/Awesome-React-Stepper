import logo from "./logo.svg";
import "./App.css";
import MultiStepForm from "./lib/components/MultiStepForm";
import MultiContainer from "./lib/components/MultiContainer";
import prev from "./lib/assets/prev.png";
import next from "./lib/assets/next.png";

// previous={<img src={prev} width="60" height="60"/>} next={<img src={next} width="60" height="60"/>}
// previous={<button>Prev</button>} next={<button>Next</button>}

const App = () => {
  const finalSubmitCall = () => {
    console.log("Finally SUBMITTED");
  };

  return (
    <div
      className="App"
      style={{
        // width: '400px',
        display: "flex",
        justifyContent: "center",
      }}
    >
      <MultiContainer containerStyle={{ width: "700px" }}>
        <h1>hi</h1>
        <MultiStepForm
          progressBar
          progressStyle={{ margin: "20px" }}
          compStyle={{
            background: "tomato",
            padding: "20px",
            borderRadius: "4px",
            border: "1px solid black",
          }}
          barWidth="40vw"
          barColor="gray"
          barStroke={2}
          progressColor="orange"
          progressBorder="2px solid red"
          previous={<button>Prev</button>}
          next={<button>Next</button>}
          submit={<button>Submit</button>}
          onFinalSubmit={finalSubmitCall}
          actionPos="space-between"
        >
          <div>Hello</div>
          <div>World</div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          {/* <div>Fine</div>
        <div>Let's</div> */}
          <div>See</div>
        </MultiStepForm>
      </MultiContainer>
    </div>
  );
};

export default App;
