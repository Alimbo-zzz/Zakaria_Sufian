const btn = document.querySelector('button');
const circle = document.querySelector('div');



function clickBtn() {
	circle.classList.toggle('active');
	console.log(circle.textContent);
	if (circle.textContent == 'круг') circle.textContent = 'квадрат';
	else circle.textContent = 'круг';

}


btn.onclick = clickBtn;

