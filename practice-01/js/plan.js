"use strict";

const totalTasks = 7;
const completedTasks = 2;
const dailyLimit = 2;

if (
  typeof totalTasks !== "number" ||
  typeof completedTasks !== "number" ||
  !Number.isInteger(totalTasks) ||
  !Number.isInteger(completedTasks) ||
  !Number.isFinite(totalTasks) ||
  !Number.isFinite(completedTasks) ||
  totalTasks < 0 ||
  totalTasks > 1000 ||
  completedTasks < 0 ||
  completedTasks > totalTasks
) {
  console.log("Ошибка: недопустимые значения количества задач");
} else if (
  typeof dailyLimit !== "number" ||
  !Number.isInteger(dailyLimit) ||
  !Number.isFinite(dailyLimit) ||
  dailyLimit < 1 ||
  dailyLimit > 1000
) {
  console.log("Ошибка: дневная норма должна быть целым числом от 1 до 1000");
} else {
  let remainingTasks = totalTasks - completedTasks;

  if (remainingTasks === 0) {
    console.log("Все задачи уже выполнены");
    console.log("Потребуется дней: 0");
  } else {
    console.log(`Осталось задач: ${remainingTasks}`);

    let day = 0;

    while (remainingTasks > 0) {
      day += 1;
      const tasksToday = Math.min(dailyLimit, remainingTasks);
      remainingTasks -= tasksToday;
      console.log(`День ${day}: выполнено ${tasksToday}, осталось ${remainingTasks}`);
    }

    console.log(`Потребуется дней: ${day}`);
  }
}