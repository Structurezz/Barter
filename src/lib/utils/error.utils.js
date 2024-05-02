function handleNotFound(res, message = 'Resource Not Found') {
    res.status(404).json({ error: 'Not Found', message });
}

function handleUnauthorized(res, message = 'Unauthorized Access') {
    res.status(401).json({ error: 'Unauthorized', message });
}

function handleForbidden(res, message = 'Forbidden') {
    res.status(403).json({ error: 'Forbidden', message });
}

// Add more error handling functions as needed

module.exports = {
    handleInternalServerError,
    handleValidationError,
    handleNotFound,
    handleUnauthorized,
    handleForbidden,
    // Export other error handling functions if any
};
