// BASE URL for Ramen JSON Local Server (Note:  There are 5 Objects, ID's 1-5)

const RAMEN_URL = "http://localhost:3000/ramens";

// Global Variable

const imageDivContainer = document.getElementById('ramen-menu');
const ramenForm = document.getElementById('new-ramen');
console.log(ramenForm);

// Fetching Ramen API

const fetchRamens = () => {
    fetch(RAMEN_URL)
    .then(response => response.json())
    .then((ramenArr) => {
        console.log(ramenArr);
        renderRamenInMenu(ramenArr);
    })
    .catch(error => console.log(error))
}

const renderRamenInMenu = (ramenArr) => {
    ramenArr.forEach(ramenObj => {
        const ramen = document.createElement('img');
        // Setting Attributes for Newly Created "RamenImg" Element
        ramen.src = ramenObj.image;
        ramen.name = ramenObj.name;
        ramen.restaurant = ramenObj.restaurant;
        imageDivContainer.appendChild(ramen);
        ramen.id = ramenObj.id;
        ramen.rating = ramenObj.rating;
        ramen.comment = ramenObj.comment;
        displayRamen(ramen);
        submitNewRamen();
    })
}

const displayRamen = (ramen) => {
    ramen.addEventListener('click', (event) => {
        const ramenDetailsImage = document.querySelector('#ramen-detail img');
        const ramenDetailsName = document.querySelector('#ramen-detail h2.name');
        const ramenDetailsRestaurant = document.querySelector('#ramen-detail h3.restaurant');
        ramenDetailsImage.src = event.target.src;
        ramenDetailsName.textContent = event.target.name;
        ramenDetailsRestaurant.textContent = event.target.restaurant;
})
}

const submitNewRamen = () => {
    ramenForm.addEventListener('submit', (event) => {
        const newRamen = document.createElement('img');
        newRamen.name = ramenForm.querySelector('#new-name').value,
        newRamen.restaurant = ramenForm.querySelector('#new-restaurant').value,
        newRamen.src = ramenForm.querySelector('#new-image').value,
        newRamen.rating = ramenForm.querySelector('#new-rating').value,
        newRamen.comment = ramenForm.querySelector('#new-comment').value
        
        console.log(newRamen);
        imageDivContainer.appendChild(newRamen);
        ramenForm.reset();
        event.preventDefault();
        displayRamen(newRamen);
    })
}

/* on form submission (event listener) => {
        FIRST:
            grab name.value;
            grab restauraunt.value;
            grab image.src;
            grab rating.value;
            grab comment.value;
        SECOND:
            Create newRamenImage to Put in imageDivContainer;
            imageDivContainer.appendChild(newRamenImage);
        THIRD:
            Reset the Form and Prevent Default;
    }
    */

// DOMContentLoaded Event Listener

document.addEventListener('DOMContentLoaded', function() {
    fetchRamens();
})

