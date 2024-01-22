export default defineEventHandler((event) => {
  async function getDawgData() {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    const dawgData = await res.json();
    return dawgData;
  }
  const data = getDawgData();
  return data;
});