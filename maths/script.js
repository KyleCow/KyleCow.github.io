var solution =  0
var f, m, a, sd1, sd2, hyp, x1, y1, x2, y2, midx, midy, sides, r;
function noInput(variable) {
    if (typeof variable == 'undefined' || variable == '' || variable == null || isNaN(variable)) {
        return true;
    } else {
        return false;
    }
}
function sqrt(n){
    return Math.sqrt(n);
}
function newtonSecond() {
    var solution;
    f = document.getElementById('Force').value;
    m = document.getElementById('Mass').value;
    a = document.getElementById('Acceleration').value;
    if(noInput(f)){
        var solution =  m*a;
        document.getElementById('newt-output').innerHTML = solution;
        console.log('Acceleration = ' + solution);
    } else if(noInput(m)){
        var solution = f/a;
        document.getElementById('newt-output').innerHTML = solution;
        console.log('Mass = ' + solution);
    } else if(noInput(a)){
        var solution = f/m;
        document.getElementById('newt-output').innerHTML = solution;
        console.log('Acceleration = ' + solution);
    } else {
        console.log('An Error Occured');
        document.getElementById('newt-output').innerHTML = 'An Error Occured';
    }
    document.getElementById('newt-output').innerHTML = solution;
}
function pythagoras(){
    var solution;
    sd1 = document.getElementById('sd1').value;
    sd2 = document.getElementById('sd2').value;
    hyp = document.getElementById('hyp').value;
    if(noInput(hyp)|| isNaN(hyp)){
        solution = sqrt((sd1*sd1)+(sd2*sd2));
        document.getElementById('pyth-output').innerHTML = solution;
        console.log('Hypotenuse = ' + solution);
    } else if(noInput(sd1)|| isNaN(sd1)){
        solution = sqrt((parseInt(hyp)*parseInt(hyp))-(parseInt(sd2)*parseInt(sd2)));
        document.getElementById('pyth-output').innerHTML = solution;
        console.log('Side 1 = ' + solution);
        if(hyp < sd1 || hyp < sd2){
            document.getElementById('pyth-output').innerHTML = 'An Error Occured';
            console.log('Hyp has to be bigger than the Sides')
        }
    } else if(noInput(sd2)|| isNaN(sd2)){
        solution = sqrt((parseInt(hyp)*parseInt(hyp))-(parseInt(sd1)*parseInt(sd1)));
        document.getElementById('pyth-output').innerHTML = solution;
        console.log('Side 2 = ' + solution);
        if(hyp < sd1 || hyp < sd2){
            document.getElementById('pyth-output').innerHTML = 'An Error Occured';
            console.log('Hyp has to be bigger than the Sides')
        }
    } else {
        console.log('An Error Occured');
        document.getElementById('pyth-output').innerHTML = 'An Error Occured';
    }
}
function lineLength(){
    var solution;
    x1 = document.getElementById('x1').value;
    y1 = document.getElementById('y1').value;
    x2 = document.getElementById('x2').value;
    y2 = document.getElementById('y2').value;
    solution = sqrt(((y1-y2)*(y1-y2))+((x1-x2)*(x1-x2)));
    console.log('Line = ' + solution)
    if(noInput(x1)||noInput(y1)||noInput(x2)||noInput(y2)){
        document.getElementById('linear-output').innerHTML = 'An Error Occured';
    }
    document.getElementById('linear-output').innerHTML = solution;
}
function midpoint(){
    var solution;
    x1 = document.getElementById('x1').value;
    y1 = document.getElementById('y1').value;
    x2 = document.getElementById('x2').value;
    y2 = document.getElementById('y2').value;
    x1 = parseInt(x1);
    y1 = parseInt(y1);
    x2 = parseInt(x2);
    y2 = parseInt(y2);
    midx = ((parseInt(x1)+parseInt(x2))/2);
    midy = ((parseInt(y1)+parseInt(y2))/2);
    solution = '(' + midx +' , ' + midy + ')';
    console.log('Midpoint = ' + solution)
    if(noInput(x1)||noInput(y1)||noInput(x2)||noInput(y2)){
        document.getElementById('linear-output').innerHTML = 'An Error Occured';
    }
    document.getElementById('linear-output').innerHTML = solution;
}
function gradient(){
    var solution;
    x1 = document.getElementById('x1').value;
    y1 = document.getElementById('y1').value;
    x2 = document.getElementById('x2').value;
    y2 = document.getElementById('y2').value;
    solution = (parseInt(y1)-parseInt(y2))/(parseInt(x1)-parseInt(x2))
    console.log('Gradient = ' + solution)
    if(noInput(x1)||noInput(y1)||noInput(x2)||noInput(y2)){
        document.getElementById('linear-output').innerHTML = 'An Error Occured';
    }
    document.getElementById('linear-output').innerHTML = solution;
    return(solution)
}
function yIntercept(){
    var solution;
    var grad;
    x1 = document.getElementById('x1').value;
    y1 = document.getElementById('y1').value;
    x2 = document.getElementById('x2').value;
    y2 = document.getElementById('y2').value;
    grad = (parseInt(y1)-parseInt(y2))/(parseInt(x1)-parseInt(x2))
    solution = y1 - (x1 * grad);
    if(noInput(x1)||noInput(y1)||noInput(x2)||noInput(y2)){
        document.getElementById('linear-output').innerHTML = 'An Error Occured';
    }
    document.getElementById('linear-output').innerHTML = solution;
    return(solution)
}

