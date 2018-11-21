const { forwardTo } = require("prisma-binding");

const Query = {
  //   async recipes(parents, args, ctx, info) {
  //     const items = ctx.db.query.recipes();
  //     return items;
  //   }
  recipes: async (parent, args, ctx, info) => {
    console.log(`ctx.request.email: ${ctx.request.email}`);
    console.log(`ctx.request.auth0sub: ${ctx.request.auth0sub}`);
    const recipes = await ctx.db.query.recipes({}, info);
    return recipes;
  }
};

module.exports = Query;
