  let birthYear = student.dateOfBirth.year;
  let birthMonth = student.dateOfBirth.month;
  let birthDay = student.dateOfBirth.day;

  let age = calculateAge(birthYear, birthMonth, birthDay);
  console.log(`${student.name} is ${age} years old!`);