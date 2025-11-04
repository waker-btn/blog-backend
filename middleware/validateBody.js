import CustomIncorrectKeys from '../errors/CustomIncorrectKeys.js';

export function validateAuthorKeys(req, res, next) {
    const requiredKeys = ['name', 'email', 'password', 'bio'];
    const receivedKeys = Object.keys(req.body);

    const missingKeys = requiredKeys.filter(key => !receivedKeys.includes(key));

    if (missingKeys.length > 0) {
        throw new CustomIncorrectKeys(`Missing required keys: ${missingKeys.join(', ')}`);
    }

    next();
}

export function validatePostKeys(req, res, next) {
    const requiredKeys = ['title', 'post', 'summary'];
    const receivedKeys = Object.keys(req.body);

    const missingKeys = requiredKeys.filter(key => !receivedKeys.includes(key));

    if (missingKeys.length > 0) {
        throw new CustomIncorrectKeys(`Missing required keys: ${missingKeys.join(', ')}`);
    }

    next();
}