import logo from "./logo.svg";
import "./App.css";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
const SCREEN_HEIGHT = window.innerHeight - 30;

function App() {
  const logoPos = useSpring({ x: 0, y: 0 });
  const bindLogoPos = useDrag((params) => {
    logoPos.x.set(params.offset[0]);
    logoPos.y.set(params.offset[1]);
  });
  const pPos = useSpring({ x: 0, y: 0 });
  const bindpPos = useDrag((params) => {
    pPos.x.set(params.offset[0]);
    pPos.y.set(params.offset[1]);
  });
  const aPos = useSpring({ x: 0, y: 0 });
  const bindaPos = useDrag((params) => {
    aPos.x.set(params.offset[0]);
    aPos.y.set(params.offset[1]);
  });
  const handlePos = useSpring({ y: 0 });
  const bindHandlePos = useDrag((params) => {
    const y = params.xy[1];
    if (params.dragging) {
      if (y >= 0 && y <= SCREEN_HEIGHT) {
        handlePos.y.set(params.offset[1]);
      }
    } else {
      if (y > SCREEN_HEIGHT / 2) {
        handlePos.y.start(SCREEN_HEIGHT);
      } else {
        handlePos.y.start(0);
      }
    }
  });

  return (
    <div className="App">
      <animated.div
        {...bindHandlePos()}
        style={{
          y: handlePos.y,
        }}
        className="App-handle-container"
      >
        <div className="App-handle"></div>
      </animated.div>
      <animated.div
        style={{
          y: handlePos.y,
          opacity: handlePos.y.to([0, SCREEN_HEIGHT], [1, 0.8]),
        }}
        className="App-overlay"
      ></animated.div>

      <div className="App-bg" />
      <header className="App-header">
        <animated.div
          {...bindLogoPos()}
          style={{
            x: logoPos.x,
            y: logoPos.y,
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
        </animated.div>
        <animated.div
          {...bindpPos()}
          style={{
            x: pPos.x,
            y: pPos.y,
          }}
        >
          <p>
            Every element on this page is draggable....How Coooool!!!
          </p>
        </animated.div>
        <animated.div
          {...bindaPos()}
          style={{
            x: aPos.x,
            y: aPos.y,
          }}
        >
          <a
            draggable="false"
            className="App-link"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React -- drag 
          </a>
        </animated.div>
      </header>
    </div>
    // </div>
    // </div>
  );
}

export default App;
