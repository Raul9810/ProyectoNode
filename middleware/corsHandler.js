const cors = (req, res, next) =>{
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-control-Allow-Headers",
        "Origin, X-Request-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    next()
}

module.exports = cors;