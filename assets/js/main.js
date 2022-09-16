/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* ============== MENU SHOW =============== */
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* ============== MENU HIDDEN ============= */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
        //when we click on each nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
    const header = document.getElementById('header')
        //when the scroll is greater than 50 viewpoint height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
    calculateCm = document.getElementById('calculate-cm'),
    calculateKg = document.getElementById('calculate-kg'),
    calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) => {
    e.preventDefault()
        //check if the fields have a value
    if (calculateCm.value === '' || calculateKg.value === '') {
        //Add and remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')
            // show message
        calculateMessage.textContent = 'Fill in the Height and Weight 🧑‍💻'
            // Remove message
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)
    } else {
        //BMI Formula
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm))

        //show your health status
        if (bmi < 18.5) {
            //Add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = 'Your BMI is ' + bmi + ' and you are Skinny 😔'
        } else if (bmi < 25) {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = 'Your BMI is ' + bmi + ' and you are Healthy 🥳'
        } else {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = 'Your BMI is ' + bmi + ' and you are OverWeight 😒'
        }
        //To clear the input field
        calculateCm.value = ''
        calculateKg.value = ''
            //Remove message four seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000)
    }
}
calculateForm.addEventListener('submit', calculateBmi)

/*=============== EMAIL JS ===============*/


0