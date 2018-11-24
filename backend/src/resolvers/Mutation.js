const { forwardTo } = require("prisma-binding");

const Mutation = {
  createRecipe: async (parents, args, ctx, info) => {
    //TODO: Check if user is logged in

    const item = await ctx.db.mutation.createRecipe(
      {
        data: {
          ...args
        }
      },
      info
    );
    console.log(item);
    return item;
  },
  createUser: async (parents, args, ctx, info) => {
    const email = ctx.request.email;
    const auth0sub = ctx.request.auth0sub;
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          email: email,
          name: args.name,
          auth0sub: auth0sub
        }
      },
      info
    );
    return user;
  }
};

module.exports = Mutation;
