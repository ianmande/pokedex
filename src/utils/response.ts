/**
 * Creates a response object with the specified body and status.
 * @template T - The type of the response body.
 * @param {T} body - The response body.
 * @param {number} status - The response status code.
 * @returns {Response} - The response object.
 */

export function response<T>(body: T, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
