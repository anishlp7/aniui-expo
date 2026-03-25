import React, { useState } from "react";
import { View } from "react-native";
import { DemoLayout, Section, Spacer } from "./DemoLayout";
import { Text } from "../components/ui/text";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Accordion, AccordionItem } from "../components/ui/accordion";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "../components/ui/collapsible";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export function NavigationDemo() {
  const [colOpen, setColOpen] = useState(false);

  return (
    <DemoLayout title="Navigation">
      <Section title="Tabs">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <View className="rounded-xl border border-border p-4 mt-3 gap-2">
              <Text variant="h3">Overview</Text>
              <Text variant="p">Welcome to your dashboard. See recent activity and key metrics at a glance.</Text>
            </View>
          </TabsContent>
          <TabsContent value="analytics">
            <View className="rounded-xl border border-border p-4 mt-3 gap-2">
              <Text variant="h3">Analytics</Text>
              <Text variant="p">Track engagement, performance, and growth trends over time.</Text>
            </View>
          </TabsContent>
          <TabsContent value="settings">
            <View className="rounded-xl border border-border p-4 mt-3 gap-2">
              <Text variant="h3">Settings</Text>
              <Text variant="p">Configure preferences, permissions, and integrations.</Text>
            </View>
          </TabsContent>
        </Tabs>
      </Section>

      <Section title="Accordion">
        <View className="rounded-xl border border-border overflow-hidden px-4">
          <Accordion>
            <AccordionItem value="item-1" trigger="What is AniUI?">
              <Text variant="p">A collection of 47 beautiful, accessible React Native components built with NativeWind and Tailwind CSS.</Text>
            </AccordionItem>
            <AccordionItem value="item-2" trigger="How do I add components?">
              <Text variant="p">Run npx @aniui/cli add followed by the component name. Files are copied into your project for full control.</Text>
            </AccordionItem>
            <AccordionItem value="item-3" trigger="Does it support dark mode?">
              <Text variant="p">Yes! All components use CSS variables. Dark mode works through the .dark class on your root element.</Text>
            </AccordionItem>
          </Accordion>
        </View>
      </Section>

      <Section title="Collapsible">
        <View className="rounded-xl border border-border p-4">
          <Collapsible open={colOpen} onOpenChange={setColOpen}>
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <Text className="text-foreground font-medium">Dependencies</Text>
                <Badge variant="secondary">3</Badge>
              </View>
              <CollapsibleTrigger>
                <Button variant="ghost" size="sm">{colOpen ? "Hide" : "Show"}</Button>
              </CollapsibleTrigger>
            </View>
            <View className="mt-3 rounded-lg bg-muted/50 p-3">
              <Text className="text-foreground text-sm font-mono">@aniui/cli</Text>
            </View>
            <CollapsibleContent>
              <View className="mt-2 rounded-lg bg-muted/50 p-3">
                <Text className="text-foreground text-sm font-mono">react-native-reanimated</Text>
              </View>
              <View className="mt-2 rounded-lg bg-muted/50 p-3">
                <Text className="text-foreground text-sm font-mono">@gorhom/bottom-sheet</Text>
              </View>
            </CollapsibleContent>
          </Collapsible>
        </View>
      </Section>
    </DemoLayout>
  );
}
