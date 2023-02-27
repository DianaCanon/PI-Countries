const getCurrentCountries = ({ page, limit, countries }) => {
  const start = +page === 1 ? 0 : (page - 1) * limit - 1;
  const end = +page === 1 ? limit - 1 : limit * page - 1;
  return countries.slice(start, end);
};

const pagesNumber = (maxPageLimit) => {
  const pagesInit = [];
  for (let i = 1; i <= maxPageLimit; i++) {
    pagesInit.push(i);
  }
  return pagesInit;
};

const movedPage = ({ page, direction, maxPageLimit }) => {
  if (direction === "Prev" && page >= 1) {
    return --page;
  }
  if (direction === "Next" && page <= maxPageLimit) {
    return ++page;
  }
};

const optionsContinents = (countries) => {
  let arrayContinents = countries.map((c) => c.continent);
  let continents = [...new Set(arrayContinents)];
  return continents;
};

const filterCountries = ({ countries, continent, activity }) => {
  let filterTotal = countries;

  if (continent && !activity) {
    filterTotal = countries?.filter((c) => c.continent === continent);
  }
  if (activity && !continent) {
    filterTotal = countries?.filter((c) =>
      c.Activities.map((a) => a.name).includes(activity)
    );
  }
  if (continent && activity) {
    const aux = countries?.filter((c) => c.continent === continent);

    filterTotal = aux.filter((c) =>
      c.Activities.map((a) => a.name).includes(activity)
    );
  }

  return filterTotal;
};

const optionsActivities = (countries) => {
  const arrActivities = countries?.map((c) => {
    return c.Activities.map((a) => a.name);
  });
  return [...new Set(arrActivities.flat(Infinity))];
};

const sortCountriesPopulation = ({ countries, criteria }) => {
  const arrCountries = [...countries];
  const ascendent = (prop) => {
    return (a, b) => {
      return a[prop] > b[prop] ? 1 : -1;
    };
  };
  const descendent = (prop) => {
    return (a, b) => b[prop] - a[prop];
  };

  if (criteria === "ascendingByCountry") {
    arrCountries.sort(ascendent("name"));
  }
  if (criteria === "descendingByCountry") {
    arrCountries.sort((a, b) => (b.name > a.name ? 1 : -1));
  }
  if (criteria === "ascendingByPopulation") {
    arrCountries.sort(ascendent("population"));
  }
  if (criteria === "descendingByPopulation") {
    arrCountries.sort(descendent("population"));
  }
  return arrCountries;
};

export {
  getCurrentCountries,
  pagesNumber,
  movedPage,
  filterCountries,
  optionsContinents,
  optionsActivities,
  sortCountriesPopulation,
};
