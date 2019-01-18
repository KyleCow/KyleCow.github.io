let ans;
let v;
let n1;
let n2;
let q;
let c;




function onClick(){
  ans = document.getElementById('a').value;
  document.getElementById('a').value = '';


  if(ans == c){
    document.getElementById('q').innerHTML = 'Correct';
  } else {
    document.getElementById('q').innerHTML = 'Incorrect';
  }
  setTimeout(function(){document.getElementById('q').innerHTML = q;
  }, 300);

  a

  v = Math.floor(Math.random() * Math.floor(3));
  n1 = Math.floor(Math.random() * Math.floor(9));
  n2 = Math.floor(Math.random() * Math.floor(9));


  if(v == 0){
    q = (n1+1)+' x '+(n2+1);
    c = (n1+1) * (n2+1);
  } else if(v == 1){
    q = (n1+1)+' + '+(n2+1);
    c = (n1+1) + (n2+1);
  } else if(v == 2){
    q = (n1+1)+' - '+(n2+1);
    c = (n1+1) - (n2+1);
  }



}

function onStart(){
  document.getElementById('q').innerHTML = 'Press enter to start';
  c = '';
}


document.getElementById('a').addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("s").click();
    }
});
