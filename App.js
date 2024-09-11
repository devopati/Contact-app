import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import RootStackNavigation from "./navigation/RootStackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <RootStackNavigation />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
