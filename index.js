var input = document.getElementById("inputs");
var output = document.getElementById("outputs");
var translate_btn = document.getElementById("translate");

function translate(){
    var lines = input.value.split('\n');
    var result='';
    for(var i=0; i<lines.length; i++){
        var line='';
        for(var s=lines[i].length-1; s>=0; s--){
            line+=lines[i][s];
        }
        console.log(line);
        result+=line+"\n";
    }
    output.innerHTML = result;
}

translate_btn.addEventListener("click",translate);