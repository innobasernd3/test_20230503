import React from "react";
import {View, Text} from "react-native";

function Greeting2(props) {
    return(
        <View>
            <Text>
                안녕하세요  {props.name}
            </Text>
        </View>
    );
};

Greeting2.defaultProps = {
    name: "리액트네이티브",
}

export default Greeting2;