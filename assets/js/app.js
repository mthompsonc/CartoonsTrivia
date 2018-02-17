var counter = 0;
var myArray = [];
const shuffleArray = myArray.sort();
fetch(`https://opentdb.com/api.php?amount=10&category=32`)
  .then(response => response.json())
  .then(data => {

    for (i in data.results){
    myArray.push(data.results[i].correct_answer + "/" + data.results.indexOf(data.results[i]));

    for (x in data.results[i].incorrect_answers) {
      myArray.push(data.results[i].incorrect_answers[x] + "/" + data.results.indexOf(data.results[i]))
      console.log(myArray.sort());
    }
  }

    $('.question').append(`<p>${data.results[0].question}</p> `)

for (n in shuffleArray) {
    if(shuffleArray[n].includes("/0") === true){
      var noNumberAnsw = shuffleArray[n].split('/0').join('')
      console.log(noNumberAnsw);
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
     }

  }

//1ra pregunta pasa a segunda
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[0].correct_answer) {
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[1])}">${data.results[1].question}</p> `)
        $('.choose').empty();
        console.log(shuffleArray);
for(r in shuffleArray){
      if(shuffleArray[r].includes("/1") === true){
      console.log("entrando");
      var noNumberAnsw = shuffleArray[r].split('/1').join('')
      console.log(noNumberAnsw);
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        $(this).css('background-color', 'green');
        counter++;
      } else {
        $(this).css('background-color', 'red');
      }

//2da pregunta pasa a tercera
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[1].correct_answer) {
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[2])}">${data.results[2].question}</p> `)
        $('.choose').empty();
        console.log(shuffleArray);
for(f in shuffleArray){
      if(shuffleArray[f].includes("/2") === true){
      console.log("entrando");
      var noNumberAnsw = shuffleArray[f].split('/2').join('')
      console.log(noNumberAnsw);
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        $(this).css('background-color', 'green');
        counter++;
      } else {
        $(this).css('background-color', 'red');
      }

      //3ra pregunta pasa a cuarta
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[2].correct_answer) {
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[3])}">${data.results[3].question}</p> `)
        $('.choose').empty();
        console.log(shuffleArray);
for(w in shuffleArray){
      if(shuffleArray[w].includes("/3") === true){
      console.log("entrando");
      var noNumberAnsw = shuffleArray[w].split('/3').join('')
      console.log(noNumberAnsw);
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        $(this).css('background-color', 'green');
        counter++;
      } else {
        $(this).css('background-color', 'red');
      }
            //4ta pregunta pasa a quinta
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[3].correct_answer) {
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[4])}">${data.results[4].question}</p> `)
        $('.choose').empty();
        console.log(shuffleArray);
for(g in shuffleArray){
      if(shuffleArray[g].includes("/4") === true){
      console.log("entrando");
      var noNumberAnsw = shuffleArray[g].split('/4').join('')
      console.log(noNumberAnsw);
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        $(this).css('background-color', 'green');
        counter++;
      } else {
        $(this).css('background-color', 'red');
      }
                  //5ta pregunta pasa a sexta
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[4].correct_answer) {
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[5])}">${data.results[5].question}</p> `)
        $('.choose').empty();
        console.log(shuffleArray);
for(t in shuffleArray){
      if(shuffleArray[t].includes("/5") === true){
      console.log("entrando");
      var noNumberAnsw = shuffleArray[t].split('/5').join('')
      console.log(noNumberAnsw);
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        $(this).css('background-color', 'green');
        counter++;
      } else {
        $(this).css('background-color', 'red');
      }
       //6ta pregunta pasa a septima
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[5].correct_answer) {
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[6])}">${data.results[6].question}</p> `)
        $('.choose').empty();
        console.log(shuffleArray);
for(u in shuffleArray){
      if(shuffleArray[u].includes("/6") === true){
      console.log("entrando");
      var noNumberAnsw = shuffleArray[u].split('/6').join('')
      console.log(noNumberAnsw);
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        $(this).css('background-color', 'green');
        counter++;
      } else {
        $(this).css('background-color', 'red');
      }
             //7ma pregunta pasa a octava
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[6].correct_answer) {
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[7])}">${data.results[7].question}</p> `)
        $('.choose').empty();
        console.log(shuffleArray);
for(d in shuffleArray){
      if(shuffleArray[d].includes("/7") === true){
      console.log("entrando");
      var noNumberAnsw = shuffleArray[d].split('/7').join('')
      console.log(noNumberAnsw);
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        $(this).css('background-color', 'green');
        counter++;
      } else {
        $(this).css('background-color', 'red');
      }
                   //8va pregunta pasa a novena
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[7].correct_answer) {
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[8])}">${data.results[8].question}</p> `)
        $('.choose').empty();
        console.log(shuffleArray);
for(p in shuffleArray){
      if(shuffleArray[p].includes("/8") === true){
      console.log("entrando");
      var noNumberAnsw = shuffleArray[p].split('/8').join('')
      console.log(noNumberAnsw);
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        $(this).css('background-color', 'green');
        counter++;
      } else {
        $(this).css('background-color', 'red');
      }
                         //9na pregunta pasa a decima
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[8].correct_answer) {
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[9])}">${data.results[9].question}</p> `)
        $('.choose').empty();
        console.log(shuffleArray);
for(y in shuffleArray){
      if(shuffleArray[y].includes("/9") === true){
      console.log("entrando");
      var noNumberAnsw = shuffleArray[y].split('/9').join('')
      console.log(noNumberAnsw);
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        $(this).css('background-color', 'green');
        counter++;
      } else {
        $(this).css('background-color', 'red');
      }
                               //10ma pasando a fin
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[9].correct_answer) {
        $('.question').empty();
        $('.choose').empty();
        console.log(shuffleArray);
        $(this).css('background-color', 'green');
        $('.question').append(`<h1>Obtuviste ${counter}/10 respuestas correctas</h1>`);
        counter++;
      } else {
        $(this).css('background-color', 'red');
      }
    })
    })
    })
    })
    })
    })
    })
    })
    })


      

    })





   /* for (i in data.results){
    myArray.push(data.results[i].correct_answer + "/" + data.results.indexOf(data.results[i]));

          $('.question').append(`<p id="${data.results.indexOf(data.results[i])}">${data.results[i].question}</p> `)
          $(`#${data.results.indexOf(data.results[i])}`).hide();

    if(data.results.indexOf(data.results[i]) === 0){
      $(`#${data.results.indexOf(data.results[i])}`).show();

}
    

    for (x in data.results[i].incorrect_answers) {
      myArray.push(data.results[i].incorrect_answers[x] + "/" + data.results.indexOf(data.results[i]))
      console.log(myArray.sort());
    }

    }
        for (n in shuffleArray) {
    if(shuffleArray[n].includes("/0") == true){
      var noNumberAnsw = shuffleArray[n].split('/0').join('')
      console.log(noNumberAnsw);
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    }
    
    $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[0].correct_answer) {
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[1])}">${data.results[1].question}</p> `)
        $('.choose').empty();
    if(shuffleArray[n].includes("/1") == true){
      var noNumberAnsw = shuffleArray[n].split('/1').join('')
      console.log(noNumberAnsw);
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    }
        $(this).css('background-color', 'green');
        counter++;
      } else {
        $(this).css('background-color', 'red');
      }
    })
  }
  })
*/






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
    })*/
  })