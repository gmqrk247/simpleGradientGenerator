const body = document.getElementById('body');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const value = document.querySelector('.value');
const copyBtn = document.getElementById('copyBtn');
const topBtn = document.getElementById('topBtn');

color1.addEventListener('input', setBgClr);
color2.addEventListener('input', setBgClr);
copyBtn.addEventListener('click', copyBgClr);
topBtn.addEventListener('click', setBgTop)

function setBgClr() {
	body.style.background =
		'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
	value.textContent = body.style.background + ';';
}

function setBgTop() {
	body.style.background =
		'linear-gradient(' + color1.value + ', ' + color2.value + ')';
	value.textContent = body.style.background + ';';
}

copyBtn.innerText = 'Copy';

function copyBgClr() {
	navigator.clipboard.writeText(value.textContent);
	copyBtn.innerText = 'Copied';
	setTimeout(() => (copyBtn.innerText = 'Copy'), 2000);
	if (value.textContent === '') {
		alert('Please, set your colors first');
	}
}
