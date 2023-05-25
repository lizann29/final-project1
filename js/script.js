
"use strict"
//header
//1.
const pressHome = document.getElementById('click-home');

pressHome.addEventListener('click', () => {
  const sectionOne = document.getElementById('section1');

  sectionOne.scrollIntoView({ behavior: 'smooth' });
});

//3.
const pressMenu = document.getElementById('click-menu');

pressMenu.addEventListener('click', () =>{
    const SectionTwo = document.getElementById('section2');

    SectionTwo.scrollIntoView({behavior: 'smooth'});
})

//5. 
const contactUs = document.getElementById('click-contact');

  contactUs.addEventListener('click', () => {
    const sectionThree = document.getElementById('section3');

    sectionThree.scrollIntoView({behavior: 'smooth'});
  })

//burger

let burgerBar = document.querySelector('.burger-bar');
let ulItems = document.querySelector('.nav-ul-items');

burgerBar.addEventListener('click', () =>{
    burgerBar.classList.toggle('active');
    ulItems.classList.toggle('active');
})

document.querySelectorAll('nav-a').forEach(item => item.addEventListener('click', function(){
    burgerBar.classList.remove('active');
 }))

// section 1
const reserveButton = document.getElementById('btn-reserve');

reserveButton.addEventListener('click', () => {
  const formWrapper = document.querySelector('.form-wrapper');

  formWrapper.scrollIntoView({ behavior: 'smooth' });
});


// section 2
const orderButton = document.getElementById('btn-order');

orderButton.addEventListener('click', () => {
    const formWrapper = document.querySelector('.form-wrapper');
  
    formWrapper.scrollIntoView({ behavior: 'smooth' });
  });


// splide.mount();

new Splide(".splide").mount();

var elms = document.getElementsByClassName( 'splide' );


for ( var i = 0; i < elms.length; i++ ) {
  new Splide( elms[ i ] ).mount();
}

var splide = new Splide( '.splide', {
   perPage: 3,
   perMove: 1,
   // focus  : 0,
   // omitEnd: true,
   // rewind: true,
   gap: '2rem',
   breakpoints:{
       1200:{
           perPage: 2,
           gap: '7rem',
           height: 'auto',
       },
       992:{
           perPage: 1,
           gap: '7rem',
           height: '16rem',
       },
   }
 } );
 
 splide.mount(); 


 
// forms

let formElement = document.getElementById('registration-form');

formElement.addEventListener('submit', function(event){
  event.preventDefault();
  let errors = {};

    let username = document.getElementById('username-field').value;

     if (username == " " || username.length < 5){
        errors.username = "Username can not be empty and must be more than 5 characters"
    }

    //password
  let password = document.getElementById('password-field').value;

    if(password == ""){
    errors.password = 'password can not be empty';
}
    
//phone

let phoneNum = document.getElementById('phone').value;

   if(phoneNum == "" || !/^\d+$/.test(phone) ){
    errors.phone = 'Phone number can not be empty and should contain only numbers'
}

console.log(errors);

    document.querySelectorAll(".error-text").forEach((element) => {
    element.textContent = " ";
   });

for (let item in errors){
    console.log(item);

    let errorText = document.getElementById('error-'+ item);

    if(errorText){
        errorText.innerText = errors[item];
    }
}
if (Object.keys(errors).length == 0) {
        formELement.submit();
   }
});

//show and hide password
const passwordField = document.getElementById('password-field');
const eyeIcon = document.querySelector('.input-icon i.fa-eye');

eyeIcon.addEventListener('click', togglePasswordVisibility);

function togglePasswordVisibility() {
  const fieldType = passwordField.getAttribute('type');
  if (fieldType === 'password') {
    passwordField.setAttribute('type', 'text');
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  } else {
    passwordField.setAttribute('type', 'password');
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  }
}


//  //email
let emailField = document.getElementById("email-field");

emailField.addEventListener("keydown", function () {
  let emailFieldValue = emailField.value; 
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let textEmail = document.getElementById("error-email");

  emailField.addEventListener("click", function () {
    emailField.blur();
  });
  
  if (emailFieldValue.match(regex)) {
    textEmail.innerText = "Your email is valid";
    textEmail.style.color = "green";
    emailField.style.outline = "none";
    emailField.style.border = "2px solid green";
  } else {
    textEmail.innerText = "Your email is invalid";
    textEmail.style.color = "red";
    emailField.style.outline = "none";
    emailField.style.border = "2px solid red";
  }

  if (emailFieldValue == "") {
    textEmail.innerText = " ";
    emailField.style.border = '2px solid beige';
  }
});

// Fetch

fetch('https://reqres.in/api/users?page=1', {
  method: 'GET'
})
  .then(function (response) {
    console.log(response.status);
    if (response.status !== 200) {
      throw response.status;
    }
    return response.json();
  })
  .then(responseDataJs => {
    const users = responseDataJs.data.slice(0, 3); // First three users

    const blockOne = document.getElementById('block-one');
    const blockTwo = document.getElementById('block-two');
    const blockThree = document.getElementById('block-three');

    // Create and append user elements to the blocks
    users.forEach((user, index) => {
      const userElement = createUserElement(user, index);
      if (index === 0 && blockOne) {
        blockOne.appendChild(userElement);
      } else if (index === 1 && blockTwo) {
        blockTwo.appendChild(userElement);
      } else if (index === 2 && blockThree) {
        blockThree.appendChild(userElement);
      }
    });
  })
  .catch(error => console.log(error));

  // users 
function createUserElement(user, index) {
  const userElement = document.createElement('div');
  userElement.classList.add('user');

  let paragraphText = '';
  if (index === 0) {
    paragraphText = '"Fantastic staff who are absolutely wonderful, serving delicious food that I highly recommend."';
  } else if (index === 1) {
    paragraphText = '"Exceptional service provided by the friendly and knowledgeable staff, combined with unbeatable prices, makes it a truly remarkable experience."';
  } else if (index === 2) {
    paragraphText = '"It is an excellent location where you can find a wide variety of food options to satisfy any craving you may have."';
  }

  userElement.innerHTML = `
    <img src="${user.avatar}" alt="User Avatar">
    <h3>${user.first_name} ${user.last_name}</h3>
    <img src="images/stars.png" alt="Stars">
    <p>${paragraphText}</p>
  `;
  return userElement;
}

// // Get the necessary elements
// const seeMoreContainer = document.querySelector('.see-more-container');
// const btnSeeMore = document.querySelector('#btn-see-more');
// const blockTwo = document.querySelector('#block-two');
// const blockThree = document.querySelector('#block-three');

// // Function to handle "See More" button click
// function handleSeeMoreClick() {
//   // Toggle the visibility of block two and three
//   blockTwo.style.display = blockTwo.style.display === 'none' ? 'block' : 'none';
//   blockThree.style.display = blockThree.style.display === 'none' ? 'block' : 'none';
// }

// // Add event listener to the "See More" button
// btnSeeMore.addEventListener('click', handleSeeMoreClick);
