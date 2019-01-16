let x1 = 1200;
let y1 = 200;
let x2 = 600;
let y2 = 200;

let m1 = 10000;
let m2 = 1;

let v1 = 1;
let v2 = 0;

let v1o;
let v2o;

let hit = 0;

let n;

let slider;

function setup(){

    createCanvas(1300,600);
    slider = createSlider(0.5, 100, 1);
    slider.position(1150, 10);
    slider.style('width', '140px');

    mass1 = createSlider(0, 4, 1, 0.1);
    mass1.position(1150, 580);
    mass1.style('width', '140px');

    mass2 = createSlider(0, 4, 1, 0.1);
    mass2.position(1000, 580);
    mass2.style('width', '140px');

}


function draw(){
    m1 = 10**mass1.value();
    m2 = 10**mass2.value();
    n = slider.value();
    y1 = 600/2 - 50*Math.log10(m1+1)
    y2 = 600/2 - 50*Math.log10(m2+1)

    clear();

    stroke(255);
    background(51);
    text('Slomo Slider' ,1210, 35);
    text('Mass1 Slider' ,1190, 565);
    text('Mass2 Slider' ,1040, 565);

    text(String(hit), 30, 30)
    strokeWeight(1);
    noFill();
    rect(x1,y1,100*Math.log10(m1+1),100*Math.log10(m1+1));
    text('Mass = '+m1, x1, y1-10);
    rect(x2,y2,100*Math.log10(m2+1),100*Math.log10(m2+1));
    text('Mass = '+m2, x2, y2-10);
    line(10, 0, 10, 1200);

    if (abs(x1-x2)-(100*Math.log10(m2+1))<= 0){
        v2o = (2*m1*v1/(m1+m2))-(v2*(m1-m2)/(m1+m2));
        v1o = ((m1-m2)*v1/(m1+m2))+(2*m2*v2/(m1+m2));
        hit += 1;
    } else {
        v1o = v1;
        v2o = v2;
    }

    v1 = v1o;
    v2 = v2o;

    if (x1 <= 10){
        v1 = 0 - v1;
        hit += 1;
    }

    if (x2 <= 10){
        v2 = 0 - v2;
        hit += 1;
    }

    x1 -= v1/n;
    x2 -= v2/n;

}
