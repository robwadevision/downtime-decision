const button = document.getElementById('Pick');
button.addEventListener('click', pickMeOne);

function pickMeOne() {

    const activities = [
        { 
            name: 'Create',
            option1: 'Work on a game idea',
            option2: 'Add content to a story',
            option3: 'Flesh out an RPG'
         }, 
        {
            name: 'Learn',
            option1: 'Play Rocksmith',
            option2: 'Read a learning book',
            option3: 'Udemy/LinkedIn/Zenva' 
        },
        {
            name: 'Play',
            option1: 'Play Xbox',
            option2: 'Play Steam',
            option3: 'Play Switch'
        },
        {
            name: 'Read',
            option1: 'Read a book for fun',
            option2: 'Read an article for work',
            option3: 'Read an RPG book'
        }
    ]
    
    let chosenActivity = activities[Math.floor(Math.random() * activities.length)];
    let nameBox = document.getElementById('namebox');
    nameBox.innerHTML = chosenActivity.name;
    let option1Box = document.getElementById('option1');
    option1Box.innerHTML = chosenActivity.option1;
    let option2Box = document.getElementById('option2');
    option2Box.innerHTML = chosenActivity.option2;
    let option3Box = document.getElementById('option3');
    option3Box.innerHTML = chosenActivity.option3;
};