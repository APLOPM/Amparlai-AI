export async function apiClient<T>(input: RequestInfo | URL, init?: RequestInit): Promise<T> {
  const response = await fetch(input, init);
  return response.json() as Promise<T>;
}
