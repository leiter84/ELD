import { StyleSheet } from "react-native";
import * as Layouts from "./layout";
import * as Spacing from "./spacing";
import * as Sizing from "./sizing";
import * as Fonts from "./fonts";
import * as Colors from "./colors";
import * as Borders from "./borders";

export const styles = StyleSheet.create({
  ...Layouts,
  ...Spacing,
  ...Sizing,
  ...Fonts,
  ...Colors,
  ...Borders
});
