"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = (stack = false) => (err, req, res, next) => {
    console.log('error::', err);
    return res.status(err.status).json({
        data: err.data || [],
        message: err.isPublic ? err.message : 'Internal server error',
        stack: stack ? err.stack : '',
        status: 'error',
    });
};
exports.notFound = (req, res, next) => {
    return next({ status: 404, message: 'Not Found', isPublic: true });
};
//# sourceMappingURL=errorHandlers.js.map