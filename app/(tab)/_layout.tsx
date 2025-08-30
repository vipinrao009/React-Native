import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, useWindowDimensions, View } from "react-native";

const _layout = () => {
  const { height } = useWindowDimensions();
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: height * 0.11,
          paddingTop: 15,
          paddingBottom: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Chat",
          headerTitle: "WhatsApp",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
            color: "green",
            letterSpacing: 2,
          },
          headerStyle: {
            backgroundColor: "#ffffffff",
          },
          headerRight: () => (
            <View style={{ display: "flex", flexDirection: "row" }}>
              <MaterialCommunityIcons
                style={{ marginRight: 20 }}
                name="qrcode-scan"
                size={24}
                color="black"
              />

              <Feather
                name="camera"
                style={{ marginRight: 20 }}
                size={24}
                color="black"
              />

              <Entypo
                name="dots-three-vertical"
                style={{ marginRight: 20 }}
                size={20}
                color="black"
              />
            </View>
          ),
          tabBarLabel: () => (
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontWeight: "bold",
                marginTop: 12,
              }}
            >
              Chats
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                {
                  height: 50,
                  width: 80,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                },
                focused && { backgroundColor: "#c2efcfff" },
              ]}
            >
              <MaterialIcons
                name={focused ? "chat" : "chat"}
                size={34}
                color={focused ? "green" : "black"}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="updates"
        options={{
          headerTitle: "Updates",
          headerTitleStyle: {
            fontSize: 20,
            letterSpacing: 2,
            fontWeight: "semibold",
          },

          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                style={{ marginRight: 20 }}
                name="qrcode-scan"
                size={24}
                color="black"
              />
              
              <AntDesign
                style={{ marginRight: 20 }}
                name="search1"
                size={24}
                color="black"
              />

              <Entypo
                name="dots-three-vertical"
                size={20}
                style={{ marginRight: 20 }}
              />
            </View>
          ),
          tabBarLabel: () => (
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontWeight: "bold",
                marginTop: 12,
              }}
            >
              Updates
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                {
                  height: 50,
                  width: 80,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                },
                focused && { backgroundColor: "#c2efcfff" },
              ]}
            >
              <MaterialIcons
                name="update"
                size={34}
                color={focused ? "green" : "black"}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="community"
        options={{
          headerTitle:'Communities',
          headerTitleStyle:{
            fontSize:20,
            letterSpacing:2
          },
          headerRight:()=>(
            <View style={{flexDirection:'row'}}>
              <MaterialCommunityIcons
                style={{ marginRight: 20 }}
                name="qrcode-scan"
                size={24}
                color="black"
              />

              <Entypo
                name="dots-three-vertical"
                size={20}
                style={{ marginRight: 20 }}
              />
            </View>
          ),
          tabBarLabel: () => (
            <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 10 }}>
              Communities
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                {
                  height: 50,
                  width: 80,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
                },
                focused && { backgroundColor: "#c2efcfff" },
              ]}
            >
              <Ionicons
                name={focused ? "people" : "people-outline"}
                size={34}
                color={focused ? "green" : "black"}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="calls"
        options={{
          headerTitle:'Calls',
          headerTitleStyle:{
            fontSize:20,
            letterSpacing:2,
            fontWeight:"semibold"
          },
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                style={{ marginRight: 20 }}
                name="qrcode-scan"
                size={24}
                color="black"
              />
              
              <AntDesign
                style={{ marginRight: 20 }}
                name="search1"
                size={24}
                color="black"
              />

              <Entypo
                name="dots-three-vertical"
                size={20}
                style={{ marginRight: 20 }}
              />
            </View>
          ),
          tabBarLabel: () => (
            <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 16 }}>
              Calls
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                {
                  height: 50,
                  width: 80,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
                },
                focused && { backgroundColor: "#c2efcfff" },
              ]}
            >
              <Ionicons
                name={focused ? "call" : "call-outline"}
                size={34}
                color={focused ? "green" : "black"}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
