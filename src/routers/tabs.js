import { useState } from "react";

import { BottomNavigation } from "react-native-paper";

export default TabsScreens = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "",
      title: "",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    {
      key: "",
      title: "",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    key: key,
    key: key,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
