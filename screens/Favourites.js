import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import ContactItem from "../components/ContactItem";
import { useSharedValue } from "react-native-reanimated";
import AntDesign from "@expo/vector-icons/AntDesign";

const Favourites = () => {
  const viewableItems = useSharedValue([]);

  const data = [];

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <FlatList
        data={data}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems;
        }}
        renderItem={({ item }) => (
          <ContactItem viewableItems={viewableItems} item={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={data.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <AntDesign name="folderopen" size={24} color="#333" />
            <Text style={{ color: "#333" }}>No Favourites</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({});
