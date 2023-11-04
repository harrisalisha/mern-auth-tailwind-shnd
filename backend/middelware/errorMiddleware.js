const notFound = (req, res, next) => {
    const error = new Error(`Not Found -${req.originalUrl}`);

    res.status(404);
    next(error);
}

const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message ;

    if(err.name === 'castError' && err.kind === 'ObjectId'){
        statusCode= 404;
        message = 'Rousource not Found';
    }

    res.status(statusCode).json({
        success: false,
        message,
        statusCode,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });

}

export { notFound, errorHandler};