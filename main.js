
document.addEventListener("DOMContentLoaded", function () {
    // Remove the loader when the page is fully loaded
    window.addEventListener("load", function () {
      const loaderWrapper = document.getElementById("loader")
      loaderWrapper.style.display = "none"
    });
});




function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function selectOption(value) {
    // Handle selected option
    console.log("Selected value: " + value);

    // Set the selected option text to the button label
    var button = document.querySelector('.selector1 .select-btn');
    console.log("Button:", button);

    var selectedOption = document.querySelector('.selector1 a[data-value="' + value + '"]');
    console.log("Selected option:", selectedOption);

    if (selectedOption) {
        var optionText = selectedOption.textContent.trim(); // Get the text content of the option
        button.textContent = optionText;
    } else {
        console.error("Option with value " + value + " not found.");
    }

    // Close the dropdown after selecting an option
    document.getElementById("dropdown").style.display = "none";
}

const option = document.getElementById("options")
const content1 = document.getElementById("item1content")
const content2 = document.getElementById("item2content")

option.onchange = (e) => {
    console.log(option)

    if (option.value == "horses") {
        console.log("horses")
        content1.style.display = "flex"
        content2.style.display = "none "
    } else if (option.value == "material") {
        content1.style.display = "none "
        content2.style.display = "flex "
    } else {
        content1.style.display = "none "
        content2.style.display = "none "
    }
}



var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
Array.from(btn).forEach((button)=>{
    button.onclick = function () {
    
        modal.style.display = "block";
    }
    
})

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const cardsInModal = document.getElementsByClassName("cardModal")

Array.from(cardsInModal).forEach((card)=>{
    card.onclick = (e)=>{
        console.log('card selected : ' , e )

        Array.from(cardsInModal).forEach(card => {
            card.classList.remove("selected");
        });
        if(card.className === "cardModal selected"){
            card.classList.remove("selected")
        }else{
            card.classList.add("selected")
        }
    }
})




const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));