export default function randomDate() {
  const startDate = new Date("2023-01-01");
  const endDate = new Date();
  const startMillis = startDate.getTime();
  const endMillis = endDate.getTime();

  // Generate a random timestamp between start and end dates
  const randomMillis = startMillis + Math.random() * (endMillis - startMillis);

  // Create a new Date object from the generated timestamp
  const randomDate = new Date(randomMillis);

  return formatDate(randomDate);
}

function formatDate(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}
