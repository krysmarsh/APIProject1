//alert("Hello!");
let button1 = document.getElementById("button-fetch");
    console.log(button1);
    button1.addEventListener("click", handleClick);

//baseURL= "https://cat-fact.herokuapp.com"

//const mainSection = document.querySelector('section')

function getCats() {
  let apiURL = `https://cat-fact.herokuapp.com/facts/random`;
fetch(apiURL)
  .then((response) => response.json())
//.then(json => displayCats(json));
  .then((result) => displayCats(result.text))  //can put any object in here not just .value
    //.catch(error => console.log(error))
   console.log("hey there from getCats() function");

  //console.log(text)
}

getCats();

function displayCats(facts) {
  console.log(facts);
  let displayFetch = document.getElementById("display-fetch")
  displayFetch.innerText = "";  //clears data for replace
 let para= document.createElement("p");
 para.innerText = facts;
 displayFetch.appendChild(para);
}  
  function handleClick() {
      getCats();
  }