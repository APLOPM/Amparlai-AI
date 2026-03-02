export class ApiClientError extends Error {
  status: number;
  statusText: string;
  body?: unknown;

  constructor(message: string, status: number, statusText: string, body?: unknown) {
    super(message);
    this.name = 'ApiClientError';
    this.status = status;
    this.statusText = statusText;
    this.body = body;
  }
}

export async function apiClient<T>(input: RequestInfo | URL, init?: RequestInit): Promise<T> {
  const response = await fetch(input, init);

  const contentType = response.headers.get('content-type') ?? '';
  const isJson = contentType.includes('application/json');

  let payload: unknown = null;

  if (response.status !== 204) {
    if (isJson) {
      payload = await response.json();
    } else {
      const text = await response.text();
      payload = text.length > 0 ? text : null;
    }
  }

  if (!response.ok) {
    throw new ApiClientError(
      `Request failed with status ${response.status} ${response.statusText}`.trim(),
      response.status,
      response.statusText,
      payload,
    );
  }

  return payload as T;
}
