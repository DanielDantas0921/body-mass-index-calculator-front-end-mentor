// variables-----------------
// inputs metric
const inputMetricHeight = document.getElementById("input-height-metric");
const inputMetricWeight = document.getElementById("input-weight-metric");

// inputs imperial

const inputImperialHeightFoot = document.getElementById(
  "input-height-foot-imperial"
);
const inputImperialHeightInch = document.getElementById(
  "input-height-inch-imperial"
);
const inputImperialWeightStone = document.getElementById(
  "input-weight-stone-imperial"
);
const inputImperialWeightPounds = document.getElementById(
  "input-weight-pounds-imperial"
);

// result do bmi

const resultbmi = document.querySelector("#result-bmi");
const resultbmiDescription = document.querySelector(".bmi-description p")

let height = 0;
let weight = 0;

// obs meters in m // weight in kg

// auxiliary functions
const bmiDescription = document.querySelector(".div-bmi-card-description")
const bmiDescriptionActive = document.querySelector(".div-bmi-card-descripion-active")

function showBmiActive(){
  bmiDescription.style.display = "none"
  bmiDescriptionActive.style.display = "flex"
}

export function hideBmiActive(){
  bmiDescription.style.display = "flex"
  bmiDescriptionActive.style.display = "none"
}

function increaseBmiSizeDescription(){
  // colocar o height de 10 rem
  bmiDescriptionActive.style.height = "10rem"
  
  }
  function normalizeBmiSizeDescription(){
  bmiDescriptionActive.style.height = "8rem"
  }

function changeBmiDescriptionText(resultFormated){
  if(resultFormated <18.5){
    normalizeBmiSizeDescription()
    return "Your BMI is classified as underweight. The underweight range is defined as a BMI of less than 18.5.Health Status: Not considered healthy."
  } else if(resultFormated <=24.9){
    normalizeBmiSizeDescription()
    return "Your BMI falls within the normal weight range. This range is defined as a BMI between 18.5 and 24.9.Health Status: Considered healthy."
  } else if(resultFormated <= 29.9){
    normalizeBmiSizeDescription()
    return "Your BMI is classified as overweight. The overweight range is defined as a BMI between 25 and 29.9.Health Status: Not considered healthy."
  } else if(resultFormated <= 34.9){
    normalizeBmiSizeDescription()
    return "Your BMI falls within Obesity Class 1. This range is defined as a BMI between 30 and 34.9.Health Status: Not considered healthy."
  } else if(resultFormated <= 39.9){
    normalizeBmiSizeDescription()
    return "Your BMI is classified as Obesity Class 2. This range is defined as a BMI between 35 and 39.9.Health Status: Not considered healthy."
  }else if(resultFormated >= 40){
    increaseBmiSizeDescription()
    return "Your BMI falls within Obesity Class 3, also known as severe or morbid obesity. This range is defined as a BMI of 40 or higher.Health Status: Not considered healthy."
  }
}




// metric -------------------
export function inputMetricHeightFun() {
  height = Number(inputMetricHeight.value / 100);
  if (inputMetricWeight.value == "") {
    hideBmiActive()
    return;
  }
  showBmiActive()
  console.log(`O height é: ${height} `);
  console.log(`O weight é: ${weight} `);
  const result = weight / (height * height);
  console.log("O resultado do bmi é " + result);
  const resultbmiFormatado = result.toFixed(2);
  resultbmi.innerText = resultbmiFormatado;
  resultbmiDescription.innerText = changeBmiDescriptionText(resultbmiFormatado)
}

export function inputMetricWeightFun() {
  weight = Number(inputMetricWeight.value);
  if (inputMetricHeight.value == "") {
    hideBmiActive()
    return;
  }
  showBmiActive()
  console.log(`O height é: ${height} `);
  console.log(`O weight é: ${weight} `);
  const result = weight / (height * height);
  console.log("O resultado do bmi é " + result);
  const resultbmiFormatado = result.toFixed(2);
  resultbmi.innerText = resultbmiFormatado;
  resultbmiDescription.innerText = changeBmiDescriptionText(resultbmiFormatado)
}
// imperial -------------------

