import { authCheckEmail, authCheckPassword } from "../db/queries.js";
import CustomIncorrectCredential from "../errors/CustomIncorrectEmail.js";

export async function authenticateUser(req, res, next) {
  const { email, password } = req.body;

  const emailCheck = await authCheckEmail(email);

  if (!emailCheck) {
    throw new CustomIncorrectCredential("Email or password incorrect.");
  }

  const passwordCheck = await authCheckPassword(emailCheck.author_id, password);

  if (!passwordCheck) {
    throw new CustomIncorrectCredential("Email or password incorrect.");
  }

  req.body.author_id = emailCheck.author_id;

  next();
}

export default authenticateUser;
