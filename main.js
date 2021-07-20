const button = document.getElementById('Pick');
button.addEventListener('click', pickMeOne);

function pickMeOne() {

    const activities = ['Develop', 'Learn', 'Play', 'Read']
    
    let chosenActivity = activities[Math.floor(Math.random() * activities.length)];
    let randomBox = document.getElementById('randombox');
    randomBox.innerHTML = chosenActivity;
};