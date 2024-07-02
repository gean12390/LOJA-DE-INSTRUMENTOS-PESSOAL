
if (window.matchMedia('(max-width: 450px)').matches) {
    document.querySelector('.titulo').style.marginLeft  = '37vw';
    document.querySelector('.titulo').style.fontSize  = '35px';
    document.querySelector('.titulo').style.textDecoration = 'underline';
    document.querySelector('.titulo').innerHTML = 'TMSB';

} else {
    document.querySelector('.titulo').innerHTML = 'Thunderstrike Music Store Brazil';
}

