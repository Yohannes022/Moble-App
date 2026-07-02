import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";
import clsx from "clsx";
// import { Image } from "expo-image";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabLayout = () => {
  const insets = useSafeAreaInsets();
  const TabIcon = ({ focused, icon }: TabIconProps) => {
    return (
      <View className="tabs-icon">
        <View className={clsx("tabs-pill", focused && "tabs-active")}>
          <Image source={icon} resizeMode="contain" className="tabs-glyph" />
        </View>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom, components.tabBar.horizontalInset),
          height: components.tabBar.height,
          backgroundColor: colors.primary,
          borderRadius: components.tabBar.radius,
          marginHorizontal: components.tabBar.horizontalInset,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarItemStyle: {
          paddingVertical:
            components.tabBar.height / 2 - components.tabBar.iconFrame / 1.7,
        },
        tabBarIconStyle: {
          width: components.tabBar.iconFrame,
          height: components.tabBar.iconFrame,
          alignItems: "center",
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
