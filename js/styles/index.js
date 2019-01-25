import { StyleSheet } from "react-native";
import * as Layouts from "./layout";
import * as Spacing from "./spacing";
import * as Sizing from "./sizing";
import * as Fonts from "./fonts";
/*import * as Borders from "./borders";
import * as Backgrounds from "./backgrounds"; */

export const styles = StyleSheet.create({
  ...Layouts,
  ...Spacing,
  ...Sizing,
  ...Fonts
  /*...Borders,
  ...Backgrounds */
});
