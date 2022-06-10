export const notFoundHandler = (_req, res) => {
    return res.status(404).json({
        statusCode: 404,
        error: 'Not Found',
        message: 'Resource were not found',
    });
};
