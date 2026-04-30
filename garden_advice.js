// Garden Advice App
// This app gives gardening advice based on the month and season.

// Function to display gardening advice
function getGardenAdvice(month, season) {
  if (month === "April" && season === "Autumn") {
    return "Plant winter vegetables and prepare soil with compost.";
  } else {
    return "Check your local planting guide for this month.";
  }
}

const month = "April";
const season = "Autumn";

// Call the function and display result
console.log(getGardenAdvice(month, season));