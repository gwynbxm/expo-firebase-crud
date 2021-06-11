import {
  setStatusBarNetworkActivityIndicatorVisible,
  StatusBar,
} from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Alert,
  ImageBackground,
  ImagePicker,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// previous version
// import { firebaseApp } from "../../config.js";

//testing version
// import firebase from "firebase/app";
import firebase from "../../config.js";

export default function Profile() {
  const [userData, setUserData] = useState({
    firstName: "",
    email: "",
    username: "",
  });
  const [errorText, setErrorText] = useState("");

  const handleChangeText = (name, value) => {
    setUserData({ ...userData, [name]: value });
  };

  const saveNewUser = async () => {
    if (userData.firstName === "") {
      alert("please provide a name");
    } else {
      const newRef = firebase.database().ref("/Accounts").push();
      await firebase
        .database()
        .ref("Accounts/" + newRef + "Key2")
        .set({
          firstName: userData.firstName,
          email: userData.email,
          username: userData.username,
        });
      alert("saved to database");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.dpContainer}>
          <ImageBackground
            style={styles.profileDp}
            source={{
              uri: "https://lh3.googleusercontent.com/znytw2BkzEYJv20Xp-0f8TMaopbemaVWLiRirBZ217Hxuo5vgX-KAKZDLdY3VojsYWXvfm5ollyUiAvecuwdNqzJ",
            }}
          >
            <View style={styles.cameraContainer}>
              <Icon name="camera" size={35} style={styles.cameraIcon} />
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
      <View style={styles.action}>
        <FontAwesome name="user-o" color="red" size={20} />
        <TextInput
          placeholder="First Name"
          style={styles.textInput}
          onChangeText={(value) => handleChangeText("firstName", value)}
        ></TextInput>
      </View>

      <View style={styles.action}>
        <FontAwesome name="user-o" color="red" size={20} />
        <TextInput
          placeholder="Username"
          style={styles.textInput}
          onChangeText={(value) => handleChangeText("username", value)}
        ></TextInput>
      </View>
      <View style={styles.action}>
        <Icon name="email-outline" size={24} color="red" />
        <TextInput
          placeholder="Email Address"
          style={styles.textInput}
          keyboardType="email-address"
          onChangeText={(value) => handleChangeText("email", value)}
        ></TextInput>
      </View>

      <TouchableOpacity
        style={styles.saveProfileBtn}
        onPress={() => saveNewUser()}
      >
        <Text style={styles.saveBtnTitle}>SUBMIT</Text>
      </TouchableOpacity>
      <Text style={styles.errorText}>{errorText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  dpContainer: {
    height: 100,
    width: "100%",
    borderRadius: 15,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  profileDp: {
    height: 100,
    width: 100,
  },

  cameraContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraIcon: {
    opacity: 0.7,
    alignItems: "center",
  },

  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },

  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "black",
  },

  saveProfileBtn: {
    padding: 15,
    width: "100%",
    backgroundColor: "orange",
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
});
