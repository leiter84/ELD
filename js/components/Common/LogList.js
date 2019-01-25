import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, FlatList } from "react-native";

import { styles } from "../../styles";

export default class LogList extends Component {
  static propTypes = {
    data: PropTypes.array
  };

  _renderItem = ({ item }) => {
    return (
      <Text style={[styles.fontLog, styles.fontDarker]}>
        Logging information {item.text}
      </Text>
    );
  };

  render() {
    console.log(this.props.data);
    return (
      <View style={[styles.flexAlignSelfStretch]}>
        <View style={[styles.bgDarker, styles.padding(10)]}>
          <Text style={[styles.fontLighter]}>Logs from TGW</Text>
        </View>

        <FlatList
          data={this.props.data}
          keyExtractor={item => String(item.id)}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
