import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNav } from "../context/NavContext";

export function DemoLayout({ title, children }: { title: string; children: React.ReactNode }) {
  const insets = useSafeAreaInsets();
  const { goBack } = useNav();

  return (
    <View className="flex-1 bg-background" style={{ paddingTop: insets.top }}>
      <View className="flex-row items-center px-4 h-14 border-b border-border">
        <Pressable onPress={goBack} className="h-10 w-10 items-center justify-center rounded-xl active:bg-muted -ml-1 mr-2">
          <Text className="text-foreground text-xl">←</Text>
        </Pressable>
        <Text className="text-foreground text-lg font-semibold flex-1">{title}</Text>
      </View>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 20, paddingBottom: 60 + insets.bottom }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    </View>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View className="mb-8">
      <Text className="text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-4">{title}</Text>
      {children}
    </View>
  );
}

export function Row({ children }: { children: React.ReactNode }) {
  return <View className="flex-row flex-wrap gap-2 mb-2">{children}</View>;
}

export function Spacer() {
  return <View className="h-3" />;
}
