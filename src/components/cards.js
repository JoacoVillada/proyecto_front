import { Text } from "react-native";

//Dar estilos a la tarjeta

export const Card = ({ nombre }) => {
  return (
    <view>
      <Text>{nombre}</Text>
    </view>
  );
};
