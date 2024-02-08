
const app = new App();

const newUserRegistered = myApp.registerUser('Ali Baba', 'ali_baba', 'ali@pikabu.ru', 'password123', 'password123');
if (newUserRegistered) {
    console.log('зарегистрирваон успещго!!:', myApp.users);
} else {
    console.log('таакого нету!');
}

const newCourse = new Course("course_image.jpg", "вебушка дизвайн", "чтото дял дизайнв", "кодинг", "юсуф", "6 каторжных лет", 49.99, 4.5, "WEB101");
myApp.addCourse(newCourse);
console.log('Courses:', myApp.getAllCourses());

const userEnrollmentResult = myApp.addCourseToUser('ali_baba', 'WEB101');
console.log('Enrollment result:', userEnrollmentResult);

const paymentResult = myApp.makePayment('WEB101', 49.99, 'credit_card');
console.log('Payment result:', paymentResult);

// function createMenu() 
// {
//     const menuContainer = document.createElement('div');
//     menuContainer.classList.add('menu');
//     const registrationLink = createMenuItem('Registration', '#', () => registerUser());
//     const loginLink = createMenuItem('Login', '#', () => loginUser());
//     const coursesLink = createMenuItem('Courses', '#', () => displayCourses());
//     const checkPaymentLink = createMenuItem('Check Payment', '#', () => checkPayment());
//     menuContainer.appendChild(registrationLink);
//     menuContainer.appendChild(loginLink);
//     menuContainer.appendChild(coursesLink);
//     menuContainer.appendChild(checkPaymentLink);
// nt.body.appendChild(menuContainer);
// }

// function createMenuItem(text, link, action) 
// {
//     const menuItem = document.createElement('a');
//     menuItem.href = link;
//     menuItem.textContent = text;
//     menuItem.classList.add('menu-item');
//     menuItem.addEventListener('click', action); 
// }

// window.onload = function () {
//     createMenu();
// };