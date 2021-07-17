//alert("Hello!");
let button1 = document.getElementById("button-fetch");
    console.log(button1);
    button1.addEventListener("click", handleClick);

//baseURL= "https://cat-fact.herokuapp.com"

//const mainSection = document.querySelector('section')

// function getCats() {
//   let apiURL = `https://catfact.ninja/fact`;
// fetch(apiURL)
//   .then((response) => response.json())
// //.then(json => displayCats(json));
//   .then((result) => { displayCats(result), console.log("hey there from getCats() function", result)})  //can put any object in here not just .value
//     //.catch(error => console.log(error))
//    //console.log("hey there from getCats() function", result);

//   //console.log(text)
// }
function getCats() {
  let apiURL = `https://catfact.ninja/fact`;
fetch(apiURL)
  .then((response) => response.json())
//.then(json => displayCats(json));
  .then((result) => displayCats(result.fact))  //can put any object in here not just .value
    //.catch(error => console.log(error))
   console.log("hey there from getCats() function");

  //console.log(text)
}
//getCats();

function displayCats(fact) {
  console.log(fact);
  let displayFetch = document.getElementById("display-fetch")
  displayFetch.innerText = "";  //clears data for replace
 let para= document.createElement("p");
 para.innerText = fact;
 displayFetch.appendChild(para);
}  
  function handleClick() {
      getCats();
  }
