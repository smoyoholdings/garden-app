function getGardenAdvice(month) {
  if (["December", "January", "February"].includes(month)) {
    return "Summer: Water plants regularly and provide shade.";
  } else if (["March", "April", "May"].includes(month)) {
    return "Autumn: Prepare soil and plant cool-season crops.";
  } else if (["June", "July", "August"].includes(month)) {
    return "Winter: Protect plants from frost.";
  } else if (["September", "October", "November"].includes(month)) {
    return "Spring: Plant new flowers and vegetables.";
  } else {
    return "Invalid month";
  }
}

console.log(getGardenAdvice("January"));