import React, { useRef, useState } from "react";
import { View } from "react-native";
import { DemoLayout, Section, Spacer } from "./DemoLayout";
import { Text } from "../components/ui/text";
import { Button } from "../components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../components/ui/dialog";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from "../components/ui/alert-dialog";
import { Tooltip } from "../components/ui/tooltip";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "../components/ui/dropdown-menu";
import { BottomSheet } from "../components/ui/bottom-sheet";
import { ActionSheet } from "../components/ui/action-sheet";
import { Drawer } from "../components/ui/drawer";
import GorhomBottomSheet from "@gorhom/bottom-sheet";

export function OverlayDemo() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const sheetRef = useRef<GorhomBottomSheet>(null);
  const actionRef = useRef<GorhomBottomSheet>(null);

  return (
    <DemoLayout title="Overlays & Sheets">
      <Section title="Dialog">
        <Button onPress={() => setDialogOpen(true)}>Open Dialog</Button>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>Make changes to your profile. Click save when done.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onPress={() => setDialogOpen(false)}>Cancel</Button>
              <Button onPress={() => setDialogOpen(false)}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Section>

      <Section title="Alert Dialog">
        <Button variant="destructive" onPress={() => setAlertOpen(true)}>Delete Account</Button>
        <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>This will permanently delete your account and all data.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onPress={() => setAlertOpen(false)}>Cancel</AlertDialogCancel>
              <AlertDialogAction onPress={() => setAlertOpen(false)}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Section>

      <Section title="Dropdown Menu">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">Options</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Help</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem destructive>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Section>

      <Section title="Tooltip">
        <Tooltip content="This is a helpful tooltip!">
          <Button variant="outline">Long Press Me</Button>
        </Tooltip>
      </Section>

      <Section title="Drawer">
        <Button variant="outline" onPress={() => setDrawerOpen(true)}>Open Drawer</Button>
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <View className="flex-1 p-6 pt-14">
            <Text variant="h2">Menu</Text>
            <Spacer />
            <View className="gap-1 mt-4">
              {["Home", "Profile", "Settings", "Help"].map((item) => (
                <Button key={item} variant="ghost" className="justify-start" onPress={() => setDrawerOpen(false)}>
                  {item}
                </Button>
              ))}
            </View>
            <View className="mt-auto">
              <Button variant="outline" onPress={() => setDrawerOpen(false)}>Close</Button>
            </View>
          </View>
        </Drawer>
      </Section>

      <Section title="Bottom Sheet">
        <Button variant="outline" onPress={() => sheetRef.current?.expand()}>
          Open Bottom Sheet
        </Button>
      </Section>

      <Section title="Action Sheet">
        <Button variant="outline" onPress={() => actionRef.current?.expand()}>
          Open Action Sheet
        </Button>
      </Section>

      <BottomSheet ref={sheetRef} snapPoints={["40%"]}>
        <Text variant="h3">Share this post</Text>
        <Spacer />
        <Text variant="p">Choose how you'd like to share this content.</Text>
        <Spacer />
        <View className="gap-2">
          <Button onPress={() => sheetRef.current?.close()}>Copy Link</Button>
          <Button variant="outline" onPress={() => sheetRef.current?.close()}>Cancel</Button>
        </View>
      </BottomSheet>

      <ActionSheet
        ref={actionRef}
        title="Photo options"
        actions={[
          { label: "Take Photo", onPress: () => actionRef.current?.close() },
          { label: "Choose from Library", onPress: () => actionRef.current?.close() },
          { label: "Delete Photo", destructive: true, onPress: () => actionRef.current?.close() },
        ]}
        onCancel={() => actionRef.current?.close()}
      />
    </DemoLayout>
  );
}
