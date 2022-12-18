

// iniialize the count to 0 (JS)
// listen for clicks on the increment button (HTML)
// when button is clicked increment the count variable (JS)
// change the Count thats reflected in the HTML (JS)

let count = 0;
let runningCount = 0;
let countElement = document.getElementById("counter-element");
let savedElement = document.getElementById("paragraph");

 function increment() {
    count = count + 1
    countElement.textContent = count;

}


function save(){
    runningCount = count + runningCount;
    let savedCountEntries = ` $ ${count}  `;
    savedElement.textContent =` Total Saved: $${runningCount}`;
    count = 0;
    countElement.textContent = count; 
  
}

