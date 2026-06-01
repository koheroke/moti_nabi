"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSession = void 0;
const cookie_1 = require("hono/cookie");
const useSession = () => {
    const loginSession = async (c) => {
        const cookie = await (0, cookie_1.getCookie)(c, "login_retention");
        if (!cookie) {
            return undefined;
        }
        return cookie;
    };
    return { loginSession };
};
exports.useSession = useSession;
