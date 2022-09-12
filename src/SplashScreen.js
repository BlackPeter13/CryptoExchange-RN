import React, { useEffect } from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isUserSignedIn } from "../controller/isUserSignedIn";

const SplashScreen = ({ navigation }) => {
  // login user
  //   useEffect(() => {
  //     Auth.currentAuthenticatedUser()
  //       .then(user => {
  //         setUserProfile(user.attributes);
  //         // console.log('user', user.attributes);
  //       })
  //       .catch(err => console.log('profile err', err));
  //   }, []);

  // registered user
  //   useEffect(() => {
  //     Auth.currentUserInfo()
  //       .then(user => {
  //         console.log('user', user);
  //       })
  //       .catch(err => console.log(err));
  //   }, []);

  useEffect(() => {
    setTimeout(() => {
      isUserSignedIn()
        .then((res) => {
          if (res) {
            // console.log('res', res);
            navigation.navigate("NavBar");
          } else {
            navigation.navigate("Login");
          }
        })
        .catch((err) => {
          console.log("isUserSignedIn err", err);
          navigation.navigate("Login");
        });
    }, 2000);
  }, [AsyncStorage]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          color: "#0E2C4B",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        B2B Cottonyarn
      </Text>
    </View>
  );
};

export default SplashScreen;
