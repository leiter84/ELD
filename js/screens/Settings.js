import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";

import { styles } from "../styles";

@inject("appState")
@observer
class Diagnostics extends Component {
  static navigationOptions = () => {
    return {
      title: "Settings"
    };
  };

  static propTypes = {
    appState: PropTypes.any
  };

  render() {
    return (
      <View style={[styles.flexItem]}>
        <View style={[styles.padding(20)]}>
          <Text style={[styles.flexAlignCenter]}>
            Default endpoint
          </Text>
          <TextInput
            style={[
              styles.padding(10),
              styles.fontPrimary,
              styles.borderDarker,
              styles.borderBottom
            ]}
            value={this.props.appState.baseUrl}
            onChangeText={text =>
              this.props.appState.updateBaseUrl(text)
            }
          />
        </View>
      </View>
    );
  }
}

export default Diagnostics;
