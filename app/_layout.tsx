import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tab)" options={{headerShown:false}}/>
      <Stack.Screen name="index"/>
      <Stack.Screen name="about"/>
    </Stack>
  )
}
