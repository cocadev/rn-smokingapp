# Smoking app

Know how many cigarettes you smoke based on the pollution of your location. :poop::smoking:

[![app-store](https://shootismoke.github.io/assets/images/app-store.png)](https://itunes.apple.com/us/app/s-i-smoke/id1365605567?mt=8) [![google-play](https://shootismoke.github.io/assets/images/play-store.png)](https://play.google.com/store/apps/details?id=com.shitismoke.app)

## :camera: Screenshots

<p float="left">
  <img src="https://lh3.googleusercontent.com/_5krR5h3Swz3rVYwIEX1xBI6rcKzqoagRkmHxk1gn3dyF8NAUO3CRLHyi9WrySf1Rd0=w2836-h1506" alt="screenshot-1" width="150">
  <img src="https://lh3.googleusercontent.com/LdpBxKgzW-1DjItGLXYZFoZWMTQ-kztkZ71Er17ccF2vH2tyAdmrQGUVoo8te6Irzwo=w2836-h1506" alt="screenshot-2" width="150">
  <img src="https://lh3.googleusercontent.com/qfn2N3e2MzMzB1dow033ZhTzOOwlkleIrf7mHmzqjP31MoAhhbr9OL2NMJz0mPqcioDI=w2836-h1506" alt="screenshot-3" width="150">
  <img src="https://lh3.googleusercontent.com/5195BJzKqOx70RHIUlevBoiAuDbYdTaL0c38khQynDNKQCpSc317lBHzatjH-F2dsQ=w2836-h1506" alt="screenshot-4" width="150">
  <img src="https://lh3.googleusercontent.com/_5krR5h3Swz3rVYwIEX1xBI6rcKzqoagRkmHxk1gn3dyF8NAUO3CRLHyi9WrySf1Rd0=w2836-h1506" alt="screenshot-5" width="150">
</p>

## :iphone: Try it on Expo

This app is bootstrapped with [Expo](https://expo.io), you can download the Expo app on the [App Store](https://itunes.apple.com/us/app/expo-client/id982107779) or [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent), and enter the url provided below. We have 2 release channels:

| Release Channel | Version | Description                                                                 | Url                                                                        |
| --------------- | ------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Production      | v1.3.1  | Same version as Sh\*\*t! I Smoke on the App Store and Play Store.           | `https://exp.host/@amaurymartiny/shoot-i-smoke?release-channel=production` |
| Staging         | v1.3.1  | Latest version currently in development: newest features, may contain bugs. | `https://exp.host/@amaurymartiny/shoot-i-smoke`                            |

## :hammer: Build it yourself

Before developing the app, you need to fetch your own API tokens for the following services:

| Service                 | Url                                                                                 | Comments                                                |
| ----------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------- |
| World Air Quality Index | http://aqicn.org/api/                                                               | Required.                                               |
| LocationIQ              | https://locationiq.com/                                                             | Optional, but recommended for showing precise location. |
| Algolia Places          | https://community.algolia.com/places/rest.html (`Get Started` button on the bottom) | Optional, lower API rates if not provided.              |
| Google Maps for iOS     | https://developers.google.com/maps/documentation/ios-sdk/start                      | Optional in development.                                |
| Google Maps for Android | https://developers.google.com/maps/documentation/android-api/                       | Optional in development.                                |
