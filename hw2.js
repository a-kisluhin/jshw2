function age(){
	var a=document.getElementById('one').value; 
		a=parseInt(a); 
	var c;
	if (a>17) {
			c=2017-a;
			document.getElementById('two').innerHTML=c;
	}
		if (a<17) {
			c=17-a;
			document.getElementById('two').innerHTML=c;
	}
}
function number() {
	var a;
	var b;
	a=document.getElementById('three').value;
	b=document.getElementById('four').value;
		a=parseInt(a);
		b=parseInt(b);
	if (a>b) {
		alert(a);
	}
	else {
		alert(b);
	}
}

function apartment() {
	var a;
	a=document.getElementById('five').value;
	a=parseInt(a);
	if (a>=1 && a<=20) { alert('Первый подъезд'); }
		else if (a>=21 && a<=64) { alert('Второй подъезд'); }
		else if (a>=65 && a<=80) { alert('Третий подъезд'); }
			else {
				alert('Квартиры такой нет');
			}
}

var button = document.querySelector('button');
button.onclick = login;

function login() {
	var a;
	var b;
	a=document.getElementById('six').value;
	b=document.getElementById('seven').value;
		//a=parseInt(a); // это строка поэтому не нужно выполнятьт метод parseInt - вернет NaN
		//b=parseInt(b); // это строка поэтому не нужно выполнятьт метод parseInt
	if (a=='ivan' && b=='333') { alert('Добро пожаловать'); }
		else if (a=='ssss' && b=='666') { alert('Добро пожаловать'); }
		else if (a=='gibs' && b=='0000') { alert('Добро пожаловать'); }
			else {
				alert('Ошибка');
			}
}

var button = document.querySelector('button');
button.onclick = numbers;

function numbers() {
  var a;  
  var b;
  var c; 
  a = document.getElementById('eight').value;
  b = document.getElementById('nine').value;
  c = document.getElementById('ten').value;
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);
  alert(Math.max(a, b, c))

}
 

