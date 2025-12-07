export const calculateDuration = (start: string, end: string | null): string => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const yearString = years === 1 ? `${years} year` : `${years} years`;
  const monthString = months === 1 ? `${months} month` : `${months} months`;

  if (years === 0) return monthString;
  if (months === 0) return yearString;
  return `${yearString}, ${monthString}`;
};