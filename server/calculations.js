// Initial

const gramInKcalOfFatHuman = 7.7;
const gramInKcalOFat = 9.1;
const gramInKcalOfCarbs = 4.1;
const gramInKcalOfProtein = 4.1;
const deficitInKcalDailyHealthy = 1000;
const weightLossDailyHealthy =
  deficitInKcalDailyHealthy / gramInKcalOfFatHuman / 1000;

let initialData = {
  sex: "female",
  height: 167.3,
};

let weightStart = 65.07;

let dateStart = new Date(2022, 9, 23);
let dateFinnish = new Date(2022, 11, 32);
let daysPlanned = Math.round((dateFinnish - dateStart) / (24 * 60 * 60 * 1000));

// Actual
let weightActual = 63.44;
let today = new Date();
let daysLeft = Math.round((dateFinnish - today) / (24 * 60 * 60 * 1000)) + 1;
let daysPassed = daysPlanned - daysLeft;

const weightPlanA = 57;
const weightPlanB = 57.5;
const weightPlanC = 58;

const weightToLosePlanA = weightStart - weightPlanA;
const weightToLosePlanB = weightStart - weightPlanB;
const weightToLosePlanC = weightStart - weightPlanC;

const weightToLoseActualPlanA = weightActual - weightPlanA;
const weightToLoseActualPlanB = weightActual - weightPlanB;
const weightToLoseActualPlanC = weightActual - weightPlanC;

const weightLossDailyPlanA = weightToLosePlanA / daysPlanned;
const weightLossDailyPlanB = weightToLosePlanB / daysPlanned;
const weightLossDailyPlanC = weightToLosePlanC / daysPlanned;

let weightLossDailyActualPlanA = weightToLoseActualPlanA / daysLeft;
let weightLossDailyActualPlanB = weightToLoseActualPlanB / daysLeft;
let weightLossDailyActualPlanC = weightToLoseActualPlanC / daysLeft;

let weightLossWeeklyActualPlanAInGr = Math.ceil(
  weightLossDailyActualPlanA * 1000 * 7
);
let weightLossWeeklyActualPlanBInGr = Math.ceil(
  weightLossDailyActualPlanB * 1000 * 7
);
let weightLossWeeklyActualPlanCInGr = Math.ceil(
  weightLossDailyActualPlanC * 1000 * 7
);
/*console.log(
  "weight loss Weekly actual",
  weightLossWeeklyActualPlanAInGr,
  weightLossWeeklyActualPlanBInGr,
  weightLossWeeklyActualPlanCInGr
);*/

const daysLeftHealthyPlanA = Math.ceil(
  weightToLosePlanA / weightLossDailyHealthy
);
let dateFinnishHealthyPlanA = new Date();
dateFinnishHealthyPlanA.setDate(dateStart.getDate() + daysLeftHealthyPlanA);

const daysLeftHealthyActualPlanA = Math.ceil(
  weightToLoseActualPlanA / weightLossDailyHealthy
);
let dateFinnishHealthyActualPlanA = new Date();
dateFinnishHealthyActualPlanA.setDate(
  dateStart.getDate() + daysLeftHealthyActualPlanA
);

// for the beaver's day
const dateTheBeaverSDay = new Date(2022, 11, 4);
const weightTheBeaverSDay = 59;

const weightToLoseTheBeaverSDay = weightStart - weightTheBeaverSDay;
const weightToLoseActualTheBeaverSDay = weightActual - weightTheBeaverSDay;

let daysLeftTheBeaverSDay = Math.round(
  (dateTheBeaverSDay - dateStart) / (24 * 60 * 60 * 1000)
);
let daysLeftActualTheBeaverSDay = Math.round(
  (dateTheBeaverSDay - today) / (24 * 60 * 60 * 1000)
); // checked

let weightLossDailyTheBeaverSDay =
  weightToLoseTheBeaverSDay / daysLeftTheBeaverSDay;

let weightLossDailyActualTheBeaverSDay =
  weightToLoseActualTheBeaverSDay / daysLeftActualTheBeaverSDay;

// for the beaver's day
