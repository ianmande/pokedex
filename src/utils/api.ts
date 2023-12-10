import { APP_HOST } from 'config';

/**
 * Represents a class that handles fetching data from an API.
 */
class FetchHandler {
  private readonly baseUrl: string;
  private readonly headers: Headers;

  constructor(baseUrl: string, headers: HeadersInit = {}) {
    this.baseUrl = baseUrl;
    this.headers = new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      ...headers,
    });
  }

  private async fetch<R>(url: string, options: RequestInit): Promise<R> {
    const response = await fetch(this.baseUrl + url, {
      headers: this.headers,
      ...options,
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  }

  get<R>(url: string): Promise<R> {
    console.log({ url });

    return this.fetch<R>(url, { method: 'GET' });
  }

  post<R, B = any>(url: string, body: B): Promise<R> {
    return this.fetch<R>(url, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  put<R, B = any>(url: string, body: B): Promise<R> {
    return this.fetch<R>(url, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  delete<R>(url: string): Promise<R> {
    return this.fetch<R>(url, { method: 'DELETE' });
  }
}

export const pokeService = new FetchHandler('https://pokeapi.co/api/v2/');
export const appService = new FetchHandler(`${APP_HOST}/api/`);
