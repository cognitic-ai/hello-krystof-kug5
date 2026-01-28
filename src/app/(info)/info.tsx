import { ScrollView, Text } from "react-native";

export default function InfoRoute() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        padding: 16,
        backgroundColor: "white",
      }}
    >
      <Text>
        From design to deploy, a seamless quest,
        Expo makes mobile development the best.
        JavaScript flows through components divine,
        Creating experiences that truly shine.

        No more wrestling with native code,
        Expo lightens every developer's load.
        Permissions, sensors, and storage space,
        All managed with elegant grace.

        Instant previews on your device screen,
        The fastest workflow ever seen.
        Debugging tools and error traces,
        Helping you fix those tricky cases.

        Modules and plugins, extensive and free,
        Built by a thriving community.
        From startups small to enterprises grand,
        Expo scales across the land.

        Web, iOS, Android in harmony,
        One source of truth, a symphony.
        No platform left behind or alone,
        Universal apps from a single home.

        Updates pushed without delay,
        Fixing bugs the very same day.
        Version control and release with ease,
        Expo brings developers to their knees.

        Innovation rapid, iteration fast,
        Building apps that truly last.
      </Text>
    </ScrollView>
  );
}
