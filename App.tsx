import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StreamChat } from "stream-chat";
import { Chat, OverlayProvider } from "stream-chat-expo";
import { createStackNavigator } from "@react-navigation/stack";

const client = StreamChat.getInstance(YOUR_TOKEN);
const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <OverlayProvider>
          <Chat client={client}>
            <>
              <Stack.Navigator>
                <Stack.Screen component={Home} name="home" />
              </Stack.Navigator>
            </>
          </Chat>
        </OverlayProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const Home: FC = () => (
  <View style={styles.container}>
    <Text>Hello world</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
