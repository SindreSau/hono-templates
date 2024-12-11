export class ApiError extends Error {
  constructor(
    public message: string,
    public statusCode = 500,
  ) {
    super(message)
    this.name = 'ApiError'
    this.statusCode = statusCode
  }
}
