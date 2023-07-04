import "./style.css";

window.onload = () => {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  //console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let who = ["My sister", "My cat", "My boyfriend", "The chef"];
  let action = ["eat", "cooked", "stole", "lost"];
  let what = ["my laptop", "my t-shirt", "my food", "the chair"];
  let when = [
    "the past night",
    "yesterday at the noon",
    "when I was working",
    "during my class",
    "while I was cooking"
  ];
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
