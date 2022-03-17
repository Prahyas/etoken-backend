module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3be2691b91e8ca97fc840d95961d2b9d'),
  },
});
