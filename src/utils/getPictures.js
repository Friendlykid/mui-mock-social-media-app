export default async function getPictures(n) {
  const pics = new Array(0);
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=100",
    );
    const data = await response.json();
    for (let i = 0; i < n; i++) {
      pics.push(data[Math.floor(Math.random() * 101)].download_url);
    }
    return pics;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw the error to propagate it to the caller
  }
}
