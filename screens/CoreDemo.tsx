import React, { useState } from "react";
import { View, Text as RNText } from "react-native";
import { DemoLayout, Section, Row, Spacer } from "./DemoLayout";
import { Text } from "../components/ui/text";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

export function CoreDemo() {
  const [input, setInput] = useState("");
  const [area, setArea] = useState("");

  return (
    <DemoLayout title="Core">
      <Section title="Button Variants">
        <Row>
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </Row>
        <Row>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </Row>
      </Section>

      <Section title="Button Sizes">
        <Row>
          <Button size="sm">Small</Button>
          <Button size="md">Default</Button>
          <Button size="lg">Large</Button>
        </Row>
      </Section>

      <Section title="Button States">
        <Row>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </Row>
      </Section>

      <Section title="Typography">
        <View className="gap-2">
          <Text variant="h1">Heading 1</Text>
          <Text variant="h2">Heading 2</Text>
          <Text variant="h3">Heading 3</Text>
          <Text variant="h4">Heading 4</Text>
          <Text variant="p">Body paragraph text for reading content.</Text>
          <Text variant="muted">Muted helper text</Text>
        </View>
      </Section>

      <Section title="Input">
        <View className="gap-3">
          <View className="gap-1.5">
            <Label>Default</Label>
            <Input value={input} onChangeText={setInput} placeholder="you@example.com" keyboardType="email-address" />
          </View>
          <View className="gap-1.5">
            <Label>Leading Icon</Label>
            <Input
              placeholder="Search..."
              leadingIcon={<RNText style={{ fontSize: 16, color: "#9ca3af" }}>🔍</RNText>}
            />
          </View>
          <View className="gap-1.5">
            <Label>Trailing Icon</Label>
            <Input
              placeholder="Enter password"
              secureTextEntry
              trailingIcon={<RNText style={{ fontSize: 16, color: "#9ca3af" }}>👁</RNText>}
            />
          </View>
          <View className="gap-1.5">
            <Label>Both Icons</Label>
            <Input
              placeholder="0.00"
              keyboardType="numeric"
              leadingIcon={<RNText style={{ fontSize: 14, fontWeight: "600", color: "#9ca3af" }}>$</RNText>}
              trailingIcon={<RNText style={{ fontSize: 12, color: "#9ca3af" }}>USD</RNText>}
            />
          </View>
          <View className="gap-1.5">
            <Label>Ghost with Icon</Label>
            <Input
              variant="ghost"
              placeholder="Search anything..."
              leadingIcon={<RNText style={{ fontSize: 16, color: "#9ca3af" }}>🔍</RNText>}
            />
          </View>
          <View className="gap-1.5">
            <Label>Disabled</Label>
            <Input placeholder="Can't edit this" editable={false} />
          </View>
        </View>
      </Section>

      <Section title="Textarea">
        <View className="gap-1.5">
          <Label>Message</Label>
          <Textarea value={area} onChangeText={setArea} placeholder="Type your message..." />
        </View>
      </Section>
    </DemoLayout>
  );
}
