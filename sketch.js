var date = new Date();
var target = new Date();
target.setDate(03);
target.setMonth(00);
target.setYear(2019);
target.setHours(00);
target.setMinutes(00);
target.setSeconds(00);
var h,m,s,t;
var aspect_ratio;
var display1,display2,display3,display4,display5,display6,display7,display8,display9;
const _MS_PER_DAY = 1000*60*60*24;
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	aspect_ratio = windowWidth/360;
	aspect_ratio = aspect_ratio/4;
	display7 = new DISPLAY(400,60,aspect_ratio);
	display8 = new DISPLAY(600,60,aspect_ratio);
	display9 = new DISPLAY(800,60,aspect_ratio);
	display1 = new DISPLAY(60,440,aspect_ratio);
	display2 = new DISPLAY(260,440,aspect_ratio);
	display3 = new DISPLAY(520,440,aspect_ratio);
	display4 = new DISPLAY(720,440,aspect_ratio);
	display5 = new DISPLAY(980,440,aspect_ratio);
	display6 = new DISPLAY(1180,440,aspect_ratio);
	display1.segments();
	display2.segments();
	display3.segments();
	display4.segments();
	display5.segments();
	display6.segments();
	display5.segments();
	display7.segments();
	display8.segments();
	display9.segments();
}
function draw(){
	date = new Date();
	t = target - date;
	var temp = t/_MS_PER_DAY;
	t = Math.floor(temp);
	temp = (temp - t)*24;
	h = Math.floor(temp);
	temp = (temp - h)*60;
	m = Math.floor(temp);
	temp = (temp - m)*60;
	s = Math.floor(temp);
	t = t.toString();
	h = h.toString();
	m = m.toString();
	s = s.toString();
	while(h.length < 2){
		h = "0" + h;
	}
	while(m.length < 2){
		m = "0" + m;
	}
	while(s.length < 2){
		s = "0" + s;
	}
	while(t.length < 3){
		t = "0" + t;
	}
	background(0);
	display1.display_module(to_binary(h[0],4));
	display1.segments();
	display2.display_module(to_binary(h[1],4));
	display2.segments();
	display3.display_module(to_binary(m[0],4));
	display3.segments();
	display4.display_module(to_binary(m[1],4));
	display4.segments();
	display5.display_module(to_binary(s[0],4));
	display5.segments();
	display6.display_module(to_binary(s[1],4));
	display6.segments();
	display7.display_module(to_binary(t[0],4));
	display7.segments();
	display8.display_module(to_binary(t[1],4));
	display8.segments();
	display9.display_module(to_binary(t[2],4));
	display9.segments();
	fill(255,100,100);
	textSize(50);
	text("sai",32,100);
}
// let val = -1;
//
// 	var timer = setInterval(function(){
// 		if(val == 9){
// 			clearInterval(timer);
// 		}else{
// 			val+=1;
// 			background(51);
// 			num = to_binary(val,4);
// 			display1.display_module(num);
// 			display1.segments();
// 			display2.display_module(num);
// 			display2.segments();
//
// 		}
// 	},1000);
