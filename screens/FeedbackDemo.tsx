import React, { useState } from "react";
import { View } from "react-native";
import { DemoLayout, Section, Spacer } from "./DemoLayout";
import { Text } from "../components/ui/text";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Progress } from "../components/ui/progress";
import { Spinner } from "../components/ui/spinner";
import { Skeleton } from "../components/ui/skeleton";
import { Button } from "../components/ui/button";
import { useToast } from "../components/ui/toast";

export function FeedbackDemo() {
  const [progress, setProgress] = useState(45);
  const { toast } = useToast();

  return (
    <DemoLayout title="Feedback">
      <Section title="Alert">
        <View className="gap-3">
          <Alert variant="default" title="Heads up!">
            <AlertDescription>This is an informational alert.</AlertDescription>
          </Alert>
          <Alert variant="destructive" title="Error">
            <AlertDescription>Something went wrong. Try again.</AlertDescription>
          </Alert>
          <Alert variant="success" title="Success">
            <AlertDescription>Your changes have been saved.</AlertDescription>
          </Alert>
          <Alert variant="warning" title="Warning">
            <AlertDescription>This action cannot be undone.</AlertDescription>
          </Alert>
        </View>
      </Section>

      <Section title="Toast">
        <View className="flex-row gap-2">
          <Button onPress={() => toast({ title: "Saved!", description: "Changes saved successfully." })}>
            Success Toast
          </Button>
          <Button variant="destructive" onPress={() => toast({ title: "Deleted", description: "Item removed.", variant: "destructive" })}>
            Error Toast
          </Button>
        </View>
      </Section>

      <Section title="Progress">
        <View className="rounded-xl border border-border p-4">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-foreground font-medium text-sm">Upload progress</Text>
            <Text className="text-primary font-semibold text-sm">{progress}%</Text>
          </View>
          <Progress value={progress} />
          <Spacer />
          <View className="flex-row gap-2">
            <Button variant="outline" size="sm" onPress={() => setProgress(Math.max(0, progress - 15))}>- 15</Button>
            <Button variant="outline" size="sm" onPress={() => setProgress(Math.min(100, progress + 15))}>+ 15</Button>
            <Button variant="ghost" size="sm" onPress={() => setProgress(0)}>Reset</Button>
          </View>
        </View>
      </Section>

      <Section title="Spinner">
        <View className="flex-row items-end gap-8">
          <View className="items-center gap-2">
            <Spinner size="sm" />
            <Text variant="muted">SM</Text>
          </View>
          <View className="items-center gap-2">
            <Spinner size="md" />
            <Text variant="muted">MD</Text>
          </View>
          <View className="items-center gap-2">
            <Spinner size="lg" />
            <Text variant="muted">LG</Text>
          </View>
        </View>
      </Section>

      <Section title="Skeleton">
        <View className="rounded-xl border border-border p-4 gap-4">
          <View className="flex-row items-center gap-3">
            <Skeleton className="h-12 w-12 rounded-full" />
            <View className="flex-1 gap-2">
              <Skeleton className="h-4 w-3/4 rounded-md" />
              <Skeleton className="h-3 w-1/2 rounded-md" />
            </View>
          </View>
          <Skeleton className="h-36 w-full rounded-xl" />
          <View className="flex-row gap-2">
            <Skeleton className="h-9 flex-1 rounded-lg" />
            <Skeleton className="h-9 flex-1 rounded-lg" />
          </View>
        </View>
      </Section>
    </DemoLayout>
  );
}
