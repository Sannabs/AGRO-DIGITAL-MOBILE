import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import { Slot } from "expo-router";

const _layout = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        className="bg-white h-full"
        keyboardShouldPersistTaps="handled"
      >
        <View
          className="w-full relative"
          style={{ height: Dimensions.get("window").height / 2.25 }}
        >
          {/* TODO: ADD THE BACKGROUND IMAGE HERE */}
          <ImageBackground
            className="size-full rounded-b-lg"
            resizeMode="stretch"
          />

          <Image
            source={}
            className="self-center size-48 absolute -bottom-16 z-10"
            resizeMode="contain"
          />
        </View>

        <Slot />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default _layout;
