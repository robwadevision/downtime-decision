window.onload = function() {
document.getElementById('Pick').addEventListener('click', pickMeOne(), false);
}

function pickMeOne() {

    const activities = ['Develop', 'Learn', 'Play', 'Read']
    
    let chosenActivity = activities[Math.floor(Math.random() * activities.length)];
    let randomBox = document.getElementById('randombox');
    randomBox.innerHTML = chosenActivity;
};