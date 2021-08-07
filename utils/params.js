module.exports = async function (ctx, next) {
  var query = ctx.query;
  var body = ctx.request.body;
  var params = {
    ...query,
    ...body
  }

  ctx.params = params;
  await next();
}