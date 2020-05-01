const pi = 3.14159265358979323846;
let r1 = 2;
let r2 = 2;
let m1 = 2;
let m2 = 2;
let a1 = pi/2;
let a2 = 0;
let a1_v = 0;
let a2_v = 0;
let a1_a = 0;
let a2_a = 0;
let g = 9.8 / 3600;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	angleMode(RADIANS);
}

function draw(){

	let num1 = -g * (2*m1 + m2) * sin(a1);
	let num2 = -m2 * g * sin(a1 - 2*a2);
	let num3 = -2 * sin(a1 - a2) * m2;
	let num4 = (a2_v * a2_v * r2) * (a1_v * a1_v * r1 * cos(a1 - a2));
	let den = r1 * (2 * m1 + m2 - m2 * cos(2*a1 - 2*a2));
	a1_a = (num1 + num2 + num3 * num4) / den;

	num1 = 2 * sin(a1 - a2);
	num2 = a1_v * a1_v * r1 * (m1 + m2);
	num3 = g * (m1 + m2) * cos(a1);
	num4 = a2_v * a2_v * r2 * m2 * cos(a1 - a2);
	den = r2 * (2 * m1 + m2 - m2 * cos(2*a1 - 2*a2));
	a2_a = (num1 * (num2 + num3 + num4)) / den;

	background(255);
	stroke(0);
	strokeWeight(2);

	translate(width/2, height/4);

	let x1 = r1 * 100 * sin(a1);
	let y1 = r1 * 100 * cos(a1);
	line(0, 0, x1, y1);
	fill(0);

	a1_v += a1_a;
	a2_v += a2_a;
	a1 += a1_v;
	a2 += a2_v;
	a1_v += 0.0001;
	a2_v -= 0.00001;

	ellipse(x1, y1, m1*20, m1*20);
	let x2 = x1 + r2 * 100 * sin(a2);
	let y2 = y1 + r2 * 100 * cos(a2);
	line(x1, y1, x2, y2);
	fill(0);
	blob = ellipse(x2, y2, m2*20, m2*20);
	blob.fill(255, 0, 0);
}
