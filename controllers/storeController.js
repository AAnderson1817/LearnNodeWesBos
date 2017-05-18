exports.myMiddleware = (req,res,next) => {
  req.name = "Andy";
  next();
}
exports.homePage = (req,res) => {
	res.render('index');
}