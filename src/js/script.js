const inputsImperial = document.querySelector(".inputs-imperial");
const inputsMetric = document.querySelector(".inputs-metric");
const inputMetricRadio = document.querySelector("#input-metric-radio");
const inputImperialRadio = document.querySelector("#input-imperial-radio");

console.log(inputsMetric);
console.log(inputsImperial);

inputMetricRadio.addEventListener("change", function () {
  if (this.checked) {
    inputsImperial.style.display = "none";
    inputsMetric.style.display = "flex";
  }
});

inputImperialRadio.addEventListener("change", function () {
  if (this.checked) {
    inputsImperial.style.display = "block";
    inputsMetric.style.display = "none";
  }
});
