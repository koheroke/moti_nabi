"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRecaptcha = void 0;
const verifyRecaptcha = async (token) => {
    const params = new URLSearchParams();
    params.append('secret', process.env.RECAPTCHA_SECRET_KEY);
    params.append('response', token);
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        body: params,
    });
    return await res.json();
};
exports.verifyRecaptcha = verifyRecaptcha;
