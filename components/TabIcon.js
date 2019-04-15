import React from "react";
import { Ionicons } from "@expo/vector-icons";

const TabIcon = ({ name, size = 34 }) => (
  <Ionicons size={size} name={name} color={"#f39c12"} />
);

export default TabIcon;
