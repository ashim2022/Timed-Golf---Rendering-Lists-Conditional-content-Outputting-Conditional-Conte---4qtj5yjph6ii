import React from "react";
import "../styles/App.css";
var timeInterval = 0;
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0, renderBall: false };
    this.renderChoice = this.renderChoice.bind(this);
    this.displayBall = this.displayBall.bind(this);
    this.handleListener = this.handleListener.bind(this);
    this.interval = this.interval.bind(this);
  }

  // componentDidMount() {

  // }

  // componentWillUnmount() {

  // }

  handleListener(event) {
    console.log("handleListener");
    switch (event.keyCode) {
      case 39:
        this.setState({ x: this.state.x + 5 });
        break;

      case 40:
        this.setState({ y: this.state.y + 5 });
        break;

      case 38:
        this.setState({ y: this.state.y - 5 });
        break;

      case 37:
        this.setState({ x: this.state.x - 5 });
        break;
      default:
        break;
    }
    // this.interval();
    if (this.state.x === 250 && this.state.y === 250) {
      document.removeEventListener("keydown", this.handleListener);
      this.interval();
    }
  }
  // clearTimer() {
  //   if (this.state.x === 250 && this.state.y === 250) {
  //     clear
  //     document.removeEventListener("keydown", this.handleListener);
  //     // this.interval();

  //   }
  // }

  interval() {
    console.log("interval");
    if (this.state.x === 250 && this.state.y === 250) {
      // this.clearTimer();
      clearInterval(timeInterval);
      return;
    }
    if (this.state.time === 0) {
      console.log("interval if");
      timeInterval = setInterval(() => {
        if (this.state.x === 250 && this.state.y === 250) {
          clearInterval(timeInterval);
          // this.setState({ time: 0 });
          return;
        }
        this.setState({
          time: this.state.time + 1,
          x: this.state.x + 1,
          y: this.state.y + 1,
        });
      }, 1000);
    }
    if (this.state.x === 250 && this.state.y === 250) {
      clearInterval(timeInterval);
      // this.clearTimer();
    }
    // return timeInterval;
  }

  // clearTimer() {
  //   let timer = this.interval();
  //   clearInterval(timer);
  // }

  buttonClickHandler() {
    // setRenderBall(true);
    this.state.renderBall({ renderBall: true });
  }

  displayBall() {
    this.interval();
    document.addEventListener("keydown", this.handleListener);
  }

  renderChoice() {
    return (
      <>
        <div
          className="ball"
          style={{
            left: this.state.x,
            top: this.state.y,
            position: "absolute",
          }}
        ></div>
        <button className="start" onClick={this.displayBall}>
          start
        </button>
        <div className="heading-timer">{this.state.time}</div>
        <div className="hole"></div>
      </>
    );
  }

  render() {
    return <>{this.renderChoice()}</>;
  }
}

export default Timer;
