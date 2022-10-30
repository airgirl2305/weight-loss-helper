const today = new Date();

const gramInKcalOfFatHuman = 7.7;
const gramInKcalOFat = 9.1;
const gramInKcalOfCarbs = 4.1;
const gramInKcalOfProtein = 4;
const deficitInKcalDailyHealthy = 10;
const weightLossDailyHealthy = deficitInKcalDailyHealthy / gramInKcalOfFatHuman / 10;

const initialData = {
  sex: 'female',
  height: 167.3,
  weight: 65.07,
  weightPlanA: 57,
  weightPlanB: 57.5,
  weightPlanC: 58,
  weightTheBeaverSDay: 59,
  startDate: new Date(2022, 9, 23),
  finalDate: new Date(2022, 11, 32),
  dateTheBeaverSDay: new Date(2022, 11, 4),
};

const actualData = {
  weightActual: 63.44,
  checkDate: new Date() - 1,
};

const daysPlanned = Math.round(
  (initialData.finalDate - initialData.startDate) / (24 * 60 * 60 * 1000),
);

const daysLeft = Math.round(
  (initialData.finalDate - today) / (24 * 60 * 60 * 1000),
);

const daysPassed = daysPlanned - daysLeft;

const weightToLosePlanA = initialData.weight - initialData.weightPlanA;
const weightToLosePlanB = initialData.weight - initialData.weightPlanB;
const weightToLosePlanC = initialData.weight - initialData.weightPlanC;

const weightToLoseActualPlanA = actualData.weight - initialData.weightPlanA;
const weightToLoseActualPlanB = actualData.weight - initialData.weightPlanB;
const weightToLoseActualPlanC = actualData.weight - initialData.weightPlanC;

const weightLossDailyPlanA = weightToLosePlanA / daysPlanned;
const weightLossDailyPlanB = weightToLosePlanB / daysPlanned;
const weightLossDailyPlanC = weightToLosePlanC / daysPlanned;

const weightLossDailyActualPlanA = weightToLoseActualPlanA / daysLeft;
const weightLossDailyActualPlanB = weightToLoseActualPlanB / daysLeft;
const weightLossDailyActualPlanC = weightToLoseActualPlanC / daysLeft;

const weightLossWeeklyActualPlanAInGr = Math.ceil(
  weightLossDailyActualPlanA * 1000 * 7,
);

const weightLossWeeklyActualPlanBInGr = Math.ceil(
  weightLossDailyActualPlanB * 1000 * 7,
);

const weightLossWeeklyActualPlanCInGr = Math.ceil(
  weightLossDailyActualPlanC * 1000 * 7,
);

/* console.log(
  "weight loss Weekly actual",
  weightLossWeeklyActualPlanAInGr,
  weightLossWeeklyActualPlanBInGr,
  weightLossWeeklyActualPlanCInGr
); */

const daysLeftHealthyPlanA = Math.ceil(
  weightToLosePlanA / weightLossDailyHealthy,
);
const dateFinnishHealthyPlanA = new Date();
dateFinnishHealthyPlanA.setDate(
  initialData.startDate.getDate() + daysLeftHealthyPlanA,
);

const daysLeftHealthyActualPlanA = Math.ceil(
  weightToLoseActualPlanA / weightLossDailyHealthy,
);
const dateFinnishHealthyActualPlanA = new Date();
dateFinnishHealthyActualPlanA.setDate(
  initialData.startDate.getDate() + daysLeftHealthyActualPlanA,
);

// for the beaver's day

const weightToLoseTheBeaverSDay = initialData.weight - initialData.weightTheBeaverSDay;
const weightToLoseActualTheBeaverSDay = actualData.weight - initialData.weightTheBeaverSDay;

const daysLeftTheBeaverSDay = Math.round(
  (initialData.dateTheBeaverSDay - initialData.startDate)
    / (24 * 60 * 60 * 1000),
);
const daysLeftActualTheBeaverSDay = Math.round((initialData.dateTheBeaverSDay - today) / (24 * 60 * 60 * 1000))
  + 1; // checked

const weightLossDailyTheBeaverSDay = weightToLoseTheBeaverSDay / daysLeftTheBeaverSDay;

const weightLossDailyActualTheBeaverSDay = weightToLoseActualTheBeaverSDay / daysLeftActualTheBeaverSDay;

// for the beaver's day
