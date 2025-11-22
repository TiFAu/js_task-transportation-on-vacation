/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  let rentalCost = dayRent * days;

  if (days >= 7) {
    rentalCost = rentalCost - 50;
  } else {
    if (days >= 3) {
      rentalCost = rentalCost - 20;
    }
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
