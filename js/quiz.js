var num1 = Math.floor(Math.random() * 200 + 300);
document.getElementById("n1").textContent = num1.toString();

var num2 = Math.floor(Math.random() * 200 + 200);
document.getElementById("n2").textContent = num2.toString();

var num3 = Math.floor(Math.random() * 50);
document.getElementById("n3").textContent = num3.toString();

const ans1 = document.querySelector("input[value='1']").nextSibling;
const ans2 = document.querySelector("input[value='2']").nextSibling;
const ans3 = document.querySelector("input[value='3']").nextSibling;
const ans4 = document.querySelector("input[value='4']").nextSibling;

switch (Math.floor(Math.random() * 4) + 1) {
    case 1:
        ans1.nodeValue = (num1 + " - " + num2 + "+" + num3);
        ans2.nodeValue = (num1 + " - " + num2 + "+" + num3);
        ans3.nodeValue = (num1 + " - " + num2 + "+" + num3);
        ans4.nodeValue = (num1 + " - " + num2 + "+" + num3);
        break;
    case 1:
        ans1.nodeValue = (num1 + " - " + num2 + "+" + num3);
        ans2.nodeValue = (num1 + " - " + num2 + "+" + num3);
        ans3.nodeValue = (num1 + " - " + num2 + "+" + num3);
        ans4.nodeValue = (num1 + " - " + num2 + "+" + num3);
        break;
    case 1:
        ans1.nodeValue = (num1 + " - " + num2 + "+" + num3);
        ans2.nodeValue = (num1 + " - " + num2 + "+" + num3);
        ans3.nodeValue = (num1 + " - " + num2 + "+" + num3);
        ans4.nodeValue = (num1 + " - " + num2 + "+" + num3);
        break;
    case 1:
        ans1.nodeValue = (num1 + " - " + num2 + "+" + num3);
        ans2.nodeValue = (num1 + " - " + num2 + "+" + num3);
        ans3.nodeValue = (num1 + " - " + num2 + "+" + num3);
        ans4.nodeValue = (num1 + " - " + num2 + "+" + num3);
        break;
}