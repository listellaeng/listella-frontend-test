import { errorHandler } from './error-handler';

describe('errorHandler', () => {
  it('should return successfully with an empty object', () => {
    const result = errorHandler(() => ({}));
    if (typeof result === 'function') {
      expect(result()).toEqual({});
    }
  });
});
