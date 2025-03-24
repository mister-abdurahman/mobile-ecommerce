import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

const ProfileScreen = (props: Props) => {
  const headerHeight = useHeaderHeight();
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitleAlign: "center",
        }}
      />
      <ScrollView>
        <View style={[styles.container, { marginTop: headerHeight }]}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male",
              }}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <Text style={styles.username}>Abdurahman Ishmael</Text>
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="person-outline" size={20} color={Colors.black} />
              <Text style={styles.buttonText}>Your Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="heart-outline" size={20} color={Colors.black} />
              <Text style={styles.buttonText}>Your Wishlist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="card-outline" size={20} color={Colors.black} />
              <Text style={styles.buttonText}>Payment History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="gift-outline" size={20} color={Colors.black} />
              <Text style={styles.buttonText}>Reward Points</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Ionicons
                name="help-circle-outline"
                size={20}
                color={Colors.black}
              />
              <Text style={styles.buttonText}>Customer Support</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="pencil-outline" size={20} color={Colors.black} />
              <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Ionicons
                name="settings-outline"
                size={20}
                color={Colors.black}
              />
              <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="log-out-outline" size={20} color={Colors.black} />
              <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 10,
    color: Colors.black,
  },
  buttonWrapper: {
    marginTop: 20,
    gap: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: Colors.lightGray,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "500",
    color: Colors.black,
  },
});
