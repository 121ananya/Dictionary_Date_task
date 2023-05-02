function solution(D) {
    // Create an empty dictionary to store the output
    const output = {};
  
    // Loop through each date in the input dictionary
    Object.keys(D).forEach((date) => {
      const value = D[date];
      const day = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
      // Get the weekday abbreviation using the toLocaleDateString method
  
      // If the day is already in the output dictionary, add the value to the existing value
      if (output[day]) {
        output[day] += value;
      } else {
        // Otherwise, create a new entry in the output dictionary with the value
        output[day] = value;
      }
    });
  
    // Fill in missing days with the mean of the previous and next days
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    for (let i = 0; i < weekdays.length; i++) {
      const day = weekdays[i];
      if (!output[day]) {
        // If the day is missing, find the previous and next days with values
        let prev = i - 1;
        while (prev >= 0 && !output[weekdays[prev]]) {
          prev--;
        }
        let next = i + 1;
        while (next < weekdays.length && !output[weekdays[next]]) {
          next++;
        }
        // Compute the mean of the previous and next values
        const mean = (output[weekdays[prev]] + output[weekdays[next]]) / 2;
        // Add the mean to the output dictionary for the missing day
        output[day] = Math.floor(mean);
      }
    }
  
    return output;
  }
  
console.log(solution({'2020-01-01':4, '2020-01-02':4, '2020-01-03': 6, '2020-01-04':8, '2020-01-05':2, '2020-01-06':-6, '2020-01-07':2, '2020-01-08': -2}));
const D2= {'2020-01-01':6, '2020-01-04': 12, '2020-01-05': 14, '2020-01-06': 2, '2020-01-07':4};
console.log(solution(D2));

module.exports = solution;