"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unknownEndpoint = (_e, _req, res) => {
    if (_e) {
        res.status(404).send({ error: _e.message, status: 404 });
    }
    res.status(404).send({ error: 'unknown endpoint', status: 404 });
};
exports.default = { unknownEndpoint };
