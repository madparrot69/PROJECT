const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Hanna",
    surname: "Hammar- ström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

const q1 = document.querySelector(`.q1`);
const q2 = document.querySelector(`.q2`);
const q3 = document.querySelector(`.q3`);
const q4 = document.querySelector(`.q4`);
const q5 = document.querySelector(`.q5`);
const q6 = document.querySelector(`.q6`);
const q7 = document.querySelector(`.q7`);
const q8 = document.querySelector(`.q8`);
const q9 = document.querySelector(`.q9`);

q1.addEventListener(`click`, function () {
  const scientists19thCentury = scientists.filter((scientist) => {
    return scientist.born >= 1800 && scientist.born < 1900;
  });

  const names = scientists19thCentury.map(
    (scientist) => `${scientist.name} ${scientist.surname}`
  );

  const scientistsContainer = document.querySelector(".chooseTheScientistImg");

  scientistsContainer.innerHTML = "";

  names.forEach((names) => {
    const scientistDiv = document.createElement(`div`);
    scientistDiv.textContent = names;
    scientistDiv.className = `scientistDiv`;
    scientistsContainer.appendChild(scientistDiv);
  });
});

q2.addEventListener(`click`, function () {
  const sortedScientists = scientists.slice().sort((a, b) => {
    return (a.name + " " + a.surname).localeCompare(b.name + " " + b.surname);
  });

  const scientistsContainer = document.querySelector(".chooseTheScientistImg");

  scientistsContainer.innerHTML = "";

  sortedScientists.forEach((scientist) => {
    const scientistDiv = document.createElement("div");
    scientistDiv.textContent = `${scientist.name} ${scientist.surname}`;
    scientistsContainer.appendChild(scientistDiv);
    scientistDiv.className = `scientistDiv`;
  });
});

q3.addEventListener(`click`, function () {
  const scientistsSortedByAge = scientists.sort((a, b) => {
    const ageA = a.dead - a.born;
    const ageB = b.dead - b.born;
    return ageA - ageB;
  });

  const scientistsContainer = document.querySelector(".chooseTheScientistImg");

  scientistsContainer.innerHTML = "";

  scientistsSortedByAge.forEach((scientist) => {
    const scientistDiv = document.createElement("div");
    scientistDiv.textContent = `${scientist.name}  ${scientist.surname}`;
    scientistsContainer.appendChild(scientistDiv);
    scientistDiv.className = `scientistDiv`;
  });
});

q4.addEventListener(`click`, function () {
  const youngestScientist = scientists.reduce((youngest, currentScientist) => {
    return currentScientist.born > youngest.born ? currentScientist : youngest;
  }, scientists[0]);

  const scientistsContainer = document.querySelector(".chooseTheScientistImg");

  scientistsContainer.innerHTML = "";

  const scientistDiv = document.createElement("div");
  scientistDiv.textContent = `${youngestScientist.name} ${youngestScientist.surname}`;
  scientistsContainer.appendChild(scientistDiv);
  scientistDiv.className = `scientistDiv1`;
});

q5.addEventListener(`click`, function () {
  const einstein = scientists.find(
    (scientist) =>
      scientist.name === "Albert" && scientist.surname === "Einstein"
  );

  const scientistsContainer = document.querySelector(".chooseTheScientistImg");

  scientistsContainer.innerHTML = "";

  const scientistDiv = document.createElement("div");
  scientistDiv.textContent = `${einstein.born} рік`;
  scientistsContainer.appendChild(scientistDiv);
  scientistDiv.className = `scientistDiv2`;
});

q6.addEventListener(`click`, function () {
  const scientistsMiniContainer = document.querySelector(
    ".chooseTheScientistImgGroupDiv"
  );
  scientistsMiniContainer.innerHTML = "";
  scientists.forEach((scientist) => {
    const firstLetter = scientist.surname.charAt(0).toUpperCase();
    const letterC = `C`;
    if (firstLetter === letterC) {
      const scientistDiv = document.createElement("div");
      scientistDiv.textContent = `${scientist.name}  ${scientist.surname}`;
      scientistsMiniContainer.appendChild(scientistDiv);
      scientistDiv.className = `scientistDiv3`;
    }
  });
});

q7.addEventListener(`click`, function () {
  const scientistsContainer = document.querySelector(".chooseTheScientistImg");

  scientistsContainer.innerHTML = "";

  scientists.forEach((scientist) => {
    const firstLetter = scientist.name.charAt(0).toUpperCase();

    if (firstLetter !== "A") {
      const scientistDiv = document.createElement("div");
      scientistDiv.textContent = `${scientist.name}  ${scientist.surname}`;
      scientistsContainer.appendChild(scientistDiv);
      scientistDiv.className = `scientistDiv`;
    }
  });
});

// q8.addEventListener(`click`, function () {});

q9.addEventListener(`click`, function () {
  const scientistsContainer = document.querySelector(
    ".chooseTheScientistImgGroupDiv"
  );

  scientistsContainer.innerHTML = "";

  scientists.forEach((scientist) => {
    const firstNameLetter = scientist.name.charAt(0).toUpperCase();
    const firstSrNameLetter = scientist.surname.charAt(0).toUpperCase();

    if (firstNameLetter === firstSrNameLetter) {
      const scientistDiv = document.createElement("div");
      scientistDiv.textContent = `${scientist.name}  ${scientist.surname}`;
      scientistsContainer.appendChild(scientistDiv);
      scientistDiv.className = `scientistDiv3`;
    }
  });
});
