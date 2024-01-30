// import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { rootstackparamlist } from "./App";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_DB } from "./firebaseConfig";

const HomeSecreen = () => {
  const navigation = useNavigation<StackNavigationProp<rootstackparamlist>>();

  const handlePress = () => {
    navigation.navigate("Detail");
  };

  const getData = async () => {
    try {
      console.log("test");
      const usersCollectionRef = collection(FIREBASE_DB, "test");
      const doc = await addDoc(usersCollectionRef, {
        key: "value",
        test: "test",
      });
      console.log(doc.id, "tttt");
    } catch (error: any) {
      console.error("Error fetching documents: ", error.message);
    }
  };

  return (
    <View>
      <Text>asdsa</Text>
      <Button title="Go to Details" onPress={handlePress} />
      <Button
        title="Fetch Data"
        onPress={() => {
          getData();
        }}
      />
    </View>
  );
};

export default HomeSecreen;
