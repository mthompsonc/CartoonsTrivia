$('.t-or-f').click(function(){
  $('.whatKind').hide();
  var counter = 0;
var myArray = [];
const shuffleArray = myArray.sort();
fetch(`https://opentdb.com/api.php?amount=10&type=boolean`)
  .then(response => response.json())
  .then(data => {

    for (i in data.results){
            

    myArray.push(data.results[i].correct_answer + "/" + data.results.indexOf(data.results[i]));

    for (x in data.results[i].incorrect_answers) {
      myArray.push(data.results[i].incorrect_answers[x] + "/" + data.results.indexOf(data.results[i]))
    }
  }

    $('.category').append(`<h4>Category: ${data.results[0].category}</h4>`)
    $('.question').append(`<p>${data.results[0].question}</p> `)

for (n in shuffleArray) {
    if(shuffleArray[n].includes("/0") === true){
      var noNumberAnsw = shuffleArray[n].split('/0').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
     }

  }

//1ra pregunta pasa a segunda
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[0].correct_answer) {
        $(this).css('background-color', 'green').delay(500);
        $('.question').empty();
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[1].category}</h4>`);
        $('.question').append(`<p id="${data.results.indexOf(data.results[1])}">${data.results[1].question}</p> `);
        $('.choose').empty();
for(r in shuffleArray){
      if(shuffleArray[r].includes("/1") === true){
      var noNumberAnsw = shuffleArray[r].split('/1').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        counter++;
      } else {
        $(this).css('background-color', 'red').delay(500);
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[1].category}</h4>`);
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[1])}">${data.results[1].question}</p> `);
        $('.choose').empty();
for(r in shuffleArray){
      if(shuffleArray[r].includes("/1") === true){
      var noNumberAnsw = shuffleArray[r].split('/1').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
      }

//2da pregunta pasa a tercera
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[1].correct_answer) {
        $(this).css('background-color', 'green');
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[2].category}</h4>`);
        $('.question').empty()
        $('.question').append(`<p id="${data.results.indexOf(data.results[2])}">${data.results[2].question}</p> `)
        $('.choose').empty();
for(f in shuffleArray){
      if(shuffleArray[f].includes("/2") === true){
      var noNumberAnsw = shuffleArray[f].split('/2').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        counter++;
      } else {
        $(this).css('background-color', 'red');
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[2].category}</h4>`);
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[2])}">${data.results[2].question}</p> `)
        $('.choose').empty();
