const r = document.querySelector(':root');
const dmToggle = document.getElementById('dmToggle');
let dm = false;

function dark() {
    dm = true;
    r.style.setProperty('--bg', '#04040c');
    r.style.setProperty('--color', '#eaeaea');
    r.style.setProperty('--hover', '#3c3c3c');
    dmToggle.src = './media/sun.svg';
}

function light() {
    dm = false;
    r.style.setProperty('--bg', '#eaeaea');
    r.style.setProperty('--color', '#04040c');
    r.style.setProperty('--hover', '#dcdcdc');
    dmToggle.src = './media/moon.svg';
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    dark();
} else {
    light();
}

dmToggle.addEventListener('click', function() {
    if (dm) {
        light();
    } else {
        dark();
    }
})