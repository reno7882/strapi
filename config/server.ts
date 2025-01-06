export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: [
      'a1f11c3a8c02b50015e088fb688e211fb78fe98d3d73624fc1d167af2e58c2e8',
      'b8f91b618f039c5d31218d9f199ed6f9a8901a4937c3f6e8ef917ee0f8a1b9f1'
    ],
  },
});
