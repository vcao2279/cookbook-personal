const { forwardTo } = require("prisma-binding");

const Query = {
  //   async recipes(parents, args, ctx, info) {
  //     const items = ctx.db.query.recipes();
  //     return items;
  //   }
  recipes: forwardTo("db")
};

module.exports = Query;
