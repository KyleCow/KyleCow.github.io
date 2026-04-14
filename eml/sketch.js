let input = "EE1EE111EEE1EE1E1EE1111E111"
let r1 = 89
let r2 = 89
let r3 = 89

function setup() {
  font = loadFont('LLPIXEL3.ttf');
  textFont(font);
  textSize(36);
  createCanvas(800, 800);

  textWrap(CHAR)
  rectMode(CORNERS)
}

function add_E(){
  input = input + "E"
}
function add_1(){
  input = input + "1"
}
function rem(){
  if(input.length > 0){
    input = input.substring(0, input.length - 1)
  }
}

function eml(x,y) {
  return(exp(x) - log(y))
}

function draw() {
  background(70, 102, 59);
  // print(input)
  translate(width/2, height/2)
  let equation = arr_to_eqn(input.split(""))
  // print(equation, input)
  // print("eml(eml(1,eml(eml(1,1),1)),eml(eml(eml(1,eml(eml(1,eml(1,eml(eml(1,1),1))),1)),eml(1,1)),1))EE1EE111EEE1EE1E1EE1111E111")
  textAlign(LEFT)
  text(equation, width/40-width/2, height/15-height/2, width-width/20)
  textAlign(CENTER)
  try {
    if(str(eval(equation)).slice(0,1) != "f"){
       text(str(eval(equation)), 0, height/6)
    } else {
      text("Invalid Equation", 0, height/6)
    }
  } catch (error) {
    text("Invalid Equation", 0, height/6)
  }
  fill(70, 102, 59)
  rect(-width,height/4-height/20, width,height)
  noStroke()
  fill(43, r1, 38)
  rect(-width/2+width/10,height/4,-width/2+width/10+width/3,height/4+height/6)
  fill(43, r2, 38)
  rect(width/2-width/10,height/4,width/2-width/10-width/3,height/4+height/6)
  fill(43, r3, 38)
  rect(-width/20,height/4,width/20,height/4+height/6)
  fill(0)
  r1 = 89
  r2 = 89
  r3 = 89
  text("eml", -width/2+width/10+width/6, height/12+height/4 )
  text("1", width/2-width/10-width/6, height/12+height/4 )
  text("del", 0, height/12+height/4 )
}

function inBox(a,b,x1,y1,x2,y2){
  return(a<=max(x1,x2) && a>=min(x1,x2) && b<=max(y1,y2) && b>=min(y1,y2))
}

function mousePressed() {
  if(inBox(mouseX-width/2,mouseY-height/2, -width/2+width/10,height/4,-width/2+width/10+width/3,height/4+height/6)){
    add_E()
    r1 = 120
  }
  if(inBox(mouseX-width/2,mouseY-height/2, width/2-width/10,height/4,width/2-width/10-width/3,height/4+height/6)){
    add_1()
    r2 = 120
  }
  if(inBox(mouseX-width/2,mouseY-height/2, -width/20,height/4,width/20,height/4+height/6)){
    rem()
    r3 = 120
  }
  
}

function arr_to_eqn(A) {
  let output = ""
  let array = []
  for(let i = 0; i < A.length; i++){
    let last_char = output.substr(output.length - 1);
    if(A[i] == "E"){
      output = output + "eml("
      array = array.concat(["o"])
    }
    if(A[i] == "1" && last_char == "("){
      output = output + "1,"
      array[array.length - 1] = "m"
    }
    if(A[i] == "1" && last_char == ","){
      output = output + "1"
//       This was a while loop but that caused bugs so put in a for loop, array.length+3 is a stupid but fine upper bound
      for(let k = 0; k < array.length+3; k++){
        if(array[array.length - 1] == "m"){
          output = output + ")"
          array.pop();
        }
      }
      output = output + ","
      array[array.length - 1] = "m"
    }
  }
  return(output.substring(0, output.length-1))
}


function depth(str){
  return str.split("(").length  - str.split(")").length
}

function num_ready(str){
  return str.split(",").length  - str.split(")").length
}

function checkThat(expression, message) {
  if (!expression) {
    throw new Error(message);
  }
}
