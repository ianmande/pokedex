/**
 * Formats a number with a specific format.
 * @param value - The number to be formatted.
 * @returns The formatted number as a string.
 */
export const formatterNumber = (value: number) => {
  let formattedValue = (value / 10).toLocaleString('de-DE', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return formattedValue;
};
