import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import ActivityLog from "./Components/ActivityLog/ActivityLog";
import Login from "./Components/AuthComp/Login";
import Signup from "./Components/AuthComp/Signup";
import AddMeal from "./Components/Dashboard/AddMeal";
import AddUtility from "./Components/Dashboard/AddUtility";
import Dashboard from "./Components/Dashboard/Dashboard";
import UpdateMeal from "./Components/Dashboard/UpdateMeal";
import UpdateUtility from "./Components/Dashboard/UpdateUtility";
import UtilityHistory from "./Components/Dashboard/UtilityHistory";
import AppContextProvider from "./Store/AppContext";

// export const AppContext = createContext();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
    // background: "white",
  },
};

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer theme={MyTheme}>
        <View style={styles.appContainer}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="ActivityLog" component={ActivityLog} />
            <Stack.Screen name="AddMeal" component={AddMeal} />
            <Stack.Screen name="UpdateMeal" component={UpdateMeal} />
            <Stack.Screen name="AddUtility" component={AddUtility} />
            <Stack.Screen name="UpdateUtility" component={UpdateUtility} />
            <Stack.Screen name="UtilityHistory" component={UtilityHistory} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // paddingVertical: 50,
    // paddingHorizontal: 10,
  },
  bottomNavigation: {
    flexDirection: "row",
  },
});
