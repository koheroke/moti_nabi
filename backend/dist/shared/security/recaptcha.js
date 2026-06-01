"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRecaptcha = void 0;
const env_1 = require("@/constants/env/env");
const verifyRecaptcha = async (token) => {
    const params = new URLSearchParams();
    params.append('secret', env_1.env.RECAPTCHA_SECRET_KEY);
    params.append('response', token);
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        body: params,
    });
    return await res.json();
};
exports.verifyRecaptcha = verifyRecaptcha;
