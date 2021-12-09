module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3702d69d6b24b6ab4a26686c0b5a9e9e'),
  },
});
