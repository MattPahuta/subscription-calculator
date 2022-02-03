// Your JS code here
const subTypeElement = document.querySelector("#subscription");
const subDurationElement = document.querySelector("#months");
const result = document.querySelector(".result");
let subType = "basic";
let subDuration = 1;

// Event listeners
subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  updateSubscriptionDiv();
});

// Calculate costs and update DOM
const updateSubscriptionDiv = function () {
  let monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  let total = subDuration * monthlyCost;
  result.innerText = `You've selected a ${subDuration} month ${subType} plan for $${total}.`;
};