function LinEquasion(){
    var solution;
    var grad;
    var yIn;
    grad = gradient();
    yIn = yIntercept();
    solution = grad+'x + '+yIn;
    document.getElementById('linear-output').innerHTML = solution;
}

function polygonAngle(){
    var solution;
    sides = document.getElementById('sides').value;
    solution = ((sides - 2) * 180)/sides
    if(noInput(sides)){
        document.getElementById('poly-output').innerHTML = 'An Error Occured';
    }
    document.getElementById('poly-output').innerHTML = solution;
}
function polygonSum(){
    var solution;
    sides = document.getElementById('sides').value;
    solution = (sides - 2) * 180;
    if(noInput(sides)){
        document.getElementById('poly-output').innerHTML = 'An Error Occured';
    }
    document.getElementById('poly-output').innerHTML = solution;
}
function polygonEx(){
    var solution;
    sides = document.getElementById('sides').value;
    solution = 360/(((sides - 2) * 180)/sides);
    if(noInput(sides)){
        document.getElementById('poly-output').innerHTML = 'An Error Occured';
    }
    document.getElementById('poly-output').innerHTML = solution;
}
function polygonExSum(){
    var solution;
    solution = 360;
    if(noInput(sides)){
        document.getElementById('poly-output').innerHTML = 'An Error Occured';
    }
    document.getElementById('poly-output').innerHTML = solution;
}
function circleArea(){
  var solution;
  var rsqr;
  var num;
  var topi;
  r = document.getElementById('radius').value;
  rsqr = r * r;
  topi = rsqr + "π"
  num = (r * r) * 3.141592653535897932384626;
  solution = topi+'( ≈'+num+')';
  if(noInput(r)){
      document.getElementById('circleA-output').innerHTML = 'An Error Occured';
  }
  document.getElementById('circleA-output').innerHTML = solution;
}
function circleCirc(){
  var solution;
  var num;
  var topi;
  r = document.getElementById('radius').value;
  num = (r * 2) * 3.1415926535897932384626;
  topi = (r * 2) + 'π';
  solution = topi + '( ≈' + num + ')';
  if(noInput(r)){
      document.getElementById('circleA-output').innerHTML = 'An Error Occured';
  }
  document.getElementById('circleA-output').innerHTML = solution;
}
function solP(){
  var solutionP;
  var a;
  var b;
  var c;
  a = document.getElementById('a').value;
  b = document.getElementById('b').value;
  c = document.getElementById('c').value;

if(noInput(a)){
    a = 1;
          }
          if(noInput(a)){
    b = 0
          }
          if(noInput(a)){
    c = 0;
          }

  solutionP = (b * b) - (4 * a * c);
  if(solutionP < 0){
    solutionP = 0 - solutionP;
    solutionP = sqrt(solutionP);
    solutionP =  (0 - b) + solutionP;
    solutionP = solutionP / 2 * a;
    solutionP = solutionP + 'i';
  } else {
    solutionP = sqrt(solutionP);
    solutionP =  (0 - b) + solutionP;
    solutionP = solutionP / 2 * a;
  }

  return (solutionP);
}
function solM(){
  var solutionM;
  var a;
  var b;
  var c;
  a = document.getElementById('a').value;
  b = document.getElementById('b').value;
  c = document.getElementById('c').value;

  if(noInput(a)){
    a = 1;
             }
             if(noInput(a)){
    b = 0
              }
              if(noInput(a)){
    c = 0;
            }
  solutionM = (b * b) - (4 * a * c);
  if(solutionM < 0){
    solutionM = (0 - b) - solutionM;
    solutionM = sqrt(solutionM);
    solutionM =  (0 - b) - solutionM;
    solutionM = solutionM/ 2 * a;
    solutionM= solutionM + 'i';
  } else {
    solutionM= sqrt(solutionM);
    solutionM=  (0 - b) - solutionM
    solutionM= solutionM/ 2 * a;
  }

  console.log(solutionM);

  return (solutionM);
}
function quadratic(){
        var solm;
  var solp;

  solp = solP();
  solm = solM();


  solution = 'x = ' + solp + ' , ' + solm;

  console.log(solution);

  document.getElementById('quad-output').innerHTML = solution;

      }
