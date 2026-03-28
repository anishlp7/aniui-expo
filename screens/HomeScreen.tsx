import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNav, Screen } from "../context/NavContext";

const categories: { title: string; screen: Screen; icon: string; color: string }[] = [
  { title: "Core", screen: "core", icon: "▣", color: "#3b82f6" },
  { title: "Data Display", screen: "data-display", icon: "◈", color: "#8b5cf6" },
  { title: "Forms", screen: "forms", icon: "☰", color: "#10b981" },
  { title: "Feedback", screen: "feedback", icon: "◉", color: "#f59e0b" },
  { title: "Overlays", screen: "overlays", icon: "◻", color: "#ef4444" },
  { title: "Layout", screen: "layout", icon: "▦", color: "#06b6d4" },
  { title: "Navigation", screen: "navigation", icon: "⇄", color: "#ec4899" },
  { title: "Charts", screen: "charts", icon: "◎", color: "#f97316" },
];

export function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { navigate } = useNav();

  return (
    <View className="flex-1 bg-background" style={{ paddingTop: insets.top }}>
      <View className="px-5 pt-6 pb-4">
        <Text className="text-foreground text-3xl font-bold">AniUI</Text>
        <Text className="text-muted-foreground text-base mt-1">54 components — tap a category to explore</Text>
      </View>
      <ScrollView className="flex-1" contentContainerStyle={{ padding: 20, paddingBottom: 40 + insets.bottom }}>
        <View className="gap-3">
          {categories.map((cat) => (
            <Pressable
              key={cat.screen}
              className="flex-row items-center rounded-2xl border border-border bg-card p-4 active:bg-muted"
              onPress={() => navigate(cat.screen)}
            >
              <View style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: cat.color + "15", alignItems: "center", justifyContent: "center", marginRight: 14 }}>
                <Text style={{ fontSize: 20, color: cat.color }}>{cat.icon}</Text>
              </View>
              <Text className="text-foreground text-base font-semibold flex-1">{cat.title}</Text>
              <Text className="text-muted-foreground text-lg">›</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
