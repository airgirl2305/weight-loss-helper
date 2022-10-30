const today = new Date()

const gramInKcalOfFatHuman = 7.7;
const gramInKcalOFat = 9.1;
const gramInKcalOfCarbs = 4.1;
const gramInKcalOfProtein = 4.1;
const deficitInKcalDailyHealthy = 1000;
const weightLossDailyHealthy =
  deficitInKcalDailyHealthy / gramInKcalOfFatHuman / 1000;

const initialData = {
  sex: 'female'",
  height: 167.3,
  weight: 65.07,
  weightPlanA: 57,
  weightPlanB: 57.5,
  weightPlanC: 58,
  weightTheBeaverSDay: 59,
  startDate: new Date(2022, 9, 23),
  finalDate: new Date(2022, 11, 32),
  dateTheBeaverSDay: new Date(2022, 11, 4),


let actualData = {
  weightActual: 63.44,
  checkDate: new Date() - 1,


const daysPlanned = Math.round(
  (initialData.finalDate - initialData.startDate) / (24 * 60 * 60 * 1000)

let daysLeft = Math.round(
  (initialData.finalDate - today) / (24 * 60 * 60 * 1000)


let daysPassed = daysPlanned - daysLef

const weightToLosePlanA = initialData.weight - initialData.weightPla
const weightToLosePlanB = initialData.weight - initialData.weightPla
const weightToLosePlanC = initialData.weight - initialData.weightPla

const weightToLoseActualPlanA = actualData.weight - initialData.weightPla
const weightToLoseActualPlanB = actualData.weight - initialData.weightPla
const weightToLoseActualPlanC = actualData.weight - initialData.weightPla

const weightLossDailyPlanA = weightToLosePlanA / daysPlann
const weightLossDailyPlanB = weightToLosePlanB / daysPlann
const weightLossDailyPlanC = weightToLosePlanC / daysPlann

let weightLossDailyActualPlanA = weightToLoseActualPlanA / daysLe
let weightLossDailyActualPlanB = weightToLoseActualPlanB / daysLe
let weightLossDailyActualPlanC = weightToLoseActualPlanC / daysLe

let weightLossWeeklyActualPlanAInGr = Math.ceil(
  weightLossDailyActualPlanA * 1000 * 7

let weightLossWeeklyActualPlanBInGr = Math.ceil(
  weightLossDailyActualPlanB * 1000 * 7

let weightLossWeeklyActualPlanCInGr = Math.ceil(
  weightLossDailyActualPlanC * 1000 * 7

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
dateFinnishHealthyPlanA.setDate(
  initialData.startDate.getDate() + daysLeftHealthyPlanA
)

const daysLeftHealthyActualPlanA = Math.ceil(
  weightToLoseActualPlanA / weightLossDailyHealthy
)
let dateFinnishHealthyActualPlanA = new Date()
dateFinnishHealthyActualPlanA.setDate(
  initialData.startDate.getDate() + daysLeftHealthyActualPlanA
)

// for the beaver's day

const weightToLoseTheBeaverSDay =
  initialData.weight - initialData.weightTheBeaverSDay
const weightToLoseActualTheBeaverSDay =
  actualData.weight - initialData.weightTheBeaverSDay

let daysLeftTheBeaverSDay = Math.round(
  (initialData.dateTheBeaverSDay - initialData.startDate) /
  (24 * 60 * 60 * 1000)
)
let daysLeftActualTheBeaverSDay =
  Math.round((initialData.dateTheBeaverSDay - today) / (24 * 60 * 60 * 1000)) +
  1 // checked

let weightLossDailyTheBeaverSDay =
  weightToLoseTheBeaverSDay / daysLeftTheBeaverSDay

let weightLossDailyActualTheBeaverSDay =
  weightToLoseActualTheBeaverSDay / daysLeftActualTheBeaverSDay

// for the beaver's day
