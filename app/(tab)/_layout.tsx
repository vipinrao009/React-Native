import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, useWindowDimensions, View } from "react-native";

const _layout = () => {
  const {height} = useWindowDimensions()
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: height*0.11,
          paddingTop: 15,
          paddingBottom:12
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Chat",
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
          title: "Chat",
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
          tabBarLabel: () => (
            <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 10 }}>
              Community
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
          title: "Calls",
          tabBarLabel:()=>(
            <Text style={{fontWeight:'bold', marginTop:10, fontSize:16}}>Calls</Text>
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
