function length_list_to_pattern(X) {
  let string = "Start with ".concat(X[0]," chain stitches, connect with ss to make a loop (",X[0],") \n");
  for (let i = 0; i < X.length-1; i++) {
    let num_increases = X[i + (1 % X.length)] - X[i];
    let num_stitches = X[i];
    string = string.concat("R", i + 1, ": ");
    if (num_increases > 0) {
      let section_size = int(Math.floor(num_stitches / num_increases));
      let dupe = "";
      if (section_size == 1) {
        dupe = "inc";
      } else if (section_size == 2) {
        dupe = "[dc, inc]";
      } else {
        dupe = "[".concat(section_size - 1, "dc, inc]");
      }
      if (num_increases == 1) {
        string = string.concat(section_size - 1, "dc, inc ");
      } else {
        string = string.concat(num_increases, "x", dupe);
      }
      if (num_stitches - section_size * num_increases == 0) {
        1;
      } else {
        string = string.concat(", ", num_stitches - section_size * num_increases, "dc");
      }
      //  print("R",i+1,": ",int(num_increases),"x [",section_size-1,"dc, inc], ", int(num_stitches-section_size*num_increases),"dc")}
    } else if (num_increases < 0) {
      num_increases *= -1;
      let section_size = int(Math.floor(num_stitches / num_increases));
      let dupe = "";
      if (section_size == 1) {
        dupe = "dec";
      } else if (section_size == 2) {
        dupe = "[dc, dec]";
      } else {
        dupe = "[".concat(section_size - 1, "dc, dec]");
      }
      if (num_increases == 1) {
        string = string.concat(section_size - 1, "dc, dec");
      } else {
        string = string.concat(num_increases, "x", dupe);
      }
      if (num_stitches - section_size * num_increases == 0) {
        string = string;
      } else {
        string = string.concat(
          ", ",
          num_stitches - section_size * num_increases,
          "dc"
        );
        //  print("R",i+1,": ",int(num_increases),"x [",section_size-1,"dc, inc], ", int(num_stitches-section_size*num_increases),"dc")
      }
    } else {
      string = string.concat(X[i], "dc");
    }
    string = string.concat(" (",X[i+1],") \n");
  }
  string = string.concat("Finish off by sewing start loop and end loop together")
  return string;
}
// print("Measurements are given in # of stitches, can be decimal")

// r =  float(input("minor radius  : "))
// R0 = float(input("inner radius  : "))

function int(x) {
  return x;
}

function makeArr(startValue, stopValue, cardinality) {
  var arr = [];
  var step = (stopValue - startValue) / (cardinality - 1);
  for (var i = 0; i < cardinality; i++) {
    arr.push(startValue + step * i);
  }
  return arr;
}


document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    run();
  });
});

function run(){
  const rval = document.getElementById('r');
  const R0val = document.getElementById('R0');
  const r =  parseFloat(rval.value)
  const R0 = parseFloat(R0val.value)
  
  // const r = 4
  // const R0 = 3
console.log(r,R0)
  let n = Math.round(2 * Math.PI * r);
  let R = R0 + r;

  let theta = makeArr(0, 2 * Math.PI, n);

  let X = [];

  for (i = 0; i < theta.length; i++) {
    X[i] = Math.round(2 * Math.PI * (R - r * Math.cos(theta[i])));
  }
  
  const output = length_list_to_pattern(X)
  
  console.log(length_list_to_pattern(X));
  document.getElementById("output").innerText = output;
}
// print(length_list_to_pattern(X))
