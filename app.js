const question = document.getElementById('question');
const punchline = document.getElementById('punchline');
const Image = document.getElementById('Image');

q.style.display='none';

function Quest() {
    q.style.display='block';
    Image.style.backgroundImage='url("sans-laugh.png")';
    Image.style.transform='scale(-1.5)';
}

function Punch() {
    punchline.style.display='block';
    Image.style.backgroundImage='url("sans-smile.png")';
    Image.style.transform='scale(1)';
}