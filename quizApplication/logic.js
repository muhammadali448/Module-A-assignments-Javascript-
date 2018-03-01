// var question1 = '2 + 2 ';
// var question2 = '2 - 2 ';
// var question3 = '4 % 2';
// var question4 = '10 / 2';
// var question5 = '10 === "10"';
// var question6 = '10 == "10"'
// var score = 0;
// var questions = [
//   question1, 
//   question2,
//   question3,
//   question4,
//   question5,
//   question6
// ]
// var answers = [
//   4,
//   0,
//   0,
//   5,
//   'false',
//   'true'
// ]
// var userAnswers = [];
// for(var i = 0; i < questions.length; i++){
//   var userAnswer = prompt(questions[i]);
//   userAnswers.push(userAnswer);
//   if(answers[i] == userAnswers[i]){
//     score++;
//     alert('You are right');
//   }else {
//     alert('You are wrong');
//   }
// }
// alert(`Your score is: ${score} out of ${questions.length}`);


checkingAnswers = () => {
  var score = 0;
  const questions = [
    document.getElementsByName('question1'),
    document.getElementsByName('question2'),
    document.getElementsByName('question3'),
    document.getElementsByName('question4'),
    document.getElementsByName('question5'),
    document.getElementsByName('question6'),
    document.getElementsByName('question7'),
    document.getElementsByName('question8'),
    document.getElementsByName('question9'),
    document.getElementsByName('question10')
  ]
  for(var i = 0; i < questions.length; i++){
    for(var j = 0; j < questions[i].length; j++){
      if(questions[i][j].checked && questions[i][j].value === 'script'){
        score++;
      }else if(questions[i][j].checked && questions[i][j].value === 'styles'){
        score++;
      }else if(questions[i][j].checked && questions[i][j].value === 'stringCommaDotLength'){
        score++;
      }else if(questions[i][j].checked && questions[i][j].value === 'twoForwardSlash'){
        score++;
      }else if(questions[i][j].checked && questions[i][j].value === 'confirmQuotesCorrect'){
        score++;
      }
      else if(questions[i][j].checked && questions[i][j].value === 'askInput'){
        score++;
      }else if(questions[i][j].checked && questions[i][j].value === 'console.log('){
        score++;
      }else if(questions[i][j].checked && questions[i][j].value === 'reuseable'){
        score++;
      }else if(questions[i][j].checked && questions[i][j].value === 'conditionLess5'){
        score++;
      }else if(questions[i][j].checked && questions[i][j].value === 'vStoreListData'){
        score++;
      }
    }
  }
  let percentage = (score / questions.length) * 100;
  alert(`Your score is ${score} out of ${questions.length} \n
  You got ${(percentage).toFixed(2)}%`);
}