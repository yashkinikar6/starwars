export async function fetchCharacters(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function fetchResource(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch resource');
  }
  return response.json();
}
