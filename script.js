"use strict";

const btn = document.getElementById("btn-submit");

btn.addEventListener("click", function () {
  const idVal = document.querySelector(".id-input");
  const fname = document.querySelector(".fname-input");
  const lname = document.querySelector(".lname-input");
  const redText = document.querySelectorAll(".warning");
  const output = document.getElementById("display");
  const inputArr = [idVal.value, fname.value, lname.value];
  const errorString = ["ID", "First Name", "Last Name"];
  const outputArr = [];
  let outputWarning = "";

  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === "") {
      if (outputWarning !== "") {
        outputWarning += ", ";
      }
      outputWarning += errorString[i];
      redText[i].innerText = `Please Enter a ${errorString[i]}`;
    } else {
      outputArr.push(inputArr[i]);
      redText[i].innerText = "";
    }
  }
  if (outputWarning !== "") {
    alert(`You forgot to fill in the following field(s) ${outputWarning}`);
  } else {
    output.innerText = `\n UserID: ${outputArr[0]} \n First Name: ${outputArr[1]} \n Last Name: ${outputArr[2]} `;
  }
});
