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
      </Text>
    </ScrollView>
  );
}
