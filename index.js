/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!
  console.log(payable);
  return payable;
};

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  const employeeRecordObject = {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  };
  return employeeRecordObject;
}

function createEmployeeRecords(employeesArr) {
  return employeesArr.map((individualEmployeeArr) =>
    createEmployeeRecord(individualEmployeeArr)
  );
}

function createTimeInEvent(timeInDateAndHour) {
  const [date, hour] = timeInDateAndHour.split(" ");
  const timeInEvent = {
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date,
  };
  this.timeInEvents.push(timeInEvent);
  return this;
}

function createTimeOutEvent(timeOutDateAndHour) {
  const [date, hour] = timeOutDateAndHour.split(" ");
  const timeOutEvent = {
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date,
  };
  this.timeOutEvents.push(timeOutEvent);
  return this;
}

function hoursWorkedOnDate(soughtDate) {
  let hoursWorked = 0;
  const timeInDate = this.timeInEvents.find(
    (timeIn) => soughtDate === timeIn.date
  );
  const timeOutDate = this.timeOutEvents.find(
    (timeOut) => soughtDate === timeOut.date
  );

  if (soughtDate && timeInDate.date) {
    hoursWorked = (timeOutDate.hour - timeInDate.hour) / 100;
  }
  return hoursWorked;
}

function wagesEarnedOnDate(soughtDate) {
  const hoursWorked = hoursWorkedOnDate.call(this, soughtDate);
  return hoursWorked * this.payPerHour;
}

function findEmployeeByFirstName(arrayOfEmployees, firstNameOfSoughtEmployee) {
  let soughtEmployee = arrayOfEmployees.find((employeeRecordObject) => {
    if (employeeRecordObject.firstName === firstNameOfSoughtEmployee) {
      return employeeRecordObject;
    }
  });
  return soughtEmployee;
}

function calculatePayroll(employeeRecordArray) {
  let totalWages = employeeRecordArray.reduce((acc, individualRecord) => {
    return acc + allWagesFor.call(individualRecord);
  }, 0);
  return totalWages;
}

const finalArr = [
  {
    firstName: "Thor",
    familyName: "Odinsson",
    title: "Electrical Engineer",
    payPerHour: 45,
    timeInEvents: [
      { type: "TimeIn", hour: 8, date: "2018-01-01" },
      { type: "TimeIn", hour: 8, date: "2018-01-02" },
      { type: "TimeIn", hour: 8, date: "2018-01-03" },
    ],
    timeOutEvents: [
      { type: "TimeOut", hour: 16, date: "2018-01-01" },
      { type: "TimeOut", hour: 18, date: "2018-01-02" },
      { type: "TimeOut", hour: 18, date: "2018-01-03" },
    ],
  },
  {
    firstName: "Loki",
    familyName: "Laufeysson-Odinsson",
    title: "HR Representative",
    payPerHour: 35,
    timeInEvents: [
      { type: "TimeIn", hour: 7, date: "2018-01-01" },
      { type: "TimeIn", hour: 7, date: "2018-01-02" },
      { type: "TimeIn", hour: 6, date: "2018-01-03" },
    ],
    timeOutEvents: [
      { type: "TimeOut", hour: 17, date: "2018-01-01" },
      { type: "TimeOut", hour: 18, date: "2018-01-02" },
      { type: "TimeOut", hour: 18, date: "2018-01-03" },
    ],
  },
  {
    firstName: "Natalia",
    familyName: "Romanov",
    title: "CEO",
    payPerHour: 150,
    timeInEvents: [
      { type: "TimeIn", hour: 17, date: "2018-01-01" },
      { type: "TimeIn", hour: 0, date: "2018-01-05" },
      { type: "TimeIn", hour: 13, date: "2018-01-03" },
    ],
    timeOutEvents: [
      { type: "TimeOut", hour: 23, date: "2018-01-01" },
      { type: "TimeOut", hour: 23, date: "2018-01-05" },
      { type: "TimeOut", hour: 23, date: "2018-01-03" },
    ],
  },
  {
    firstName: "Darcey",
    familyName: "Lewis",
    title: "Intern",
    payPerHour: 15,
    timeInEvents: [
      { type: "TimeIn", hour: 7, date: "2018-01-01" },
      { type: "TimeIn", hour: 8, date: "2018-01-02" },
      { type: "TimeIn", hour: 8, date: "2018-01-03" },
    ],
    timeOutEvents: [
      { type: "TimeOut", hour: 13, date: "2018-01-01" },
      { type: "TimeOut", hour: 13, date: "2018-01-02" },
      { type: "TimeOut", hour: 13, date: "2018-01-03" },
    ],
  },
];
console.log(calculatePayroll(finalArr));
