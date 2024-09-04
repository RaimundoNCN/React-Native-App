import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2d1fee",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Calculo de IMC" }} />
      <Stack.Screen name="pages/details/index" options={{ title: "Detalhes" }} />
    </Stack>
  );
}
