class CustomIncorrectCredential extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 401;

    this.name = "IncorrectCredentialError";
  }
}

export default CustomIncorrectCredential;
