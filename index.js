var input = document.getElementById('input');
var character = document.getElementById('charat');
var wordsC = document.getElementById('wordsC');
var white = document.getElementById('spaces');
var lines = document.getElementById('lines');

setInterval(function(){
    if(input.value != ""){
  var char = input.value.split('')
   character.innerText = char.length;
        if(char[0] === "" || char[0] === " ")character.innerText = 00
     var words = input.value.split(' ')
   for(var i=0; i<words.length; i++){
          if(words[i].length === 0 || words[i].length === undefined) words.splice(i,1)
     wordsC.innerText = words.length
        }
  white.innerText = words.length - 1;
        var line = input.value.split('\n');
        lines.innerText = line.length
    }
  if(input.value === ""){
    character.innerText = 00;
    wordsC.innerText = 00;
    lines.innerText = 00
    white.innerText = 00;
  }
    
},0)