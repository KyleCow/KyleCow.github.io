num = 0
document.getElementById('num').innerHTML = num
function add(){
  num = num + 1;
  nums = String(num)
  document.getElementById('num').innerHTML = nums;
}

function zero(){
  num = 0
  nums = String(num)
  document.getElementById('num').innerHTML = nums;
}

function minus(){
  num = num - 1;
  nums = String(num)
  document.getElementById('num').innerHTML = nums;
}
