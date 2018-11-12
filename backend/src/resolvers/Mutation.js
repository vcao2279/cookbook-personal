const { forwardTo } = require("prisma-binding");

const Mutation = {
  async createRecipe(parents, args, ctx, info) {
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
  }
};

module.exports = Mutation;
