import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

const ContactItem = ({ viewableItems, item, fav }) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = viewableItems?.value
      .filter((item) => item?.isViewable)
      .find((viewableItem) => viewableItem.item?.id === item?.id);
    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, []);
  return (
    <Animated.View style={[styles.container, rStyle]}>
      <View style={styles.innercont}>
        <View style={styles.circle}>
          <Text style={styles.icon}>{item?.name?.slice(0, 1)}</Text>
        </View>
        <View>
          <Text style={styles.title}>{item?.name}</Text>
          <Text style={styles.text}>{item?.phoneNumbers[0]?.number}</Text>
        </View>
      </View>

      <TouchableOpacity style={{ alignSelf: "flex-end" }}>
        {!fav ? (
          <FontAwesome name="star-o" size={24} color={"#333"} />
        ) : (
          <FontAwesome name="star" size={24} color={"#333"} />
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default memo(ContactItem);

const styles = StyleSheet.create({
  container: {
    width: "96%",
    alignSelf: "center",
    backgroundColor: "#1b1b1b",
    marginTop: 5,
    borderRadius: 10,
    paddingHorizontal: 19,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  innercont: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 999,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#333",
  },
  icon: {
    fontSize: 24,
    color: "#333",
    fontWeight: "600",
  },
  title: {
    fontSize: 16,
    color: "#d3d3d3",
    fontWeight: "500",
  },
  text: {
    fontSize: 13,
    color: "#333",
  },
});
