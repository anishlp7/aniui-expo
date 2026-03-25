import React, { useState } from "react";
import { View } from "react-native";
import { DemoLayout, Section, Row, Spacer } from "./DemoLayout";
import { Text } from "../components/ui/text";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card";
import { Banner } from "../components/ui/banner";
import { Badge } from "../components/ui/badge";
import { Avatar } from "../components/ui/avatar";
import { Chip } from "../components/ui/chip";
import { Rating } from "../components/ui/rating";
import { Separator } from "../components/ui/separator";
import { EmptyState } from "../components/ui/empty-state";
import { Image } from "../components/ui/image";
import { Button } from "../components/ui/button";

export function DataDisplayDemo() {
  const [rating, setRating] = useState(3);
  const [chips, setChips] = useState(["React Native", "NativeWind", "Expo", "TypeScript"]);

  return (
    <DemoLayout title="Data Display">
      <Section title="Card">
        <View className="gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Update</CardTitle>
              <CardDescription>Last updated 2 hours ago</CardDescription>
            </CardHeader>
            <CardContent>
              <Text variant="p">The new dashboard is ready for review. All components have been tested on both iOS and Android.</Text>
            </CardContent>
            <CardFooter>
              <View className="flex-row gap-2">
                <Button size="sm">View Details</Button>
                <Button size="sm" variant="outline">Dismiss</Button>
              </View>
            </CardFooter>
          </Card>

          <Card>
            <CardContent>
              <View className="flex-row items-center gap-3">
                <Avatar fallback="AL" size="md" />
                <View className="flex-1">
                  <Text className="text-foreground font-semibold text-base">Anish Lawrence</Text>
                  <Text className="text-muted-foreground text-sm">Product Designer</Text>
                </View>
                <Badge variant="secondary">Pro</Badge>
              </View>
            </CardContent>
          </Card>
        </View>
      </Section>

      <Section title="Image">
        <View className="gap-3">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=300&fit=crop"
            alt="Landscape"
            width={600}
            height={200}
            rounded="lg"
          />
          <View className="flex-row gap-3">
            <Image
              src="https://i.pravatar.cc/100?img=1"
              alt="User 1"
              width={60}
              height={60}
              rounded="full"
            />
            <Image
              src="https://i.pravatar.cc/100?img=2"
              alt="User 2"
              width={60}
              height={60}
              rounded="full"
            />
            <Image
              src="https://i.pravatar.cc/100?img=3"
              alt="User 3"
              width={60}
              height={60}
              rounded="full"
            />
          </View>
        </View>
      </Section>

      <Section title="Banner">
        <View className="gap-3">
          <Banner variant="info" action={{ label: "Learn more", onPress: () => {} }}>
            A new version is available. Update now for the latest features.
          </Banner>
          <Banner variant="success" onDismiss={() => {}}>
            Your payment was processed successfully!
          </Banner>
          <Banner variant="warning">
            Your trial expires in 3 days. Upgrade to continue.
          </Banner>
          <Banner variant="destructive">
            Unable to connect to the server. Check your network.
          </Banner>
        </View>
      </Section>

      <Section title="Badge">
        <View className="gap-3">
          <Row>
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </Row>
          <View className="rounded-xl border border-border p-4 gap-3">
            <Text className="text-foreground font-medium text-sm">Status Examples</Text>
            <View className="flex-row flex-wrap gap-2">
              <Badge variant="secondary">Draft</Badge>
              <Badge>Published</Badge>
              <Badge variant="outline">Archived</Badge>
              <Badge variant="destructive">Expired</Badge>
            </View>
          </View>
        </View>
      </Section>

      <Section title="Avatar">
        <View className="gap-4">
          <View className="flex-row items-end gap-4">
            <View className="items-center gap-1">
              <Avatar fallback="SM" size="sm" />
              <Text variant="muted">SM</Text>
            </View>
            <View className="items-center gap-1">
              <Avatar fallback="MD" size="md" />
              <Text variant="muted">MD</Text>
            </View>
            <View className="items-center gap-1">
              <Avatar fallback="LG" size="lg" />
              <Text variant="muted">LG</Text>
            </View>
          </View>
          <View className="rounded-xl border border-border p-4">
            <Text className="text-foreground font-medium text-sm mb-3">Team</Text>
            <View className="flex-row" style={{ gap: -8 }}>
              <Avatar fallback="AL" size="md" />
              <Avatar fallback="JD" size="md" />
              <Avatar fallback="MK" size="md" />
              <Avatar fallback="RN" size="md" />
              <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#e4e4e7", alignItems: "center", justifyContent: "center" }}>
                <Text className="text-muted-foreground text-xs font-medium">+5</Text>
              </View>
            </View>
          </View>
        </View>
      </Section>

      <Section title="Chip">
        <View className="gap-3">
          <Row>
            <Chip>Default</Chip>
            <Chip variant="secondary">Secondary</Chip>
            <Chip variant="outline">Outline</Chip>
            <Chip variant="destructive">Error</Chip>
          </Row>
          <View className="rounded-xl border border-border p-4 gap-3">
            <Text className="text-foreground font-medium text-sm">Tags (dismissable)</Text>
            <View className="flex-row flex-wrap gap-2">
              {chips.map((chip) => (
                <Chip key={chip} variant="secondary" onClose={() => setChips(chips.filter((c) => c !== chip))}>
                  {chip}
                </Chip>
              ))}
            </View>
            {chips.length === 0 && (
              <Button variant="ghost" size="sm" onPress={() => setChips(["React Native", "NativeWind", "Expo", "TypeScript"])}>
                Reset tags
              </Button>
            )}
          </View>
        </View>
      </Section>

      <Section title="Rating">
        <View className="gap-4">
          <View className="rounded-xl border border-border p-4 gap-3">
            <Text className="text-foreground font-medium text-sm">Tap to rate</Text>
            <View className="flex-row items-center gap-3">
              <Rating value={rating} onChange={setRating} size="lg" />
              <Text className="text-muted-foreground text-sm">{rating}/5</Text>
            </View>
          </View>
          <View className="gap-2">
            <View className="flex-row items-center gap-2">
              <Rating value={5} readOnly size="sm" />
              <Text className="text-muted-foreground text-xs">Excellent</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Rating value={4} readOnly size="sm" />
              <Text className="text-muted-foreground text-xs">Great</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Rating value={3} readOnly size="sm" />
              <Text className="text-muted-foreground text-xs">Good</Text>
            </View>
          </View>
        </View>
      </Section>

      <Section title="Separator">
        <View className="rounded-xl border border-border p-4">
          <Text className="text-foreground font-medium">Section One</Text>
          <Text className="text-muted-foreground text-sm mt-1">Some content above the separator.</Text>
          <Spacer />
          <Separator />
          <Spacer />
          <Text className="text-foreground font-medium">Section Two</Text>
          <Text className="text-muted-foreground text-sm mt-1">Some content below the separator.</Text>
        </View>
      </Section>

      <Section title="Empty State">
        <View className="rounded-xl border border-border overflow-hidden">
          <EmptyState
            title="No projects yet"
            description="Create your first project to get started building something amazing."
            action={{ label: "Create Project", onPress: () => {} }}
          />
        </View>
      </Section>
    </DemoLayout>
  );
}
