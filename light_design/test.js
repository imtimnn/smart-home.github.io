let device_stt = document.getElementById('status');
let num_device_stt = 0;
device_stt.onclick = function(){
	num_device_stt++;
	if (num_device_stt%2 == 0)	{
		device_stt.style.backgroundImage = "linear-gradient(to right,#84469b,#563996)";
	 	
	 	top_lamp.style.borderBottom = "100px solid green";
		top_lamp.style.boxShadow = "0px 40px 22px -20px gre";
	}
	else {
		
		device_stt.style.backgroundImage = "none";
		top_lamp.style.borderBottom = "100px solid #f2f2f2";
		top_lamp.style.boxShadow = "0px 40px 22px -20px #f2f2f2";
		
	}
}


let intensity = document.getElementById('intensity');
let top_lamp= document.getElementById('set_lamp');

intensity.oninput = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.opacity = intensity.value/100;}
}

let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');
let color4 = document.getElementById('color4');
let color5 = document.getElementById('color5');
let color6 = document.getElementById('color6');
let color7 = document.getElementById('color7');
let color8 = document.getElementById('color8');
let color9 = document.getElementById('color9');
let color10 = document.getElementById('color10');
let color11 = document.getElementById('color11');
let color12 = document.getElementById('color12');

color1.onclick = function(){
	if (num_device_stt%2 == 0){
	
	top_lamp.style.boxShadow = "0px 0px 8px 55px  #ef242a";
	color1.style.boxShadow = "0px 0px 10px 3px #ef242a";
	color2.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	color4.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color11.style.boxShadow = "none";
	color12.style.boxShadow = "none";}
}
color2.onclick = function(){
	if (num_device_stt%2 == 0){

	top_lamp.style.boxShadow = "0px 0px 8px 55px #ee2655";
	color2.style.boxShadow = "0px 0px 10px 3px #ee2655";
	color1.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	color4.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color11.style.boxShadow = "none";
	color12.style.boxShadow = "none";}
}
color3.onclick = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.boxShadow = "0px 0px 8px 55px #ed2891";
	color3.style.boxShadow = "0px 0px 10px 3px #ed2891";
	color2.style.boxShadow = "none";
	color1.style.boxShadow = "none";
	color4.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color11.style.boxShadow = "none";
	color12.style.boxShadow = "none";}
}
color4.onclick = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.boxShadow = "0px 0px 8px 55px #9b50a3";
	color4.style.boxShadow = "0px 0px 10px 3px #9b50a3";
	color2.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	color1.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color11.style.boxShadow = "none";
	color12.style.boxShadow = "none";}
}
color5.onclick = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.boxShadow = "0px 0px 8px 55px #4954a4";
	color5.style.boxShadow = "0px 0px 10px 3px #4954a4";
	color2.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	color4.style.boxShadow = "none";
	color1.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color11.style.boxShadow = "none";
	color12.style.boxShadow = "none";}
}
color6.onclick = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.boxShadow = "0px 0px 8px 55px #4671b6";
	color6.style.boxShadow = "0px 0px 10px 3px #4671b6";
	color2.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	color4.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color1.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color11.style.boxShadow = "none";
	color12.style.boxShadow = "none";}
}
color7.onclick = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.boxShadow = "0px 0px 8px 55px #70cdd4";
	color7.style.boxShadow = "0px 0px 10px 3px #70cdd4";
	color2.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	color4.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color1.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color11.style.boxShadow = "none";
	color12.style.boxShadow = "none";}
}
color8.onclick = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.boxShadow = "0px 0px 8px 55px green";
	color8.style.boxShadow = "0px 0px 10px 3px green";
	color2.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	color4.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color1.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color11.style.boxShadow = "none";
	color12.style.boxShadow = "none";}
}
color9.onclick = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.boxShadow = "0px 0px 8px 55px #f7f121";
	color9.style.boxShadow = "0px 0px 10px 3px #f7f121";
	color2.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	}
	color4.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color1.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color11.style.boxShadow = "none";
	color12.style.boxShadow = "none";}

color10.onclick = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.boxShadow = "0px 0px 8px 55px #f47725";
	color10.style.boxShadow = "0px 0px 10px 3px #f47725";
	color2.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	color4.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color1.style.boxShadow = "none";
	color11.style.boxShadow = "none";
	color12.style.boxShadow = "none";}
}
color11.onclick = function(){
	if (num_device_stt%2 == 0){
	top_lamp.style.boxShadow = "0px 0px 8px 55px #ec2f29";
	color11.style.boxShadow = "0px 0px 10px 3px #ec2f29";
	color2.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	color4.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color1.style.boxShadow = "none";
	color12.style.boxShadow = "none";}
}
color12.onclick = function(){
	if (num_device_stt%2 == 0){
	
	top_lamp.style.boxShadow = "0px 0px 8px 55px  #ffffff";
	color12.style.boxShadow = "0px 0px 10px 3px #ffffff";
	color2.style.boxShadow = "none";
	color3.style.boxShadow = "none";
	color4.style.boxShadow = "none";
	color5.style.boxShadow = "none";
	color6.style.boxShadow = "none";
	color7.style.boxShadow = "none";
	color8.style.boxShadow = "none";
	color9.style.boxShadow = "none";
	color10.style.boxShadow = "none";
	color1.style.boxShadow = "none";
	color11.style.boxShadow = "none";}
}