import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Anime Hunter" }} />
      <Stack.Screen name="search" options={{ title: "Cari Karakter" }} />
      <Stack.Screen name="favorites" options={{ title: "Favorit" }} />
      <Stack.Screen name="character/[id]" options={{ title: "Detail Karakter" }} />
    </Stack>
  );
}