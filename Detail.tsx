import React from "react";
import { View, Text, Button } from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { FIREBASE_DB } from "./firebaseConfig";

const Detail: React.FC = () => {
  const addTodo = async () => {
    try {
      console.log("Before Firestore write");

      const docData = {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912,
      };

      const usersCollectionRef = collection(FIREBASE_DB, "users");

      const docRef = await addDoc(usersCollectionRef, docData);
      console.log("Document written with ID: ", docRef.id);

      console.log("After Firestore write");
    } catch (error: any) {
      console.error("Error adding document: ", error.message);
    }
  };

  return (
    <View>
      <Text>Detail</Text>
      <Button
        title="button"
        onPress={() => {
          addTodo();
        }}
      />
    </View>
  );
};

export default Detail;