export function inputImperialHeightFootFun() {
  if (
    inputImperialWeightPounds.value == "" &&
    inputImperialWeightStone.value == ""
  ) {
    hideBmiActive()
    return;
  }
  showBmiActive()
  const heightFootInMeters = (Number(inputImperialHeightFoot.value) *  30.5 )/100
  const heightInchesInMeters = (Number(inputImperialHeightInch.value) * 2.55)/100
  const height = heightFootInMeters + heightInchesInMeters
  const weightPoundsInKg = Number(inputImperialWeightPounds.value) * 0.45
  const weightStoneInKg = Number(inputImperialWeightStone.value) * 6.35
  const weight = weightPoundsInKg + weightStoneInKg
  const result = weight/(height * height)
  const resultbmiFormatado = result.toFixed(2);
  resultbmi.innerText = resultbmiFormatado;
  resultbmiDescription.innerText = changeBmiDescriptionText(resultbmiFormatado)
  
}
export function inputImperialHeightInchFun() {
  if (
    inputImperialWeightPounds.value == "" &&
    inputImperialWeightStone.value == ""
  ) {
    hideBmiActive()
    return;
  }
  showBmiActive()
  const heightFootInMeters = (Number(inputImperialHeightFoot.value) *  30.5 )/100
  const heightInchesInMeters = (Number(inputImperialHeightInch.value) * 2.55)/100
  const height = heightFootInMeters + heightInchesInMeters
  const weightPoundsInKg = Number(inputImperialWeightPounds.value) * 0.45
  const weightStoneInKg = Number(inputImperialWeightStone.value) * 6.35
  const weight = weightPoundsInKg + weightStoneInKg
  const result = weight/(height * height)
  const resultbmiFormatado = result.toFixed(2);
  resultbmi.innerText = resultbmiFormatado;
  resultbmiDescription.innerText = changeBmiDescriptionText(resultbmiFormatado)
}

export function inputImperialWeightStoneFun() {
  if(inputImperialHeightFoot.value == "" && inputImperialHeightInch.value ==""){
    hideBmiActive()
    return
  }
  showBmiActive()
  const heightFootInMeters = (Number(inputImperialHeightFoot.value) *  30.5 )/100
  const heightInchesInMeters = (Number(inputImperialHeightInch.value) * 2.55)/100
  const height = heightFootInMeters + heightInchesInMeters
  const weightPoundsInKg = Number(inputImperialWeightPounds.value) * 0.45
  const weightStoneInKg = Number(inputImperialWeightStone.value) * 6.35
  const weight = weightPoundsInKg + weightStoneInKg
  const result = weight/(height * height)
  const resultbmiFormatado = result.toFixed(2);
  resultbmi.innerText = resultbmiFormatado;
  resultbmiDescription.innerText = changeBmiDescriptionText(resultbmiFormatado)
}

export function inputImperialWeightPoundsFun() {
  if(inputImperialHeightFoot.value == "" && inputImperialHeightInch.value ==""){
    hideBmiActive()
    return
  }
  showBmiActive()
  const heightFootInMeters = (Number(inputImperialHeightFoot.value) *  30.5 )/100
  const heightInchesInMeters = (Number(inputImperialHeightInch.value) * 2.55)/100
  const height = heightFootInMeters + heightInchesInMeters
  const weightPoundsInKg = Number(inputImperialWeightPounds.value) * 0.45
  const weightStoneInKg = Number(inputImperialWeightStone.value) * 6.35
  const weight = weightPoundsInKg + weightStoneInKg
  const result = weight/(height * height)
  const resultbmiFormatado = result.toFixed(2);
  resultbmi.innerText = resultbmiFormatado;
  resultbmiDescription.innerText = changeBmiDescriptionText(resultbmiFormatado)
}
