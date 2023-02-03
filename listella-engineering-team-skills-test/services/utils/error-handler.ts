interface ErrorResponse {
  statusCode: number;
  message: string;
}

export function errorHandler<A, T>(
  callback: (args: A) => Promise<T | ErrorResponse>
): (args: A) => Promise<T | ErrorResponse> {
  const wrapperFn = async (args: A) => {
    try {
      return await callback(args);
    } catch (err: any) {
      return {
        statusCode: err?.statusCode,
        message: err?.message,
      };
    }
  };
  return wrapperFn;
}
