import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import Singup from "../screens/singup";
import TabsScreens from "./tabs";
import CrearMateria from "../screens/newsubjet";

const Stack = createNativeStackNavigator();

export default StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Login}
        name="Login"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Singup}
        name="Singup"
        options={{ headerShown: false }}
      />
      {/* importar los tabs */}
      <Stack.Screen
        component={TabsScreens}
        name="tabs"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={CrearMateria}
        name="CreateMateria"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
