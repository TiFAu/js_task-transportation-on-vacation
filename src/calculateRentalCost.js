/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAYRENT = 40;
  let rentalCost = DAYRENT * days;

  if (days >= 7) {
    return rentalCost - 50;
  }

  if (days >= 3) {
    return rentalCost - 20;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
