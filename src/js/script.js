import{ inputMetricHeightFun} from "./inputsFunctions.js"
import { inputMetricWeightFun } from "./inputsFunctions.js";
import { inputImperialHeightFootFun } from "./inputsFunctions.js";
import { inputImperialHeightInchFun } from "./inputsFunctions.js";
import { inputImperialWeightPoundsFun } from "./inputsFunctions.js";
import { inputImperialWeightStoneFun } from "./inputsFunctions.js";
import { hideBmiActive } from "./inputsFunctions.js";

const inputsImperial = document.querySelector(".inputs-imperial");
const inputsMetric = document.querySelector(".inputs-metric");
const inputMetricRadio = document.querySelector("#input-metric-radio");
const inputImperialRadio = document.querySelector("#input-imperial-radio");



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

inputMetricRadio.checked = true

// inputs metric + inputs imperial

// inputs metric
const inputMetricHeight = document.getElementById("input-height-metric")
const inputMetricWeight = document.getElementById("input-weight-metric")

// inputs imperial

const inputImperialHeightFoot = document.getElementById("input-height-foot-imperial")
const inputImperialHeightInch = document.getElementById("input-height-inch-imperial")
const inputImperialWeightStone = document.getElementById("input-weight-stone-imperial")
const inputImperialWeightPounds = document.getElementById("input-weight-pounds-imperial")

// general metric variables

let generalMetricHeight = 0
let generalMetricWeight = 0

// eventListenir of change

// metric
inputMetricHeight.addEventListener("input",inputMetricHeightFun)
inputMetricWeight.addEventListener("input", inputMetricWeightFun)

// inperial

inputImperialHeightFoot.addEventListener("input", inputImperialHeightFootFun )
inputImperialHeightInch.addEventListener("input",inputImperialHeightInchFun)
inputImperialWeightPounds.addEventListener("input", inputImperialWeightPoundsFun)
inputImperialWeightStone.addEventListener("input",inputImperialWeightStoneFun)
hideBmiActive()

