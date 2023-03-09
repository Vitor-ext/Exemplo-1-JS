const on = document.getElementById ('on');
const off = document.getElementById ('off');
const lamp1 = document.getElementById ('lamp1');
const lamp2 = document.getElementById ('lamp2');
const lamp3 = document.getElementById ('lamp3');
const txt = document.getElementById ( 'txt' );


function lampOn () {
    lamp1.src = 'img/lam-on.png';
    lamp2.src = "img/lam-on.png";
    lamp3.src = "img/lam-on.png";

    txt.style.color = '#FFF';
}

function lampOff () {
    lamp1.src = "img/lam-off.png";
    lamp2.src = "img/lam-off.png";
    lamp3.src = "img/lam-off.png";

    txt.style.color = '#000';
}

on.addEventListener ( 'click', lampOn);

off.addEventListener ( 'click', lampOff);