import React from 'react';
import {Text} from "react-native";
import styles from "./styles";

const Title = ({text, style, ...props}) => (
    <Text style={[styles.title, style]} {...props}>{text}</Text>
);

export default Title;