
console.log('Hello World!');


let hasDownloadedResume = false; 
const name = "Mohit Gokar"; 

function downloadResume() {
    if (!hasDownloadedResume) {
        alert("Your resume downloaded successfully!");
        hasDownloadedResume = true; 
    }
}


document.querySelector('.resume-btn').addEventListener('click', downloadResume);


function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}


document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.createElement('h3');
    greetingElement.textContent = showGreeting(name);
    document.body.insertBefore(greetingElement, document.body.firstChild);
});


function daysUntilDeadline(deadline) {
    const currentDate = new Date();
    const targetDate = new Date(deadline);
    const differenceInTime = targetDate - currentDate;
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
}


const projectDeadline = "2024-12-31"; 
const remainingDays = daysUntilDeadline(projectDeadline);
console.log(`Days until project deadline: ${remainingDays}`);
