var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

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
    solution = 180-(((sides - 2) * 180)/sides)
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
  v1 = Number(v1);
  v2 = Number(v2);

  solution = v1 + v2;

  document.getElementById('rel-output').innerHTML = solution;
}
function trueMotion(){
  var v1 = document.getElementById('vl').value;
  var v2 = document.getElementById('v2').value;
  var c = 299792458*299792458;
  v1 = Number(v1);
  v2 = Number(v2);

  solution = v1 * v2;
  solution = solution/c;
  solution = 1 + solution;
  solution = (v1 + v2) / solution;

  document.getElementById('rel-output').innerHTML = solution;
}
/*
function suvat(){
  var s = document.getElementById('s').value;
  var u = document.getElementById('u').value;
  var v = document.getElementById('v').value;
  var a = document.getElementById('a').value;
  var t = document.getElementById('t').value;
  if(noInput(s)){
    if(noInput(u)){
    } else if(noInput(v)){
    } else if(noInput(a)){
    } else if(noInput(t)){
    }
  } else if(noInput(u)){
    if(noInput(s)){
    } else if(noInput(v)){
    } else if(noInput(a)){
    } else if(noInput(t)){
    }
  } else if(noInput(v)){
    if(noInput(s)){
    } else if(noInput(u)){
    } else if(noInput(a)){
    } else if(noInput(t)){
    }
  } else if(noInput(a)){
    if(noInput(s)){
    } else if(noInput(u)){
    } else if(noInput(v)){
    } else if(noInput(t)){
    }
  } else if(noInput(t)){
    if(noInput(s)){
    } else if(noInput(u)){
    } else if(noInput(v)){
    } else if(noInput(a)){
    }
  }
  */
function gamma(){
  var v = document.getElementById('gammav').value;
  var solution;
  var c = 299792458;

  solution = (v*v)/(c*c);
  solution = 1 - solution;
  solution = sqrt(solution);
  solution = 1/solution;

  document.getElementById('gamma-output').innerHTML = solution;
}
function emc(){
  var e = document.getElementById('emcE').value;
  var m = document.getElementById('emcM').value;
  var c = 299792458;
  var solution;

  if(noInput(e)){
    solution = m * (c*c)
  } else if(noInput(m)){
    solution = e / (c*c)
  } else {
    solution = 'an error occured'
  }

  document.getElementById('emc-output').innerHTML = solution;
}
function planet(){
  var m = document.getElementById('planM').value;
  var r = document.getElementById('planR').value;
  var a = document.getElementById('planA').value;
  var g = 6.67408 * Math.pow(10,-11);
  var solution;

  if(noInput(a)){
    solution = r*r;
    solution = m/solution;
    solution = g*solution;
  } else if(noInput(r)){
    solution = g*m;
    solution = solution/a;
    solution = sqrt(solution);
  } else if(noInput(m)){
    solution = d*d;
    solution = a*solution;
    solution = solution/g;
  }

  document.getElementById('plan-output').innerHTML = solution;
}
function sInt(){
  var a = document.getElementById('divA').value;
  var b = document.getElementById('divB').value;
  var solution;
  var solution1;
  var solution2;

  solution1 = a/(b+1);
  solution2 = b+1;
  solution = String(solution1)+'x^'+String(solution2);

  console.log(solution);

  document.getElementById('int-output').innerHTML = solution;
}
function sDiv(){
  var a = document.getElementById('divA').value;
  var b = document.getElementById('divB').value;
  var solution;
  var solution1;
  var solution2;

  solution1 = a*b;
  solution2 = b-1;
  solution = String(solution1)+'x^'+String(solution2);

  console.log(solution);

  document.getElementById('int-output').innerHTML = solution;
}
function pH(){
  var ph = document.getElementById('ph').value;
  var h = document.getElementById('h').value;
  var solution;

  if(noInput(ph)){
    solution = 0-Math.log10(h)
  } else if(noInput(h)){
    solution = Math.pow(10,(0-ph))
  }

  document.getElementById('pH-output').innerHTML = solution;
}
function blackHole(){
  var p = document.getElementById('ρ').value;
  var r = document.getElementById('sR').value;
  var solution;
  var g = 6.67408 * Math.pow(10,-11);
  var c = 299792458;
  var pi = 3.141592653535897932384626

  if(noInput(r)){
    solution = c/(Math.sqrt((8/3)*g*p*pi))
  } else if(noInput(p)){
    solution = (c*c)/((8/3)*g*pi*(r*r))
  }

  document.getElementById('black-output').innerHTML = solution;
}
function trajectoryDis(){
  var t = document.getElementById('tAng').value;
  var v = document.getElementById('tV').value;
  var solution;
  var g = 9.807;

  t = (Math.PI/180)*t;

  solution = (2*(v*v)*Math.sin(t)*Math.cos(t))/g;

  document.getElementById('traj-output').innerHTML = solution;
}
function trajectoryEqn(){
  var t = document.getElementById('tAng').value;
  var v = document.getElementById('tV').value;
  var solution;
  var g = 9.807;

  t = (Math.PI/180)*t;

  solution = Math.tan(t)+'x'+(-g/(2*(v*v)*(Math.cos(t)*Math.cos(t))))+'x^2';

  document.getElementById('traj-output').innerHTML = solution;
}
function sinRule(){
  var a = document.getElementById('sina').value;
  var b = document.getElementById('sinb').value;
  var A = document.getElementById('sinA').value;
  var B = document.getElementById('sinB').value;
  var solution;

  A = (Math.PI/180)*A;
  B = (Math.PI/180)*B;

  if (noInput(a)){
    solution = (b*Math.sin(A))/(Math.sin(B));
  } else if (noInput(b)){
    solution = (a*Math.sin(B))/(Math.sin(A));
  } else if (noInput(A)){
    solution = Math.asin((a*Math.sin(B))/b);
  } else if (noInput(B)){
    solution = Math.asin((b*Math.sin(A))/a)*180/Math.PI;
  }

  document.getElementById('sinR-output').innerHTML = solution;
}
function cosRule(){
  var a = document.getElementById('cosa').value;
  var b = document.getElementById('cosb').value;
  var c = document.getElementById('cosc').value;
  var A = document.getElementById('cosA').value;
  var solution;

  A = (Math.PI/180)*A;

  if (noInput(a)){
    solution = Math.sqrt((b*b)+(c*c)-(2*b*c*Math.cos(A)))
  } else if (noInput(b)){
    solution = c*Math.cos(A)+Math.sqrt((c*c)*(Math.cos(A)*Math.cos(A)-(a*a)-(c*c)))
  } else if (noInput(c)){
    solution = b*Math.cos(A)+Math.sqrt((b*b)*(Math.cos(A)*Math.cos(A)-(a*a)-(b*b)))
  } else if (noInput(A)){
    solution = Math.acos((((b*b)+(c*c)-(a*a))/(2*b*c)))*180/Math.PI
  }

  document.getElementById('cosR-output').innerHTML = solution;
}
