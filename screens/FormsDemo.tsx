import React, { useState } from "react";
import { View, Text as RNText, Pressable } from "react-native";
import { DemoLayout, Section, Spacer } from "./DemoLayout";
import { Text } from "../components/ui/text";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Switch } from "../components/ui/switch";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Slider } from "../components/ui/slider";
import { Toggle } from "../components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "../components/ui/toggle-group";
import { Stepper } from "../components/ui/stepper";
import { InputOTP } from "../components/ui/input-otp";
import { SearchBar } from "../components/ui/search-bar";
import { Calendar } from "../components/ui/calendar";
import { DatePicker } from "../components/ui/date-picker";
import { SegmentedControl } from "../components/ui/segmented-control";
import { Select } from "../components/ui/select";

export function FormsDemo() {
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [switchOn, setSwitchOn] = useState(true);
  const [notifOn, setNotifOn] = useState(false);
  const [radio, setRadio] = useState("option1");
  const [slider, setSlider] = useState(60);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [align, setAlign] = useState("left");
  const [qty, setQty] = useState(2);
  const [otp, setOtp] = useState("");
  const [search, setSearch] = useState("");
  const [selDate, setSelDate] = useState<Date | undefined>();
  const [segment, setSegment] = useState("Daily");
  const [selectVal, setSelectVal] = useState<string | undefined>();

  return (
    <DemoLayout title="Forms & Selection">
      <Section title="Checkbox">
        <View className="rounded-xl border border-border overflow-hidden">
          <View className="flex-row items-center px-4 py-3 border-b border-border">
            <Checkbox checked={check1} onCheckedChange={setCheck1} className="mr-3" />
            <RNText className="text-foreground text-base">Accept terms and conditions</RNText>
          </View>
          <View className="flex-row items-center px-4 py-3">
            <Checkbox checked={check2} onCheckedChange={setCheck2} className="mr-3" />
            <RNText className="text-foreground text-base">Subscribe to newsletter</RNText>
          </View>
        </View>
      </Section>

      <Section title="Switch">
        <View className="rounded-xl border border-border overflow-hidden">
          <View className="flex-row items-center justify-between px-4 py-3 border-b border-border">
            <View className="flex-1 mr-3">
              <RNText className="text-foreground text-base font-medium">Dark Mode</RNText>
              <RNText className="text-muted-foreground text-sm">Enable dark theme</RNText>
            </View>
            <Switch value={switchOn} onValueChange={setSwitchOn} />
          </View>
          <View className="flex-row items-center justify-between px-4 py-3">
            <View className="flex-1 mr-3">
              <RNText className="text-foreground text-base font-medium">Notifications</RNText>
              <RNText className="text-muted-foreground text-sm">Receive push alerts</RNText>
            </View>
            <Switch value={notifOn} onValueChange={setNotifOn} />
          </View>
        </View>
      </Section>

      <Section title="Radio Group">
        <RadioGroup value={radio} onValueChange={setRadio}>
          <View className="rounded-xl border border-border overflow-hidden">
            {([["option1", "Free plan"], ["option2", "Pro — $9/mo"], ["option3", "Enterprise — Custom"]] as const).map(([val, label], i, arr) => (
              <Pressable key={val} className={`flex-row items-center px-4 py-3${i < arr.length - 1 ? " border-b border-border" : ""}`} onPress={() => setRadio(val)}>
                <RadioGroupItem value={val} />
                <RNText className={`text-base ml-3 ${radio === val ? "text-foreground font-medium" : "text-muted-foreground"}`}>{label}</RNText>
              </Pressable>
            ))}
          </View>
        </RadioGroup>
      </Section>

      <Section title="Slider">
        <View className="rounded-xl border border-border p-4">
          <View className="flex-row items-center justify-between mb-3">
            <Label>Volume</Label>
            <RNText className="text-primary font-semibold text-base">{slider}%</RNText>
          </View>
          <Slider value={slider} onValueChange={setSlider} min={0} max={100} />
        </View>
      </Section>

      <Section title="Toggle">
        <View className="flex-row gap-2">
          <Toggle pressed={bold} onPressedChange={setBold} variant="outline">
            <RNText className={bold ? "text-accent-foreground font-bold text-base" : "text-muted-foreground font-bold text-base"}>B</RNText>
          </Toggle>
          <Toggle pressed={italic} onPressedChange={setItalic} variant="outline">
            <RNText className={italic ? "text-accent-foreground italic text-base" : "text-muted-foreground italic text-base"}>I</RNText>
          </Toggle>
        </View>
      </Section>

      <Section title="Toggle Group">
        <ToggleGroup value={align} onValueChange={(v) => v && setAlign(v)}>
          <ToggleGroupItem value="left"><RNText className="text-sm">Left</RNText></ToggleGroupItem>
          <ToggleGroupItem value="center"><RNText className="text-sm">Center</RNText></ToggleGroupItem>
          <ToggleGroupItem value="right"><RNText className="text-sm">Right</RNText></ToggleGroupItem>
        </ToggleGroup>
      </Section>

      <Section title="Stepper">
        <View className="flex-row items-center gap-4">
          <Stepper value={qty} onChange={setQty} min={1} max={10} />
          <Text variant="p">{qty} items</Text>
        </View>
      </Section>

      <Section title="Segmented Control">
        <SegmentedControl
          options={["Daily", "Weekly", "Monthly"]}
          value={segment}
          onValueChange={setSegment}
        />
      </Section>

      <Section title="Select">
        <Select
          value={selectVal}
          onValueChange={setSelectVal}
          placeholder="Choose a framework..."
          options={[
            { label: "React Native", value: "rn" },
            { label: "Flutter", value: "flutter" },
            { label: "SwiftUI", value: "swiftui" },
            { label: "Jetpack Compose", value: "compose" },
          ]}
        />
      </Section>

      <Section title="Date Picker">
        <DatePicker value={selDate} onChange={setSelDate} placeholder="Pick a date..." />
      </Section>

      <Section title="Calendar">
        <View className="rounded-xl border border-border p-2">
          <Calendar selected={selDate} onSelect={setSelDate} />
        </View>
      </Section>

      <Section title="Verification Code">
        <View className="gap-2">
          <Label>Enter 6-digit code</Label>
          <InputOTP value={otp} onValueChange={setOtp} length={6} />
          {otp.length === 6 && (
            <Text variant="muted">Code entered: {otp}</Text>
          )}
        </View>
      </Section>

      <Section title="Search Bar">
        <SearchBar
          value={search}
          onChangeText={setSearch}
          onClear={() => setSearch("")}
          placeholder="Search components..."
        />
      </Section>
    </DemoLayout>
  );
}
