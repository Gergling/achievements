const getDashboardList = () => document.getElementById('achievement-list');

const ONE_DAY = 24 * 60 * 60 * 1000;

const categories = {
  date: {
    '7 Days': (date) => date > date.getTime() - (7 * ONE_DAY),
    '30 Days': (date) => date > date.getTime() - (30 * ONE_DAY),
    '1 Year': (date) => date > date.getTime() - (365 * ONE_DAY),
    'Earlier': () => true,
  },
  rating: {
    gold: 'Gold',
    silver: 'Silver',
    bronze: 'Bronze',
  },
};

let mode = 'date';

// Sort through the categorisation in order, and when one returns true, stop.
// That is the current title category.

const compareDOMItemsByDate = (a, b) => {
  const aDate = new Date(a.getAttribute('data-date'));
  const bDate = new Date(b.getAttribute('data-date'));

  if (aDate > bDate) {
    return -1;
  } else if (aDate < bDate) {
    return 1;
  }
  return 0;
};

const compareDOMItemsByRating = (a, b) => {
  const aDate = new Date(a.getAttribute('data-rating'));
  const bDate = new Date(b.getAttribute('data-rating'));

  if (aDate > bDate) {
    return -1;
  } else if (aDate < bDate) {
    return 1;
  }
  return 0;
};

// const createGroupingElement = () => {}

const sortDashboardItems = (updatedMode) => {
  mode = updatedMode;
  [...getDashboardList().children].sort((a, b) => {
    if (mode === 'date') {
      return compareDOMItemsByDate(a, b);
    } else {

    }
  }).forEach(node => {
    document.createElement('li');
    listDOM.appendChild(node);
  });
}
