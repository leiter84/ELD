import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, FlatList } from "react-native";

import { styles } from "../../styles";

export default class LogList extends Component {
  static propTypes = {
    data: PropTypes.array
  };

  _renderProps = item => {
    return Object.keys(item).map(key => (
      <View style={[styles.flexRow, styles.flexWrap]} key={key}>
        <Text
          style={[styles.fontLog, styles.fontDarker, styles.flexItem]}
        >
          {key}:
        </Text>

        {typeof item[key] === "object" ? (
          <View>{this._renderProps(item[key])}</View>
        ) : (
          <Text
            style={[
              styles.fontLog,
              styles.fontDarker,
              styles.flexItem2
            ]}
          >
            {item[key]}
          </Text>
        )}
      </View>
    ));
  };

  _renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.padding(10),
          styles.borderDarker,
          { borderStyle: "dashed", borderWidth: 1 }
        ]}
      >
        {this._renderProps(item)}
      </View>
    );
  };

  render() {
    return (
      <View style={[styles.flexItem, styles.flexAlignSelfStretch]}>
        <View style={[styles.bgDarker, styles.padding(10)]}>
          <Text style={[styles.fontLighter]}>Logs from TGW: </Text>
        </View>

        <FlatList
          data={this.props.data}
          keyExtractor={(item, index) => String(index)}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
