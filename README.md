<h1 align="center"><b> Non Smoking React Native App </b> </h1>

<p align="center">Know how many cigarettes you smoke based on the pollution of your location.</p>

<p align="center"><i>"How to save a life?" - The Smoking</i> </p>

<p align="center">
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/progress-40%25-brightgreen.svg" alt="PRs Welcome">
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/contribuition-welcome-brightgreen.svg" alt="PRs Welcome">
  </a>
  <a href="https://saythanks.io/to/wendelfreitas">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>
<a href="https://www.repostatus.org/#wip"><img src="https://www.repostatus.org/badges/latest/wip.svg" alt="Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public." /></a>  
</p>

<p align="center">
  <a href="#blush-overview">Overview</a> •
  <a href="#dizzy-roadmap">Roadmap</a> •
  <a href="#wrench-install-instructions">Install</a> •
  <a href="#zap-tech-stack">Tech Stack</a> •
  <a href="#iphone-Test">Test</a> •
  <a href="#eyes-version">Version</a> 
</p>

<p align="center">
  <kbd>
    <img width="240" style="border-radius: 5px" height="450" src="screenshots/1.jpg" alt="1">
  </kbd>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <kbd>
    <img width="240" style="border-radius: 5px" height="450" src="screenshots/2.jpg" alt="2">
  </kbd>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <kbd>
    <img width="240" style="border-radius: 5px" height="450" src="screenshots/3.jpg" alt="3">
  </kbd>
  <br/><br/>
  <kbd>
    <img width="240" style="border-radius: 5px" height="450" src="screenshots/4.jpg" alt="4">
  </kbd>
    &nbsp;&nbsp;&nbsp;&nbsp;
  <kbd>
    <img width="240" style="border-radius: 5px" height="450" src="screenshots/5.jpg" alt="5">
  </kbd>
    &nbsp;&nbsp;&nbsp;&nbsp;
  <kbd>
    <img width="240" style="border-radius: 5px" height="450" src="screenshots/6.jpg" alt="6">
  </kbd>
</p>

## :blush: **Overview?**

Did you know that you may be smoking up to 20 cigarettes per day, just for living in a big city?

Quite scary, right? "Sh**t! I Smoke" was what we said when we first saw this article about the equivalence between air pollution and cigarette smoking. We were smoking between up to 8 cigarettes everyday without even touching one!

So we created this quick application for you to know how many cigarettes you are smoking in your city. You can share the number and help raise awareness about the risks of air pollution.

## :dizzy: **Roadmap**

-   [x] Make it work on IOS
-   [x] Make it work on Android
-   [x] Make it work on Expo
-   [x] Transform into responsive
-   [x] Update to latest React Native version

## :wrench: **Install instructions**

### Getting Started

#### 1) Clone & Install Dependencies

- 1.1) `git clone https://github.com/kingofdevs/rn-smoking.git`
- 1.2) `cd https://github.com/kingofdevs/rn-smoking` - cd into your newly created project directory.
- 1.3) Install NPM packages with `yarn install`
        **Note:** NPM has issues with React Native so `yarn` is recommended over `npm`.
- 1.4) **[iOS]** `cd ios` and run `pod install` - if you don't have CocoaPods you can follow [these instructions](https://guides.cocoapods.org/using/getting-started.html#getting-started) to install it.
- 1.5) **[Android]** If you haven't already generated a `debug.keystore` file you will need to complete this step from within the `/android/app` folder. Run `keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`

#### 2) Start your app

- 2.1) **[EXPO]** Build and run the iOS app, run `expo run-ios` (to run on simulator) or `expo --device` (to run on real device) from the root of your project. The first build will take some time.
## :zap: **Tech Stack**

<h1 align="center">
  <img src="https://apprecs.org/gp/images/app-icons/300/d8/host.exp.exponent.jpg" alt="Expo" height="100" width="100">
  <img src="https://ionicframework.com/docs/assets/icons/logo-react-icon.png" alt="RN" height="100" width="100">
  <img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-512.png" alt="Firebase" height="100" width="100">
  <img src="https://icon-library.net/images/png-map-icon/png-map-icon-26.jpg" alt="Map" height="100" width="100">
  <img src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png" alt="Facebook" height="100" width="100">

  <br>
</h1>

-   [React Native](https://github.com/facebook/react-native)
-   [Expo](https://github.com/expo/expo)
-   [Redux](https://github.com/reduxjs/react-redux)
-   [Redux-Persist](https://github.com/rt2zz/redux-persist)
-   [Lottie React Native](https://github.com/react-native-community/lottie-react-native)
-   [Antd Mobile RN](https://github.com/ant-design/ant-design-mobile-rn)
-   [React Native Firebase](https://github.com/invertase/react-native-firebase)
-   [Eslint](https://eslint.org/)
-   [Mobx](https://github.com/mobxjs/mobx-react)

## :iphone: **Test**

- [x] Test on Android
- [x] Test on iOS

## :eyes: **Version**
- [ ] React-Native 
- [x] Expo 35
