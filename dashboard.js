let students;
try {
  students = JSON.parse(localStorage.getItem("students")) || [];
  if (!Array.isArray(students)) {
    throw new Error("Invalid data format in localStorage");
  }
} catch (error) {
  console.error(error);
  students = [];
}

document.getElementById("totalStudents").innerText = students.length;

const genderCounts = { Male: 0, Female: 0 };
const yearLevelCounts = { First: 0, Second: 0, Third: 0, Fourth: 0 };
const courseCounts = {
  "Electrical Engineering": 0,
  "Mechanical Engineering": 0,
  "Civil Engineering": 0,
  "Electronics and Communication Engineering": 0,
};

students.forEach(({ gender, yearLevel, course }) => {
  if (genderCounts[gender] !== undefined) {
    genderCounts[gender]++;
  }
  if (yearLevelCounts[yearLevel] !== undefined) {
    yearLevelCounts[yearLevel]++;
  }
  if (courseCounts[course] !== undefined) {
    courseCounts[course]++;
  }
});

document.getElementById("totalMales").innerText = genderCounts.Male;
document.getElementById("totalFemales").innerText = genderCounts.Female;
document.getElementById("totalFirst").innerText = yearLevelCounts.First;
document.getElementById("totalSecond").innerText = yearLevelCounts.Second;
document.getElementById("totalThird").innerText = yearLevelCounts.Third;
document.getElementById("totalFourth").innerText = yearLevelCounts.Fourth;

document.getElementById("totalElectrical").innerText = courseCounts["Electrical Engineering"];
document.getElementById("totalMechanical").innerText = courseCounts["Mechanical Engineering"];
document.getElementById("totalCivil").innerText =  courseCounts["Civil Engineering"];
document.getElementById("totalElectronics").innerText =courseCounts["Electronics and Communication Engineering"];

const ctxGender = document.getElementById("genderChart").getContext("2d");
const genderChart = new Chart(ctxGender, {
  type: "pie",
  data: {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [genderCounts.Male, genderCounts.Female],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  },
});

const ctxYearLevel = document.getElementById("yearLevelChart").getContext("2d");
const yearLevelChart = new Chart(ctxYearLevel, {
  type: "pie",
  data: {
    labels: ["First Year", "Second Year", "Third Year", "Fourth Year"],
    datasets: [
      {
        data: [
          yearLevelCounts.First,
          yearLevelCounts.Second,
          yearLevelCounts.Third,
          yearLevelCounts.Fourth,
        ],
        backgroundColor: ["#FFCE56", "#FF6384", "#36A2EB", "#4BC0C0"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  },
});

const ctxCourse = document.getElementById("courseChart").getContext("2d");
const courseChart = new Chart(ctxCourse, {
  type: "pie",
  data: {
    labels: [
      "Electrical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electronics and Communication Engineering",
    ],
    datasets: [
      {
        data: [
          courseCounts["Electrical Engineering"],
          courseCounts["Mechanical Engineering"],
          courseCounts["Civil Engineering"],
          courseCounts["Electronics and Communication Engineering"],
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  },
});
