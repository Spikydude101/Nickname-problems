//Nickname generator code


'use strict';


//event listeners
document.getElementById('random').addEventListener('click' , nicknameCreate);
document.getElementById('all').addEventListener('click' , allPicked);




let nickName = ['undivine' , 'ruthless' , 'cold-hearted' , 'the destroyer' , 'somehow smart' , 'the kid'];



// functions

function nicknameCreate() {
    let first = document.getElementById('first').value;
    let last = document.getElementById('last').value;
    let chosen = Math.floor((Math.random()* 6) + 1);
    console.log(chosen);
    if (chosen == 1) {
        document.getElementById('name-spawner').innerHTML +=  "<p>" + first + " \'" + nickName[0] + " \'" + last + "</p>";

    }else if (chosen == 2) {
        
        document.getElementById('name-spawner').innerHTML +=  "<p>" + first + " \'" + nickName[1] + " \'" + last + "</p>";

    }else if (chosen == 3) {
        document.getElementById('name-spawner').innerHTML +=  "<p>" + first + " \'" + nickName[2] + " \'" + last + "</p>";

    }else if (chosen == 4) {
        document.getElementById('name-spawner').innerHTML +=  "<p>" + first + " \'" + nickName[3] + " \'" + last + "</p>";

    }else if (chosen == 5) {
        document.getElementById('name-spawner').innerHTML +=  "<p>" + first + " \'" + nickName[4] + " \'" + last + "</p>";
        
    }else if (chosen == 6) {
        document.getElementById('name-spawner').innerHTML +=  "<p>" + first + " \'" + nickName[5] + " \'" + last + "</p>";
    }



}
function allPicked() {
    let first = document.getElementById('first').value;
    let last = document.getElementById('last').value;
    for ( let i = 0; i < nickName.length; i ++ ) {
        document.getElementById('name-spawner').innerHTML +=  "<p>" + first + " \'" + nickName[i] + " \'" + last + "</p>";

    }

}



