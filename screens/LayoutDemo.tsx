import React from "react";
import { View } from "react-native";
import { DemoLayout, Section } from "./DemoLayout";
import { Text } from "../components/ui/text";
import { List, ListItem, ListItemTitle, ListItemDescription } from "../components/ui/list";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../components/ui/table";
import { Carousel } from "../components/ui/carousel";
import { Separator } from "../components/ui/separator";
import { FAB } from "../components/ui/fab";

export function LayoutDemo() {
  return (
    <DemoLayout title="Layout">
      <Section title="List">
        <View className="rounded-xl border border-border overflow-hidden">
          <List>
            <ListItem>
              <View className="flex-1">
                <ListItemTitle>Notifications</ListItemTitle>
                <ListItemDescription>Manage alert preferences</ListItemDescription>
              </View>
              <Text className="text-muted-foreground">›</Text>
            </ListItem>
            <ListItem>
              <View className="flex-1">
                <ListItemTitle>Privacy</ListItemTitle>
                <ListItemDescription>Control data sharing</ListItemDescription>
              </View>
              <Text className="text-muted-foreground">›</Text>
            </ListItem>
            <ListItem>
              <View className="flex-1">
                <ListItemTitle>Storage</ListItemTitle>
                <ListItemDescription>2.4 GB of 15 GB used</ListItemDescription>
              </View>
              <Text className="text-muted-foreground">›</Text>
            </ListItem>
            <ListItem className="border-b-0">
              <View className="flex-1">
                <ListItemTitle>About</ListItemTitle>
                <ListItemDescription>Version 1.0.0</ListItemDescription>
              </View>
              <Text className="text-muted-foreground">›</Text>
            </ListItem>
          </List>
        </View>
      </Section>

      <Section title="Table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Alice</TableCell>
              <TableCell>Engineer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bob</TableCell>
              <TableCell>Designer</TableCell>
              <TableCell>Away</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Carol</TableCell>
              <TableCell>PM</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Section>

      <Section title="Carousel">
        <Carousel
          data={[
            <View className="items-center justify-center py-12 bg-primary/5 rounded-2xl mx-2">
              <View className="h-14 w-14 rounded-full bg-primary/10 items-center justify-center mb-3">
                <Text className="text-primary font-bold text-xl">1</Text>
              </View>
              <Text className="text-foreground font-semibold">First Slide</Text>
              <Text className="text-muted-foreground text-sm mt-1">Swipe to see more</Text>
            </View>,
            <View className="items-center justify-center py-12 bg-violet-500/5 rounded-2xl mx-2">
              <View className="h-14 w-14 rounded-full bg-violet-500/10 items-center justify-center mb-3">
                <Text className="text-violet-500 font-bold text-xl">2</Text>
              </View>
              <Text className="text-foreground font-semibold">Second Slide</Text>
              <Text className="text-muted-foreground text-sm mt-1">Beautiful cards</Text>
            </View>,
            <View className="items-center justify-center py-12 bg-emerald-500/5 rounded-2xl mx-2">
              <View className="h-14 w-14 rounded-full bg-emerald-500/10 items-center justify-center mb-3">
                <Text className="text-emerald-500 font-bold text-xl">3</Text>
              </View>
              <Text className="text-foreground font-semibold">Third Slide</Text>
              <Text className="text-muted-foreground text-sm mt-1">With dot indicators</Text>
            </View>,
          ]}
        />
      </Section>

      <Section title="FAB">
        <View className="h-48 rounded-2xl bg-muted/30 border border-border items-center justify-center relative overflow-hidden">
          <Text variant="muted">Content area</Text>
          <View className="absolute bottom-4 right-4">
            <FAB onPress={() => {}} position="none" label="Create" />
          </View>
        </View>
      </Section>
    </DemoLayout>
  );
}
