export async function getClients() {
  const answer = await fetch(import.meta.env.VITE_API_URL);
  const result = await answer.json();
  return result;
}
