export async function fetchData<T>(): Promise<T> {
  const response = await fetch(
    "https://poetrydb.org/author,title/Shakespeare;Sonnet"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = (await response.json()) as T;
  return data;
}
