let user = 0; // score of users
let com = 0; // score of computers

// Getting all the Elements 
const user_option = document.querySelectorAll('.option');
let msg = document.querySelector('#msg');
let user_score = document.querySelector('#user-score');
let com_score = document.querySelector('#com-score');
let button = document.querySelector('#button');
let button_div = document.querySelector('#button_div');

//Adding event listener to restart button
button.addEventListener("click", () => {
    user_score.innerText = 0; // it will make user score 0
    com_score.innerText = 0;// it will make computer score 0
    msg.innerText = "Start the game"; // it will make msg inner text start the game  
    msg.style.backgroundColor = "black";// it will set the background color to black
    button_div.style.display = 'none'; // it will hide the game button 
});
// adding the click event on images and starting the game //
user_option.forEach((Option) => {
    Option.addEventListener("click", () => {
        let user_choice = Option.getAttribute('id'); // it will add the click event on every image and store the ID of Image which is clicked 
        playgame(user_choice); // It wil start the game for the Hand-sign the user choose

        button_div.style.display = 'block' // As soon the user click to the image the resatrt button will appear
    });
});

// Starting game
function playgame(user_choice) {

    let com_choice = comChoiceGen(); // it will give computer's choosen hand-sign

    if (user_choice === com_choice) { // if both user and computer choose same sign then the game will draw by using this function
        draw_game();
        msg.style.backgroundColor = "black"; // it will make the backgroundColor of msg box black
    }
    else { // if the game was not draw then this else condition will work

        let userwin = true; // here we are supposing the user has won 

        if (user_choice === "rock") { // if user has choose rock

            // if computer was also choosen rock then the draw program was ran but if we are at this condition it is only because the computer has not choosen rock.
            // now computer can only choose paper or secciors

            userwin = com_choice == "paper" ? false : true; /* This line decides the new value of user-win we decleared in the start of else condition 
                                                            if computer have choosed paper it will returend false value and other wise (else) if computer have choosed secciors it will return true value of user-win it means the user have won the game.   */

            decideWinner(userwin, user_choice, com_choice); // it will make some changes according to the deciosion if the user has won or not
        }
        else if (user_choice == "paper") { // if user choose paper 

            // if computer was also choosen paper then the draw program was ran but if we are at this condition it is only because the computer has not choosen paper.
            // now computer can only choosee rock or secciors

            userwin = com_choice == "rock" ? true : false/* This line decides the new value of user-win we decleared in the start of else condition 
            if computer have choosed rock it will returend true value and other wise (else) if computer have choosed secciors it will return false value of user-win it means the user have lose the game.   */

            decideWinner(userwin, user_choice, com_choice);// it will make some changes according to the deciosion if the user has won or not

        }
        else { // now only one condiotion have remain one condiotion if the user choose secciors

            // if computer was also secciors  then draw program was ran but if we are at this condition it is only because the computer has not choosen scciors.
            // now computer can only choose rock or paper

            userwin = com_choice == "paper" ? true : false/* This line decides the new value of user-win we decleared in the start of else condition 
            if computer have choosed paper it will returend true value and other wise (else) if computer have choosed rock it will return false value of user-win it means the user have lose the game.   */

            decideWinner(userwin, user_choice, com_choice);// it will make some changes according to the deciosion if the user has won or not
        }
    }


}
// Decides the change according to the winner
const decideWinner = (userwin, user_choice, com_choice) => { // this finction takes value of user-win
    if (userwin) { // if userwin is true
        user++;
        console.log("You win");
        msg.innerText = `You win, Your ${user_choice} beats Computer's ${com_choice}`;
        user_score.innerText = user;
        msg.style.backgroundColor = "green";
    }
    else { // if user-win is false
        com++;
        console.log("you lose")
        msg.innerText = `You lose, Computer's ${com_choice} beats Your ${user_choice}`;
        com_score.innerText = com;
        msg.style.backgroundColor = 'red';
    }
}
// it will check and do the cahnges on the condition if suer and computer both chooses the same sign
const draw_game = (user_choice, com_choice) => {
    if (user_choice === com_choice) {
        console.log("the game is draw ");
        msg.innerText = "The Game has draw";
    }
}
// this function develop computer's sign 
const comChoiceGen = () => {
    let choices = ["rock", "paper", "scissors"]; // it is the  array of signs
    const com_idx = Math.floor(Math.random() * 3); // it will make romdom number from 0-2 and store it in com-idx
    return choices[com_idx]; // i will return the value on the index number of array of choices.
}
