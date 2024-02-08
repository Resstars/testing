
class App 
{
    constructor() 
    {
        this.users = [];
        this.courses = [];
        this.lessons = []; 
        this.quizzes = [];
        this.certificates = []; 
    }

    getCourseDetails(courseCode) {
        const course = this.courses.find(course => course.code === courseCode);
        return course ? course : null;
    }

    getAllCourses() {
        return this.courses;
    }

    addCourse(course) {
        this.courses.push(course);
    }

    addCourseToUser(userLogin, courseCode) 
    {
        const user = this.users.find(user => user.login === userLogin);
        const course = this.getCourseDetails(courseCode);

        if (!user || !course) 
        {
            return "User or course not found";
        }

        if (user.courses.includes(courseCode)) 
        {
            return "User is already enrolled in this course";
        }
        return {
            user: user,
            courses: user.courses.map(courseCode => this.getCourseDetails(courseCode))
        };
    }
  

    makePayment(courseCode, amount, paymentMethod) 
    {
        const course = this.getCourseDetails(courseCode);
        if (!course) 
        {
            return "Course not found";
        }
        const paymentSuccessful = true;
        if (paymentSuccessful) 
        {
            return "Payment successful";
        } else 
        {
            return "Payment failed";
        }
    }

    registerUser(name, login, email, password, confirmPassword) {

        // //для promt
        // const name = prompt('Enter your name:');
        // const login = prompt('Enter your login:');
        // const email = prompt('Enter your email:');
        // const password = prompt('Enter your password:');
        // const confirmPassword = prompt('Confirm your password:');
        //const registrationResult = app.registerUser(name, login, email, password, confirmPassword);

        if (this.users.some(user => user.login === login || user.email === email)) {
            return false; 
        }

        if (password !== confirmPassword) {
            return false; 
        }

        const newUser = new User(name, login, email, password, "student", [], {});

        this.addUser(newUser);
        

       
        this.saveUserToLocalStorage(newUser);

        return true; 
    }

    addUser(user) {
        this.users.push(user);
    }

    saveUserToLocalStorage(user) {
        const usersFromLocalStorage = JSON.parse(localStorage.getItem('users')) || [];
        usersFromLocalStorage.push(user);
        localStorage.setItem('users', JSON.stringify(usersFromLocalStorage));
    }

    getUsersFromLocalStorage() {
        return JSON.parse(localStorage.getItem('users')) || [];
    }

}

