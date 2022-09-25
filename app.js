// https://www.omnicalculator.com/health/time-of-death

// calculators not working

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const timesincedeathRadio = document.getElementById('timesincedeathRadio');
const bodytemperatureRadio = document.getElementById('bodytemperatureRadio');
const ambienttemperatureRadio = document.getElementById('ambienttemperatureRadio');

let timesincedeath;
let bodytemperature = v1;
let ambienttemperature = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

timesincedeathRadio.addEventListener('click', function() {
  variable1.textContent = 'Body temperature';
  variable2.textContent = 'Ambient temperature';
  bodytemperature = v1;
  ambienttemperature = v2;
  result.textContent = '';
});

bodytemperatureRadio.addEventListener('click', function() {
  variable1.textContent = 'Time since death';
  variable2.textContent = 'Ambient temperature';
  timesincedeath = v1;
  ambienttemperature = v2;
  result.textContent = '';
});

ambienttemperatureRadio.addEventListener('click', function() {
  variable1.textContent = 'Time since death';
  variable2.textContent = 'Body temperature';
  timesincedeath = v1;
  bodytemperature = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(timesincedeathRadio.checked)
    result.textContent = `Time since death = ${computetimesincedeath().toFixed(2)}`;

  else if(bodytemperatureRadio.checked)
    result.textContent = `Body temperature = ${computebodytemperature().toFixed(2)}`;

  else if(ambienttemperatureRadio.checked)
    result.textContent = `Ambient temperature = ${computeambienttemperature().toFixed(2)}`;
})

// calculation

// timesincedeath = (98.6 - bodytemperature) / ambienttemperature

function computetimesincedeath() {
  return (98.6 - Number(bodytemperature.value)) / Number(ambienttemperature.value);
}

function computebodytemperature() {
  return 98.6 - (Number(timesincedeath.value) * Number(ambienttemperature.value));
}

function computeambienttemperature() {
  return (98.6 - Number(bodytemperature.value)) / Number(timesincedeath.value);
}