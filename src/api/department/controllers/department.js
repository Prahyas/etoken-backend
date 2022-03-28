"use strict";

/**
 *  department controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::department.department");

// module.exports = createCoreController(
//   "api::department.department",
//   ({ strapi }) => ({
//     async find(ctx) {
//       console.log("result", ctx.state);
//     },
//   })
// );
