interface ErrorResponse {}

export function errorHandler<T>(callback: T): T | ErrorResponse {
  try {
    return callback;
  } catch (err) {
    return {};
  }
}