for(f in shuffleArray){
      if(shuffleArray[f].includes("/2") === true){
      var noNumberAnsw = shuffleArray[f].split('/2').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
      }

      //3ra pregunta pasa a cuarta
      $('.btn-choice').click(function() {
                $(this).css('background-color', 'green');

      if ($(this).attr('value') === data.results[2].correct_answer) {
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[3].category}</h4>`);
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[3])}">${data.results[3].question}</p> `)
        $('.choose').empty();
for(w in shuffleArray){
      if(shuffleArray[w].includes("/3") === true){
      var noNumberAnsw = shuffleArray[w].split('/3').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        counter++;
      } else {
                $(this).css('background-color', 'red');

        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[3].category}</h4>`);
                $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[3])}">${data.results[3].question}</p> `)
        $('.choose').empty();
for(w in shuffleArray){
      if(shuffleArray[w].includes("/3") === true){
      var noNumberAnsw = shuffleArray[w].split('/3').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
      }
            //4ta pregunta pasa a quinta
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[3].correct_answer) {
                $(this).css('background-color', 'green');

        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[4].category}</h4>`);
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[4])}">${data.results[4].question}</p> `)
        $('.choose').empty();
for(g in shuffleArray){
      if(shuffleArray[g].includes("/4") === true){
      var noNumberAnsw = shuffleArray[g].split('/4').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        counter++;
      } else {
                $(this).css('background-color', 'red');

        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[4].category}</h4>`);
                $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[4])}">${data.results[4].question}</p> `)
        $('.choose').empty();
for(g in shuffleArray){
      if(shuffleArray[g].includes("/4") === true){
      var noNumberAnsw = shuffleArray[g].split('/4').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
      }
                  //5ta pregunta pasa a sexta
      $('.btn-choice').click(function() {
                $(this).css('background-color', 'green');

      if ($(this).attr('value') === data.results[4].correct_answer) {
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[5].category}</h4>`);
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[5])}">${data.results[5].question}</p> `)
        $('.choose').empty();
for(t in shuffleArray){
      if(shuffleArray[t].includes("/5") === true){
      var noNumberAnsw = shuffleArray[t].split('/5').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        counter++;
      } else {
                $(this).css('background-color', 'red');
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[5].category}</h4>`);
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[5])}">${data.results[5].question}</p> `)
        $('.choose').empty();
for(t in shuffleArray){
      if(shuffleArray[t].includes("/5") === true){
      var noNumberAnsw = shuffleArray[t].split('/5').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
      }
       //6ta pregunta pasa a septima
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[5].correct_answer) {
        $(this).css('background-color', 'green');
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[6].category}</h4>`);
        $('.question').delay(500).empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[6])}">${data.results[6].question}</p> `)
        $('.choose').empty();
for(u in shuffleArray){
      if(shuffleArray[u].includes("/6") === true){
      var noNumberAnsw = shuffleArray[u].split('/6').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        counter++;
      } else {
        $(this).css('background-color', 'red');
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[6].category}</h4>`);
                $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[6])}">${data.results[6].question}</p> `)
        $('.choose').empty();
for(u in shuffleArray){
      if(shuffleArray[u].includes("/6") === true){
      var noNumberAnsw = shuffleArray[u].split('/6').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
      }
             //7ma pregunta pasa a octava
      $('.btn-choice').click(function() {
        $(this).css('background-color', 'green');
      if ($(this).attr('value') === data.results[6].correct_answer) {
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[7].category}</h4>`);
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[7])}">${data.results[7].question}</p> `)
        $('.choose').empty();
for(d in shuffleArray){
      if(shuffleArray[d].includes("/7") === true){
      var noNumberAnsw = shuffleArray[d].split('/7').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        counter++;
      } else {
        $(this).css('background-color', 'red');
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[7].category}</h4>`);
                $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[7])}">${data.results[7].question}</p> `)
        $('.choose').empty();
for(d in shuffleArray){
      if(shuffleArray[d].includes("/7") === true){
      var noNumberAnsw = shuffleArray[d].split('/7').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
      }
                   //8va pregunta pasa a novena
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[7].correct_answer) {
        $(this).css('background-color', 'green');
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[8].category}</h4>`);
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[8])}">${data.results[8].question}</p> `)
        $('.choose').empty();
for(p in shuffleArray){
      if(shuffleArray[p].includes("/8") === true){
      var noNumberAnsw = shuffleArray[p].split('/8').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        counter++;
      } else {
        $(this).css('background-color', 'red');
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[8].category}</h4>`);
                $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[8])}">${data.results[8].question}</p> `)
        $('.choose').empty();
for(p in shuffleArray){
      if(shuffleArray[p].includes("/8") === true){
      var noNumberAnsw = shuffleArray[p].split('/8').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
      }
                         //9na pregunta pasa a decima
      $('.btn-choice').click(function() {
        $(this).css('background-color', 'green');
      if ($(this).attr('value') === data.results[8].correct_answer) {
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[9].category}</h4>`);
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[9])}">${data.results[9].question}</p> `)
        $('.choose').empty();
for(y in shuffleArray){
      if(shuffleArray[y].includes("/9") === true){
      var noNumberAnsw = shuffleArray[y].split('/9').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        counter++;
      } else {
        $(this).css('background-color', 'red');
        $('.category').empty();
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[9].category}</h4>`);
                $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[9])}">${data.results[9].question}</p> `)
        $('.choose').empty();
for(y in shuffleArray){
      if(shuffleArray[y].includes("/9") === true){
      var noNumberAnsw = shuffleArray[y].split('/9').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
      }
                               //10ma pasando a fin
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[9].correct_answer) {
        $('.category').empty();
        $('.question').empty();
        $('.choose').empty();
        $(this).css('background-color', 'green');
        $('.question').append(`<h1>You got ${counter}/10 correct answers</h1>`);
        counter++;
      } else {
        $('.category').empty();
        $('.question').empty();
        $('.choose').empty();
        $(this).css('background-color', 'green');
        $('.question').append(`<h1>You got ${counter}/10 correct answers</h1>`);
        counter++;
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
 })
})

$('.multiple').click(function(){
  $('.whatKind').hide();
  var counter = 0;
var myArray = [];
const shuffleArray = myArray.sort();
fetch(`https://opentdb.com/api.php?amount=10&type=multiple`)
  .then(response => response.json())
  .then(data => {

    for (i in data.results){
            

    myArray.push(data.results[i].correct_answer + "/" + data.results.indexOf(data.results[i]));

    for (x in data.results[i].incorrect_answers) {
      myArray.push(data.results[i].incorrect_answers[x] + "/" + data.results.indexOf(data.results[i]))
    }
  }

    $('.category').append(`<h4>Category: ${data.results[0].category}</h4>`)
    $('.question').append(`<p>${data.results[0].question}</p> `)

for (n in shuffleArray) {
    if(shuffleArray[n].includes("/0") === true){
      var noNumberAnsw = shuffleArray[n].split('/0').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
     }

  }

//1ra pregunta pasa a segunda
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[0].correct_answer) {
        $(this).css('background-color', 'green').delay(500);
        $('.question').empty();
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[1].category}</h4>`);
        $('.question').append(`<p id="${data.results.indexOf(data.results[1])}">${data.results[1].question}</p> `);
        $('.choose').empty();
for(r in shuffleArray){
      if(shuffleArray[r].includes("/1") === true){
      var noNumberAnsw = shuffleArray[r].split('/1').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        counter++;
      } else {
        $(this).css('background-color', 'red').delay(500);
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[1].category}</h4>`);
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[1])}">${data.results[1].question}</p> `);
        $('.choose').empty();
for(r in shuffleArray){
      if(shuffleArray[r].includes("/1") === true){
      var noNumberAnsw = shuffleArray[r].split('/1').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
      }

//2da pregunta pasa a tercera
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[1].correct_answer) {
        $(this).css('background-color', 'green');
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[2].category}</h4>`);
        $('.question').empty()
        $('.question').append(`<p id="${data.results.indexOf(data.results[2])}">${data.results[2].question}</p> `)
        $('.choose').empty();
for(f in shuffleArray){
      if(shuffleArray[f].includes("/2") === true){
      var noNumberAnsw = shuffleArray[f].split('/2').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        counter++;
      } else {
        $(this).css('background-color', 'red');
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[2].category}</h4>`);
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[2])}">${data.results[2].question}</p> `)
        $('.choose').empty();
