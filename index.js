const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
 console.log(event.target);

const backgroundColor = event.target.style.backgroundColor;

if (backgroundColor === 'salmon') {
event.target.style.backgroundColor = 'green';
} else {
event.target.style.backgroundColor = 'salmon';
}
});