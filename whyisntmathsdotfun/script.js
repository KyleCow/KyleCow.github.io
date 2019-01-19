let ans;
let v;
let n1;
let n2;
let q;
let c;
let d = 1;




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

  v = Math.floor(Math.random() * Math.floor(3));
  n1 = Math.floor(Math.random() * Math.floor((10**d)-1));
  n2 = Math.floor(Math.random() * Math.floor((10**d)-1));


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


function diffUp(){
    d += 1;
}

function diffDwn(){
    if(d > 1){
        d -= 1;
    }
}

document.getElementById('a').addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("s").click();
    }
});