for(f in shuffleArray){
      if(shuffleArray[f].includes("/2") === true){
      var noNumberAnsw = shuffleArray[f].split('/2').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
      }

      //3ra pregunta pasa a cuarta
      $('.btn-choice').click(function() {
                $(this).css('background-color', 'green');

      if ($(this).attr('value') === data.results[2].correct_answer) {
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[3].category}</h4>`);
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[3])}">${data.results[3].question}</p> `)
        $('.choose').empty();
for(w in shuffleArray){
      if(shuffleArray[w].includes("/3") === true){
      var noNumberAnsw = shuffleArray[w].split('/3').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        counter++;
      } else {
                $(this).css('background-color', 'red');

        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[3].category}</h4>`);
                $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[3])}">${data.results[3].question}</p> `)
        $('.choose').empty();
for(w in shuffleArray){
      if(shuffleArray[w].includes("/3") === true){
      var noNumberAnsw = shuffleArray[w].split('/3').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
      }
            //4ta pregunta pasa a quinta
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[3].correct_answer) {
                $(this).css('background-color', 'green');

        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[4].category}</h4>`);
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[4])}">${data.results[4].question}</p> `)
        $('.choose').empty();
for(g in shuffleArray){
      if(shuffleArray[g].includes("/4") === true){
      var noNumberAnsw = shuffleArray[g].split('/4').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        counter++;
      } else {
                $(this).css('background-color', 'red');

        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[4].category}</h4>`);
                $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[4])}">${data.results[4].question}</p> `)
        $('.choose').empty();
for(g in shuffleArray){
      if(shuffleArray[g].includes("/4") === true){
      var noNumberAnsw = shuffleArray[g].split('/4').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
      }
                  //5ta pregunta pasa a sexta
      $('.btn-choice').click(function() {
                $(this).css('background-color', 'green');

      if ($(this).attr('value') === data.results[4].correct_answer) {
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[5].category}</h4>`);
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[5])}">${data.results[5].question}</p> `)
        $('.choose').empty();
for(t in shuffleArray){
      if(shuffleArray[t].includes("/5") === true){
      var noNumberAnsw = shuffleArray[t].split('/5').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        counter++;
      } else {
                $(this).css('background-color', 'red');
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[5].category}</h4>`);
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[5])}">${data.results[5].question}</p> `)
        $('.choose').empty();
for(t in shuffleArray){
      if(shuffleArray[t].includes("/5") === true){
      var noNumberAnsw = shuffleArray[t].split('/5').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
      }
       //6ta pregunta pasa a septima
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[5].correct_answer) {
        $(this).css('background-color', 'green');
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[6].category}</h4>`);
        $('.question').delay(500).empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[6])}">${data.results[6].question}</p> `)
        $('.choose').empty();
for(u in shuffleArray){
      if(shuffleArray[u].includes("/6") === true){
      var noNumberAnsw = shuffleArray[u].split('/6').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        counter++;
      } else {
        $(this).css('background-color', 'red');
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[6].category}</h4>`);
                $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[6])}">${data.results[6].question}</p> `)
        $('.choose').empty();
for(u in shuffleArray){
      if(shuffleArray[u].includes("/6") === true){
      var noNumberAnsw = shuffleArray[u].split('/6').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
      }
             //7ma pregunta pasa a octava
      $('.btn-choice').click(function() {
        $(this).css('background-color', 'green');
      if ($(this).attr('value') === data.results[6].correct_answer) {
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[7].category}</h4>`);
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[7])}">${data.results[7].question}</p> `)
        $('.choose').empty();
for(d in shuffleArray){
      if(shuffleArray[d].includes("/7") === true){
      var noNumberAnsw = shuffleArray[d].split('/7').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        counter++;
      } else {
        $(this).css('background-color', 'red');
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[7].category}</h4>`);
                $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[7])}">${data.results[7].question}</p> `)
        $('.choose').empty();
for(d in shuffleArray){
      if(shuffleArray[d].includes("/7") === true){
      var noNumberAnsw = shuffleArray[d].split('/7').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
      }
                   //8va pregunta pasa a novena
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[7].correct_answer) {
        $(this).css('background-color', 'green');
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[8].category}</h4>`);
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[8])}">${data.results[8].question}</p> `)
        $('.choose').empty();
for(p in shuffleArray){
      if(shuffleArray[p].includes("/8") === true){
      var noNumberAnsw = shuffleArray[p].split('/8').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        counter++;
      } else {
        $(this).css('background-color', 'red');
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[8].category}</h4>`);
                $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[8])}">${data.results[8].question}</p> `)
        $('.choose').empty();
for(p in shuffleArray){
      if(shuffleArray[p].includes("/8") === true){
      var noNumberAnsw = shuffleArray[p].split('/8').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
      }
                         //9na pregunta pasa a decima
      $('.btn-choice').click(function() {
        $(this).css('background-color', 'green');
      if ($(this).attr('value') === data.results[8].correct_answer) {
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[9].category}</h4>`);
        $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[9])}">${data.results[9].question}</p> `)
        $('.choose').empty();
for(y in shuffleArray){
      if(shuffleArray[y].includes("/9") === true){
      var noNumberAnsw = shuffleArray[y].split('/9').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
        counter++;
      } else {
        $(this).css('background-color', 'red');
        $('.category').empty();
        $('.category').empty();
        $('.category').append(`<h4>Category: ${data.results[9].category}</h4>`);
                $('.question').empty();
        $('.question').append(`<p id="${data.results.indexOf(data.results[9])}">${data.results[9].question}</p> `)
        $('.choose').empty();
for(y in shuffleArray){
      if(shuffleArray[y].includes("/9") === true){
      var noNumberAnsw = shuffleArray[y].split('/9').join('')
      $('.choose').append(`<p value="${noNumberAnsw}" class="btn-choice text-center"> ${noNumberAnsw}</p>`)
    
    }
}
      }
                               //10ma pasando a fin
      $('.btn-choice').click(function() {
      if ($(this).attr('value') === data.results[9].correct_answer) {
        $('.category').empty();
        $('.question').empty();
        $('.choose').empty();
        $(this).css('background-color', 'green');
        $('.question').append(`<h1>You got ${counter}/10 correct answers</h1>`);
        counter++;
      } else {
        $('.category').empty();
        $('.question').empty();
        $('.choose').empty();
        $(this).css('background-color', 'green');
        $('.question').append(`<h1>You got ${counter}/10 correct answers</h1>`);
        counter++;
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
 })
})
