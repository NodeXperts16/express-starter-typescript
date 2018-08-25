"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Object.freeze({
    // POST /api/user
    create: {
        name: {
            errorMessage: 'Name is wrong!',
            // The location of the field, can be one or more of body, cookies, headers, params or query.
            // If omitted, all request locations will be checked
            in: ['body'],
            isLength: {
                errorMessage: 'Name should be at least 2 chars long',
                // Multiple options would be expressed as an array
                options: { min: 2 },
            },
        },
    },
    // GET /api/user
    get: {
        search: {
            errorMessage: 'Search is wrong',
            // The location of the field, can be one or more of body, cookies, headers, params or query.
            // If omitted, all request locations will be checked
            in: ['query'],
            optional: true,
        },
    },
});
//# sourceMappingURL=user.js.map