module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9878a9abb6bbd9b487806e13d0f5eda1'),
  },
});
