import "./global.css";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavContext, Screen } from "./context/NavContext";
import { HomeScreen } from "./screens/HomeScreen";
import { CoreDemo } from "./screens/CoreDemo";
import { DataDisplayDemo } from "./screens/DataDisplayDemo";
import { FormsDemo } from "./screens/FormsDemo";
import { FeedbackDemo } from "./screens/FeedbackDemo";
import { OverlayDemo } from "./screens/OverlayDemo";
import { LayoutDemo } from "./screens/LayoutDemo";
import { NavigationDemo } from "./screens/NavigationDemo";
import { ToastProvider } from "./components/ui/toast";

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const navigate = (s: Screen) => setScreen(s);
  const goBack = () => setScreen("home");

  const renderScreen = () => {
    switch (screen) {
      case "core": return <CoreDemo />;
      case "data-display": return <DataDisplayDemo />;
      case "forms": return <FormsDemo />;
      case "feedback": return <FeedbackDemo />;
      case "overlays": return <OverlayDemo />;
      case "layout": return <LayoutDemo />;
      case "navigation": return <NavigationDemo />;
      default: return <HomeScreen />;
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavContext.Provider value={{ navigate, goBack }}>
          <ToastProvider>
            {renderScreen()}
            <StatusBar style="auto" />
          </ToastProvider>
        </NavContext.Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
