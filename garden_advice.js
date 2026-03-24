// Garden advice based on month

const month = "January";

if (month === "December" || month === "January" || month === "February") {
  console.log("Summer: Water plants regularly and provide shade.");
} else if (month === "March" || month === "April" || month === "May") {
  console.log("Autumn: Prepare soil and plant cool-season crops.");
} else if (month === "June" || month === "July" || month === "August") {
  console.log("Winter: Protect plants from frost.");
} else if (month === "September" || month === "October" || month === "November") {
  console.log("Spring: Plant new flowers and vegetables.");
} else {
  console.log("Invalid month");
}

// TODO:
// 1. Convert this into functions
// 2. Replace hardcoded month with user input
// 3. Add comments to explain logic