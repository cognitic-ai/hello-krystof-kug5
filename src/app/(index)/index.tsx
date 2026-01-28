import { ScrollView, Text } from "react-native";

export default function IndexRoute() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        padding: 16,
        backgroundColor: "white",
      }}
    >
      <Text>
        In JavaScript's realm where developers roam,
        Expo builds apps that feel right at home.
        With React Native's power, cross-platform delight,
        iOS and Android, both shining bright.

        Hot reload magic makes changes appear,
        No native code needed, the path is clear.
        Components and styles, all in one flow,
        Beautiful interfaces ready to show.

        From prototypes quick to production grade,
        Expo's ecosystem comes to your aid.
        Navigation smooth, animations that gleam,
        Building mobile apps, living the dream.

        One codebase shared across every device,
        Developer experience, incredibly nice.
        Camera, location, and notifications too,
        All the APIs waiting for you.

        Expo Router guides your navigation way,
        File-based routing makes structure child's play.
        Stacks and tabs with native feel,
        Deep linking works, it's totally real.

        Push to the cloud with EAS Build so fast,
        Over-the-air updates, issues are past.
        TestFlight and Play Store, deployment made easy,
        No Xcode or Android Studio needed, breezy.

        Community strong, documentation clear,
        Snack lets you code without fear.
        From solo devs to teams so wide,
        Expo's the framework with nothing to hide.

        TypeScript support and modern tools,
        Breaking old native development rules.
        The future of mobile is here today,
        With Expo leading the brilliant way.
      </Text>
    </ScrollView>
  );
}
