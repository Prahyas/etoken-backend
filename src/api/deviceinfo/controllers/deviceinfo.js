"use strict";

/**
 *  deviceinfo controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::deviceinfo.deviceinfo");
// module.exports = createCoreController("api::deviceinfo.deviceinfo", () => ({
//   async findOne(ctx) {
//     const entity = await strapi.services.deviceinfo.findOne(ctx.params);

//     const sanitized = sanitizeEntity(entity, {
//       model: strapi.models.deviceinfo,
//     });

//     const newView = sanitized.usertokens + 1;
//     strapi.query("deviceinfo").update(
//       { usertoken: sanitized.usertoken },
//       {
//         usertoken: newView,
//       }
//     );

//     return sanitized;
//   },
// }));
