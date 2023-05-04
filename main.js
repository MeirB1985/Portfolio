let abosec = document.getElementById("abosec");
let prosec = document.getElementById('prosec');
let skisec = document.getElementById('skisec');
let consec = document.getElementById('consec');

let abopg = document.getElementById('abopg');
let propg = document.getElementById('propg');
let skipg = document.getElementById('skipg');
let conpg = document.getElementById('conpg');

function confun() {
    abosec.style.display = "none";
    prosec.style.display = "none";
    skisec.style.display = "none";
    consec.style.display = "block";
}
function resfun() {
    abosec.style.display = "block";
    prosec.style.display = "block";
    skisec.style.display = "block";
    consec.style.display = "none";
}

abopg.onclick = resfun;
propg.onclick = resfun;
skipg.onclick = resfun;
conpg.onclick = confun;

let timCt = document.getElementById('counter');

function counter() {
    let newDate = new Date();
    let proDate = new Date('2023/05/03');
    let diff = Math.floor(Math.abs(proDate.getTime() - newDate.getTime())/1000);
    timCt.innerHTML = diff;
    return diff;
}

onload = setInterval(counter, 1000);
onload = resfun;