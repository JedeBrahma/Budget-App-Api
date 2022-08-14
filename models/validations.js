const validateURL = (req, res, next) => {
    console.log("checking the validity -test");
   
    next();
};



module.exports = { validateURL }