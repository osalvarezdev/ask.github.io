let runCount = 0;
       

        function runAway() {
            let button = document.getElementById("noButton");
            let container = document.querySelector(".container");
        
            if (runCount < 10) {
                // Get container and button dimensions
                let containerRect = container.getBoundingClientRect();
                let buttonRect = button.getBoundingClientRect();
        
                // Calculate new position within container bounds
                let maxX = containerRect.width - buttonRect.width;
                let maxY = containerRect.height - buttonRect.height;
        
                let x = Math.random() * maxX;
                let y = Math.random() * maxY;
        
                button.style.position = "absolute"; // Ensure absolute positioning
                button.style.left = `${x}px`;
                button.style.top = `${y}px`;
        
                runCount++;
        }
    }

function change(fileName) {
    let img= document.querySelector('.cinnamon');
    img.setAttribute("src", fileName)
}

const heartCreate = () =>{
    const container = document.querySelector('.container'); // Target the container
    const containerRect = container.getBoundingClientRect(); // Get container size

    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText ='❤︎'
    heart.style.left = Math.random() * containerRect.width + 'px'; 
    heart.style.top = Math.random() * containerRect.height + 'px';
    heart.style.animationDuration = Math.random() * 2+3+'s';
    container.appendChild(heart);

  
}
const questionCreate = () =>{
    const container = document.querySelector('.container'); // Target the container
    const containerRect = container.getBoundingClientRect(); // Get container size

    const question = document.createElement('div');
    question.classList.add('question');
    question.innerText ='?'
    question.style.left = Math.random() * containerRect.width + 'px'; 
    question.style.top = Math.random() * containerRect.height + 'px';
    question.style.animationDuration = Math.random() * 2+3+'s';
    container.appendChild(question);

    setTimeout(() => {
        question.remove();
    }, 5000);
}
const teardrop = () =>{
    const container = document.querySelector('.container'); // Target the container
    const containerRect = container.getBoundingClientRect(); // Get container size

    const drop = document.createElement('div');
    drop.classList.add('drop');
    drop.innerText ='💧'
    drop.style.position = 'absolute';
    drop.style.left = Math.random() * containerRect.width + 'px'; 
    
    drop.style.top = '0px';
    drop.style.animationDuration = Math.random() * 2+3+'s';
    container.appendChild(drop);

     
}
let questInterval = setInterval(questionCreate, 700);

function respond(answer) {
    let message = answer === 'yes' ? "Yay! Can't wait! 🎉" : "Oh no... maybe next time? 😢";
    document.getElementById('response').innerText = message;
    let yesButton = document.getElementById('yesButton');
    let noButton = document.getElementById('noButton');

    // Disable only the opposite button and change its style
    if (answer === 'yes') {
        noButton.disabled = true;
        noButton.classList.add("disabled-button");
        noButton.onmouseover = null;
        clearInterval(questInterval);
        setInterval(heartCreate,1000)
        
    } else {
        yesButton.disabled = true;
        yesButton.classList.add("disabled-button");
        clearInterval(questInterval);
        setInterval(teardrop,1500)
        
    }
}