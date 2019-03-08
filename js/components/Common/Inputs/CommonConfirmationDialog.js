import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { PropTypes } from "prop-types";

import { styles } from "../../../styles";

const CommonConfirmationDialog = ({
  show,
  title,
  children,
  dismissText,
  onDismiss,
  confirmationText,
  onConfirm,
  confirmationDisabled = false
}) => (
  <Modal isVisible={show}>
    <View style={{ backgroundColor: "white" }}>
      <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
        <Text style={[styles.fontBiggest]}>{title}</Text>
      </View>
      <View style={{ paddingHorizontal: 20 }}>{children}</View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          paddingHorizontal: 20,
          paddingVertical: 20
        }}
      >
        <TouchableOpacity
          style={[styles.padding(5)]}
          onPress={onDismiss}
        >
          <Text style={[styles.fontBold]}>
            {dismissText.toUpperCase()}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.padding(5)]}
          onPress={onConfirm}
          disabled={confirmationDisabled}
        >
          <Text
            style={[
              styles.fontBold,
              { opacity: confirmationDisabled ? 0.5 : 1 }
            ]}
          >
            {confirmationText.toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

CommonConfirmationDialog.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  dismissText: PropTypes.string,
  onDismiss: PropTypes.func,
  confirmationText: PropTypes.string,
  onConfirm: PropTypes.func,
  confirmationDisabled: PropTypes.bool
};

export default CommonConfirmationDialog;
