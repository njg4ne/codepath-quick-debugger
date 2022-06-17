import twoMain from "./main.js";
// display("Top of script", "chartreuse", "black");

function planClickToRemove(el) {
  el.addEventListener("click", (evt) => {
    const self = evt.target;
    const parent = self.parentNode;
    parent.removeChild(self);
  });
}

function display(newMsg, fill = "purple", text = "white") {
  const newMsgEl = document.createElement("h2");
  const styles = [
    `background-color: ${fill}; `,
    "border: 3px solid black; ",
    "padding: 0.5em;",
    `color: ${text};`,
    "font-family: sans-serif;",
  ].join("");
  newMsgEl.style = styles;
  newMsgEl.innerHTML = newMsg;
  planClickToRemove(newMsgEl);

  const boxElem = document.querySelector("#message-box");
  boxElem.appendChild(newMsgEl);
}

function planButtonActions() {
  function handle(evt, msg) {
    display(msg, "green", "black");
  }
  const btnAEl = document.getElementById("btn-a");
  const btnBEl = document.getElementById("btn-b");
  const btnCEl = document.getElementById("btn-c");
  [
    [btnAEl, "A"],
    [btnBEl, "B"],
    [btnCEl, "C"],
  ].forEach(([btnEl, msg], i) => {
    btnEl.addEventListener("click", (evt) => handle(evt, msg));
  });
}

function main() {
  // display("Top of onload", "aqua", "black");
  planButtonActions();
  // display("Bottom of onload", "aquamarine", "black");
  twoMain();
}

window.onload = main;
// display("Bottom of script", "red");

export { display };
