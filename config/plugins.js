module.exports = ({ env }) => ({
 
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'wecodemne@gmail.com',
        defaultReplyTo: 'wecodemne@gmail.com',
      },
    },
  },

});