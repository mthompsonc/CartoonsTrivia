var myArray = [];
const shuffleArray = myArray.sort();
fetch(`https://opentdb.com/api.php?amount=10&category=32`)
  .then(response => response.json())
  .then(data => {
    for (i in data.results){
    myArray.push(data.results[i].correct_answer + "/" + data.results.indexOf(data.results[i]));

    if(data.results.indexOf(data.results[i]) === 0){
          $('.question').append(`<p id="${data.results.indexOf(data.results[i])}">${data.results[i].question}</p> `)

    }
    console.log('correcta:' + data.results[i].correct_answer)
    for (x in data.results[i].incorrect_answers) {
      myArray.push(data.results[i].incorrect_answers[x] + "/" + data.results.indexOf(data.results[i]))
      console.log(myArray.sort());
    }

    }
        for (n in shuffleArray) {
    if(shuffleArray[n].includes("/0") == true){
      var noNumberAnsw = shuffleArray[n].split('/0').join('')
      console.log(noNumberAnsw);
      $('.choose').append(`<p value="${noNumberAnsw}" id="${data.results.indexOf(data.results[i])}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    }
    }
    $('.btn-choice').click(function() {
      
      if ($(this).attr('value') === data.results[0].correct_answer) {
        $(this).css('background-color', 'green');
        counter++;
      } else {
        $(this).css('background-color', 'red');
      }
    })
  })







/*var myArray = [];
const shuffleArray = myArray.sort();
fetch(`https://opentdb.com/api.php?amount=10&category=32`)
  .then(response => response.json())
  .then(data => {
    for (i in data.results)(console.log(data.results.indexOf(data.results[i])))
    myArray.push(data.results[i].correct_answer);
    $('.question').append(`${data.results[i].question} `)
    $('.wrong').append(`${data.results[i].correct_answer} `)
    console.log('correcta:' + data.results[i].correct_answer)
    for (x in data.results[i].incorrect_answers) {
      myArray.push(data.results[i].incorrect_answers[x])
      console.log(myArray.sort());
      $('.wrong').append(`${data.results[i].incorrect_answers[x]} `)
    }
    for (n in shuffleArray) {
      $('.choose').append(`<p class="btn-choice text-center"> ${shuffleArray[n]}</p>`)
    }
    $('.btn-choice').click(function() {
      if ($('.btn-choice').attr(value) === data.correct_answer) {
        $(this).css('color-background: green');
        counter++;
      } else {
        $(this).css('color-background: red');
      }
    })
  })*/