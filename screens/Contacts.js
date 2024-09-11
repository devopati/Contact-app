import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import ContactItem from "../components/ContactItem";
import { useSharedValue } from "react-native-reanimated";
import * as Contacts from "expo-contacts";

const data = Array.from({ length: 50 })
  .fill(0)
  .map((_, index) => ({ id: index }));

const ContactsScreen = () => {
  const viewableItems = useSharedValue([]);

  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setContacts(data);
          const contact = data[16];
          console.log(contact);
        }
      }
    })();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <FlatList
        data={contacts.slice(10, 100)}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems;
        }}
        renderItem={({ item }) => (
          <ContactItem viewableItems={viewableItems} item={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({});
