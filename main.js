import { display } from "./app.js";

function planButtonClick(buttonEl) {
  buttonEl.addEventListener("click", (e) => {
    display("My button has a message", "pink", "brown");
  });
}

export default function main() {
  const control_area_element = document.getElementById("ctrl-box");

  display("My Code is Running!", "blue", "white");

  const newBtn = document.createElement("button");
  newBtn.innerHTML = "My Button";
  planButtonClick(newBtn);

  control_area_element.appendChild(newBtn);
}
