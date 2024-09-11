import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favourites from "../screens/Favourites";
import { SafeAreaView } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import ContactsScreen from "../screens/Contacts";

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        header: () => (
          <SafeAreaView style={{ backgroundColor: "#6495ED", height: 40 }} />
        ),
        tabBarStyle: {
          backgroundColor: "#1b1b1b",
        },
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "Favourites")
            return focused ? (
              <FontAwesome name="star" size={size} color={color} />
            ) : (
              <FontAwesome name="star-o" size={size} color={color} />
            );

          if (route.name === "Contacts")
            return focused ? (
              <MaterialCommunityIcons
                name="contacts"
                size={size}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons
                name="contacts-outline"
                size={size}
                color={color}
              />
            );
        },
      })}
    >
      <Tabs.Screen name="Favourites" component={Favourites} />
      <Tabs.Screen name="Contacts" component={ContactsScreen} />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
