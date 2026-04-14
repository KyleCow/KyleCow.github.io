/*
Complex numbers and functions of complex numbers. In complex.js we define a class Complex to have all the necessary algebra. To visualize functions of complex numbers we need in theory 4 dimensions (complex numbers are two dimensional, so input and output each need two dimensions. Instead of drawing lines for the results we use 'domain colouring' (see https://en.wikipedia.org/wiki/Domain_coloring for the explanation).

Joerg Blumtritt, https://github.com/jbenno/nyuad_decoding_nature/wiki
*/

class Complex {
  constructor(a, b) {
    this.re = a;
    this.im = b;
  }
  
  addc(c) {
    // adds two complex numbers
    const re = this.re + c.re;
    const im = this.im + c.im;
    return new Complex(re, im);
  }
  subc(c) {
    // adds two complex numbers
    const re = this.re - c.re;
    const im = this.im - c.im;
    return new Complex(re, im);
  }
  
  multc(c) {
    // multiplies two complex numbers
    const re = this.re * c.re - this.im * c.im;
    const im = this.re * c.im + this.im * c.re;
    return new Complex(re, im);
  }
  
  mults(x) {
    // multiplies a complex number with a scalar
    const re = x * this.re;
    const im = x * this.im;
    return new Complex(re,im);
  }

  
  absc() {
    // the absolute (scalar) value of a complex number
    let a;
    const re = this.re;
    const im = this.im;
    a = sqrt((re)**2 + (im)**2);
    return a;
  }
  



  prnt(){
    if(this.im == 0){
      return(str(this.re))
    }
    if(this.re == 0){
      return(str(this.im) + "i")
    }
    if(this.im < 0){
      return(str(this.re.toFixed(10)) +"-" + str(-this.im.toFixed(10))+"i")
    }
    return(str(this.re.toFixed(10)) +"+" + str(this.im.toFixed(10))+"i")
  }
  
   argc() { //returns the angle of the complex number
      let theta = 0;
      const re = this.re;
      const im = this.im;    
      const ab = this.absc();
    
      if (im !=0 || re > 0) {
        theta = 2* atan(im/(ab+re));
      } else if (re < 0 && im ==0) {
        theta = PI;
        } else {
        theta = 0;
      }
      if (theta >= 0) {
          return theta;
        } else {
          theta = 2*PI+theta;
          return theta;
        }
    }
  
}

// complex exponential
function expc(z) {
  let r = z.re;
  let i = z.im;
  let expcx = new Complex(cos(i),sin(i));
  expcx = expcx.mults(exp(r));
  return expcx;
}

function lnc(z){
  let i = new Complex(0,1)
  if(z.absc() == 0){
    let ln = new Complex(Infinity, 0);
    return ln
  }
  let realbit = log(z.absc())
  let complexbit = z.argc() 
  let ln = new Complex(realbit, complexbit);
  return ln;
}
