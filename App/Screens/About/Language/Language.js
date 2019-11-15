

import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Picker, StyleSheet, Text, View } from 'react-native';

import { i18n } from '../../../localization';
import * as names from './names.json';
import * as theme from '../../../utils/theme';

@inject('stores')
@observer
export class Language extends Component {
  handleValueChange = (itemValue) => {
    i18n.locale = itemValue;

    // Reload app for changes to take effect
    this.props.stores.reloadApp();
  }

  render () {
    // Using this hack to show custom picker style
    // https://github.com/facebook/react-native/issues/7817#issuecomment-264851951
    return (
      <View style={styles.container}>
        <Text style={theme.link}>{names[i18n.locale].nativeName}</Text>
        <Picker
          itemStyle={theme.text}
          onValueChange={this.handleValueChange}
          selectedValue={i18n.locale}
          style={styles.picker}
        >
          {Object.keys(i18n.translations).map((lang) =>
            <Picker.Item
              key={lang}
              label={names[lang].nativeName}
              value={lang}
            />)
          }
        </Picker>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0
  },
  picker: {
    height: 1000,
    position: 'absolute',
    top: 0,
    width: 1000
  }
});
