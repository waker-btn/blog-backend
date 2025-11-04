class CustomIncorrectKeys extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 422;
    // So the error is neat when stringified. NotFoundError: message instead of Error: message
    this.name = "IncorrectKeysError";
  }
}

export default CustomIncorrectKeys;
