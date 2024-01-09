export default async function getRandomUsers(n) {
  try {
    const url = "https://randomuser.me/api/?results=" + n;
    const response = await fetch(url);
    const data = await response.json();
    return data.results.map((user) => {
      return {
        name: user.name.first + " " + user.name.last,
        photo: user.picture.medium,
        id: user.login.uuid,
      };
    });
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw the error to propagate it to the caller
  }
}