function factorise(){
  var solp = solP();
  var solm = solM();
  var a;
  var x2;
  var x3;

  x3 = 'x'
  x2 = 'x';
  solp = solP();
  solm = solM();
  a = document.getElementById('a').value;

  if(noInput(a)){
    a = 1;
          }
  if(solp % a == 0){
    solp = solp/a;
  } else {
    x3 = a + x3;
  }

  if(solm % a == 0){
    solm = solm/a;
  } else {
    x2 = a + x2;
  }

  solution = '(' + x2 + '+' + solm + ')' + '(' + x3 + '+' + solp + ')'

  document.getElementById('quad-output').innerHTML = solution;

}
function gravity(){
  var m1 = document.getElementById('m1').value;
  var m2 = document.getElementById('m2').value;
  var r = document.getElementById('gravR').value;
  var soulution;

  solution = 6.67 * 10e-11 * m1 * m2;
  solution = solution / (r*r);

  document.getElementById('grav-output').innerHTML = solution;
}
function halfLife(){
  var hl = document.getElementById('hl').value;
  var time = document.getElementById('time').value;
  var b = document.getElementById('beginning').value;
  var e = document.getElementById('end').value;
  var soulution;

  if(noInput(hl)){
    solution = b/e;
    solution = Math.log2(solution);
    solution = time/solution;
  }else if(noInput(time)){
    solution = b/e;
    solution = Math.log2(solution);
    solution = hl * solution;
  }else if(noInput(b)){
    solution = time/hl;
    solution = Math.pow(2, solution);
    solution = e * solution;
  }else if(noInput(e)){
    solution = time/hl;
    solution = Math.pow(2, solution);
    solution = b/solution;
  }else{
    solution = 'an error occured'
  }
  document.getElementById('hl-output').innerHTML = solution;
}
function basicMotion(){
  var v1 = document.getElementById('vl').value;
  var v2 = document.getElementById('v2').value;
  v1 = number(v1);
  v2 = number(v2);
  solution = v1 + v2;
  document.getElementById('rel-output').innerHTML = solution;
}
function trueMotion(){
  var v1 = document.getElementById('vl').value;
  var v2 = document.getElementById('v2').value;
  v1 = number(v1);
  v2 = number(v2);
  var c = 299792458*299792458;

  solution = 1 + ((v1 * v2)/c);
  solution = (v1 + v2) / solution;

  document.getElementById('rel-output').innerHTML = solution;
}
