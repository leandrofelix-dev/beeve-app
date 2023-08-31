module.exports = {
  name: 'Beeve',
  slug: 'beeve',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#000000',
  },
  android: {
    package: 'com.felixdev.beeve',
  },
  extra: {
    eas: {
      projectId: '74e7e37c-7c99-457d-9736-1ea05cf5bee1',
    },
    apiUrl: process.env.API_URL,
  },
}
