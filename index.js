
// VARIABLE OF BTN

const minusBreakTime = document.querySelector('#minus-time-break');
const addBreakTime = document.querySelector('#add-time-break');
const minusWorkTime = document.querySelector('#minus-time-work');
const addWorkTime = document.querySelector('#add-time-work');
const progressBar = document.querySelector('#progressBar');

// EVENTS BTN ADD AND MINUS 

// SET TIME

let time = new Date();
const seconds = Math.floor((time.setSeconds(59) % (1000 * 60)) / 1000);
let countSec = parseInt(seconds);
const setTime = document.querySelector('#setTime');
const minuts = setTime.innerHTML;
let defaultMinuts = parseInt(minuts - 1);
const minutBox = document.querySelector('#minut');
let countMinuts = 0;
let statusCount = 0;
const setTimeTitle = document.querySelector('.setTime-title');
const timeBreak = document.querySelector('#time-break');
let timeBreakCountBox = parseInt(timeBreak.innerHTML);
let width = 0;
let changeTime = 0;

// END SET TIME

minusBreakTime.addEventListener('click', () => {
    let totalTime = parseInt(timeBreak.innerHTML);
    if(totalTime == 1){
        return null;
    }else{
        changeTime = totalTime - 1;
        timeBreak.innerHTML = changeTime;
    }
    timeBreakCountBox = parseInt(timeBreak.innerHTML);
});

addBreakTime.addEventListener('click', () => {
    let totalTime = parseInt(timeBreak.innerHTML);
    changeTime = totalTime + 1;
    timeBreak.innerHTML = changeTime;
    timeBreakCountBox = parseInt(timeBreak.innerHTML);
});

minusWorkTime.addEventListener('click', () => {
    const timeBreak = document.querySelector('#work-time');
    let totalTime = parseInt(timeBreak.innerHTML);
    if(totalTime == 1){
        return null;
    }else{
        changeTime = totalTime - 1;
        setTime.innerHTML = changeTime;
        timeBreak.innerHTML = changeTime;
        countMinuts = parseInt(setTime.innerHTML - 1);
        statusCount++;
    }
});

addWorkTime.addEventListener('click', () => {
    const timeBreak = document.querySelector('#work-time');
    let totalTime = parseInt(timeBreak.innerHTML);
    changeTime = totalTime + 1;
    timeBreak.innerHTML = changeTime;
    setTime.innerHTML = changeTime;
    countMinuts = parseInt(setTime.innerHTML - 1);
    statusCount++;
});


// EVENTS BTN ADD AND MINUS 


//BTN START TIMER

const start = document.querySelector('#startTime');

start.addEventListener('click', () => {
    document.querySelector('#totalTime').style.display = 'block';
    setTime.style.display = 'none';
    start.style.display = 'none';
    setInterval(() => {
        Timer()
    }, 1000);
});

// END BTN START TIMER


function Timer(){
    MinutTimer();
    SecondsTimer();
}

let second = 0;
let timeBreakCount = parseInt(timeBreak.innerHTML);

// SECONDS BLOCK

function SecondsTimer(){
    const secondBox = document.querySelector('#second');
    let secondCount = countSec--;
    second = secondCount;
    if(secondCount == 0){
        countSec = seconds;
        defaultMinuts--;
        countMinuts--;
        if(defaultMinuts < 0 || countMinuts < 0){
            timeBreakCountBox--;
        }
        SecondsTimer();
    }else if(secondCount < 10){
        secondBox.innerHTML = `0${secondCount}`;
        ProgressBar();
    }else{
        secondBox.innerHTML = secondCount;
        ProgressBar();
    }
}

// MINUTS BLOCK

function MinutTimer() {
    if(statusCount == 0){
        if(defaultMinuts < 0){
            setTimeTitle.innerHTML = 'Break Time';
            if(timeBreakCountBox < 0){
                setTimeTitle.innerHTML = 'Time';
                width = 0;
                progressBar.style.width = `${width}%`;
                defaultMinuts = parseInt(setTime.innerHTML - 1);
                countMinuts = parseInt(setTime.innerHTML - 1);
                timeBreakCountBox = parseInt(timeBreak.innerHTML);
            }else{
                minutBox.innerHTML = timeBreakCountBox;
            }
        }else{
            minutBox.innerHTML = defaultMinuts;
        }
    }else{
        if(countMinuts < 0){
            setTimeTitle.innerHTML = 'Break Time';
            if(timeBreakCountBox < 0){
                setTimeTitle.innerHTML = 'Time';
                width = 0;
                progressBar.style.width = `${width}%`;
                defaultMinuts = parseInt(setTime.innerHTML - 1);
                countMinuts = parseInt(setTime.innerHTML - 1);
                timeBreakCountBox = parseInt(timeBreak.innerHTML);
            }else{
                minutBox.innerHTML = timeBreakCountBox;
            }
        }else{
            minutBox.innerHTML = countMinuts;
        }
    }  
}



// Progrssiv Bar

function ProgressBar(){
    if(statusCount == 0){
        width += (100 / minuts) / 60;
        progressBar.style.width = `${width}%`;
    }else{
        width += (100 / changeTime) / 60;
        progressBar.style.width = `${width}%`;
    }
}