'use strict'; //uses strict mode and eliminates type coersion
//Welcomes the user and saves their name for later use.
var user = prompt('Welcome to the page! This guy\'s name is Jordan. What\'s yours?');
console.log('User name:', user);
//counter to keep track of the number of correct answers
var correct = 0;
function questions1_5() {
  //array of y/n questions, in order
  var questionArray = ['Is this page about Jordan?', 'Do you think Jordan\'s favorite band makes good music?', 'Do you think Jordan is married?', 'does Jordan have a degree?', 'Jordan was born on November 22nd, 1992. On that day, an Olympic swimmer broke the world record in the backstroke. Was it Louise Karlsson?'];
  //array of y/n answers, in order
  var answerArray = ['yes', 'no', 'no', 'yes', 'no'];
  //array of responses if the user answers correctly
  var yesArray = ['That is correct, of course. I just wanted to make sure you were paying attention.', 'You\'re right. I have no idea why he listens to them in the first place.', 'Good guess. But you\'ve only got about a year left to be proud of yourself for that one.', 'Hey, you read the page! Now whether or not that degree means anything is up to interpretation.', 'Of course not! Everyone knows it was Sandra Volker.'];
  //array of responses if the user answers incorrectly
  var noArray = ['Sorry, I think you may be overlooking the point of the page. These questions won\'t be getting easier, unfortunately. Let\'s just keep going, ok?', 'Well joke\'s on you, he probably doesn\'t like them anymore because of that.', 'I\'m not sure why you would think that, but you\'ll be right in about a year or so.', 'Actually, he surprisingly does. But don\'t worry, it isn\'t in programming.', 'Not quite. She set the record for the butterfly the day before. You must have had her confused with Sandra Volker.'];
  //responds to the user's input and describes the format of the guessing game.
  alert('That\'s a great name. I\'m going to ask you a few questions in a yes / no format.');
  //cycles through each question, comparing the input response to the correct answer
  for (var i = 0; i < 5; i++) {
    //asks the question and then logs the response with a recyclable variable
    var response = prompt(questionArray[i]);
    console.log('question ' + i + ' response:', response);
    //if the response matches the answer, indicate and log that it was correct
    if (response.toLowerCase() === answerArray[i]) {
      alert(yesArray[i]);
      correct++;
      console.log('number of correct answers:', correct);
      //if the response does not match the answer, indicate that is was incorrect
    } else {
      alert(noArray[i]);
      console.log('number of correct answers:', correct);
    }
  }
}
// END OF Q 1-5 FUNTION
function question6() {
  //welcomes the user to the next set of questions
  alert('Ok, let\'s move on to some trickier questions. These ones won\'t be in the yes / no format.');
  //sets a random number for use later
  var rand = Math.round(Math.random() * (10 - 1) + 1);
  console.log('the number I\'m thinking of',rand);
  //defines variables to define the repeatition of the loop
  var guesses = 4;
  var numberGuessed = false;
  //loop which asks user to guess the random number until they get it right or guess 4 times
  while (guesses > 0 && numberGuessed === false) {
    var userNumberGuess = prompt('I\'m thinking of a number between 1 and 10. What do you think it is?');
    console.log('guessed number:', userNumberGuess);
    //if the guessed number is correct, the user is alerted and the loop ends
    if (parseInt(userNumberGuess) === rand) {
      alert('That\'s right! Good job!');
      correct++;
      console.log('number of correct answers:', correct);
      break;
      //tells the user how many guesses they have left
    } else {
      alert('Sorry, that wasn\'t right. You have ' + guesses + ' left.');
    } //end if ... else
    //reduces the number of guesses and logs it to the console for reference
    guesses--;
    console.log('number of guesses left:',guesses);
  } //end while
}
function question7() {
  //defines which answers are acceptable as a 'favorite genre'
  var favoriteGenres = ['jazz', 'rock', 'classical', 'traditional tuvan throat singing'];
  //console.log('favorite genres length:', favoriteGenres.length);
  //defines variables to define the repeatition of the loop
  var guesses = 6;
  var genreGuessed = false;
  //loop asks user to guess a favorite genre of music until they get it right or guess 6 times
  while (guesses > 0 && genreGuessed === false) {
    var musicGuess = prompt('What do you think one of my favorite genres of music to listen to is?');
    console.log('guessed genre:', musicGuess);
    //searches through the array to match the guess to a correct answer
    for (var j = 0; j < favoriteGenres.length; j++) {
      console.log('j:', j);
      //if the guess is correct, it is logged and displayed to the user
      if (musicGuess === favoriteGenres[j]) {
        alert('You got it!');
        correct++;
        genreGuessed = true;
        break;
      } //end if
    } //end for
    //reduces the number of guesses and tells the user how many they have left
    guesses--;
    if (genreGuessed === false) {
      alert('Sorry, that\'s not right. You have ' + guesses + ' guesses left.');
    } //end if
  } //end while
}
questions1_5();
question6();
question7();
alert('Good guessing! All of the possible answers were Jazz, Rock, Classical, and Traditional Tuvan Throat Singing');
//ends the quiz and congratulates the user on how many questions they got right
alert('Congratulations, ' + user + ', on getting ' + correct + ' correct answers!');
//test
