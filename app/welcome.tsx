import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useRef, useState } from "react";
import Swiper from "react-native-swiper";
import { SafeAreaView } from "react-native-safe-area-context";
import { onboarding } from "@/constants";
import { router } from "expo-router";

const Welcome = () => {
  const swiperRef = useRef<Swiper>();
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;
  return (
    <SafeAreaView className="flex h-full items-center justify-center">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end p-5"
      >
        <Text className="text-black text-md font-quicksand-bold">skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        onIndexChanged={(index) => setActiveIndex(index)}
        dot={
          <View
            style={{
              width: 10,
              height: 10,
              marginHorizontal: 4,
              backgroundColor: "#E2E8F0",
              borderRadius: 8,
            }}
          />
        }
        activeDot={
          <View
            style={{
              width: 10,
              height: 10,
              marginHorizontal: 4,
              backgroundColor: "#027335",
              borderRadius: 8,
            }}
          />
        }
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              className="w-full h-[350px]"
              resizeMode="contain"
            />

            <View className="flex flex-row items-center justify-center p-5">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>

            <Text className="text-md font-quicksand-bold text-center text-[#858585] mx-10 mt-3">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>

      <TouchableOpacity
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        className="rounded-full p-3 flex flex-row justify-center items-center bg-[#027335] w-[96%] mt-10 mb-5 shadow-md shadow-neutral-400/70"
      >
        <Text className="capitalize font-quicksand-bold text-2xl text-white">
          {" "}
          {isLastSlide ? "Get Started" : "Next"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Welcome;
