import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={}
        name="Login"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={}
        name="crearCuenta"
        options={{ headerShown: false }}
      />
      {/* importar los tabs */}
      <Stack.Screen
        component={}
        name="tabs"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
