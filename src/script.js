// Definera array av namn
let people = [
    "Owen", 
    "Mason", 
    "Liam", 
    "Ella", 
    "Adam", 
    "Noah",
    "Ava", 
    "Ethan", 
    "Grace", 
    "Lucas", 
    "Zoe", 
    "Jack",
    "Lily", 
    "Henry", 
    "Emma", 
    "Isaac", 
    "Mia", 
    "Caleb",
    "Ruby", 
    "Leo"
];


export function initSearch(people) { // rör ej denna rad

  // Hämta HTML-element
  const searchBar = document.getElementById("searchInput")
  const searchButton = document.getElementById("searchBtn")
  const resultHolder = document.getElementById("resultDisplay")
  
  // Lägg till en klickhändelse på "Sök"-knappen
  searchBtn.addEventListener("click",() => {
  
    let inputText = document.getElementById("searchInput").value;

    let found = false;

    for (let person of people) {
      
      if (inputText === person) {
        found = true;
      }
    } 

    if (found) {

       resultHolder.innerHTML = "Namn hittades!";
      } else { 
        resultHolder.innerHTML = "Namn hittades inte.";
        found = false;
      }
    

    });
}



// rör ej dessa rader
document.addEventListener("DOMContentLoaded", () => {
  initSearch(people);
});