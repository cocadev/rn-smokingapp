import React, { PureComponent } from 'react';
import { Provider } from 'mobx-react';
import * as Font from 'expo-font';

import { RootStore } from './stores';
import { Background as LoadingBackground } from './Screens/Loading/Background';
import { Screens } from './Screens';

const stores = RootStore.create({
  api: undefined,
  error: undefined,
  location: {}
});


export class App extends PureComponent {
  state = {
    fontLoaded: false
  };

  async componentDidMount () {
    await Font.loadAsync({
      'gotham-black': require('../assets/fonts/Gotham-Black.ttf'),
      'gotham-book': require('../assets/fonts/Gotham-Book.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render () {
    const { fontLoaded } = this.state;

    return fontLoaded ? (
      <Provider stores={stores}>
        <Screens />
      </Provider>
    ) : (
      <LoadingBackground />
    );
  }
}
