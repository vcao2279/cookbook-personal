const { forwardTo } = require("prisma-binding");

const Query = {
  recipes: async (parent, args, ctx, info) => {
    const recipes = await ctx.db.query.recipes({}, info);
    return recipes;
  },
  currentUser: async (parent, args, ctx, info) => {
    const auth0sub = args.auth0sub || ctx.request.auth0sub || "";
    const user = await ctx.db.query.user(
      {
        where: {
          auth0sub: auth0sub
        }
      },
      info
    );
    return user;
  }
};

module.exports = Query;
