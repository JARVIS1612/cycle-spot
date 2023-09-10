export const sortByPropertyName = (property) => (a, b) => {
   if (a[property] < b[property]) return -1;
   if (a[property] > b[property]) return 1;
   return 0;
};

export const sortByPropertyPrice = (property) => (a, b) => a[property] - b[property];