import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const hour = date.getHours();

let greetings = "";

const customStyle = {
  color: ""
};

if (hour >= 0 && hour < 12) {
  customStyle.color = "blue";
  greetings = "Good Morning";
} else {
  if (hour >= 12 && hour < 18) {
    customStyle.color = "green";
    greetings = "Good Afternoon";
  } else {
    customStyle.color = "red";
    greetings = "Good Night";
  }
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greetings}
    </h1>
  </div>,
  document.getElementById("root")
);
