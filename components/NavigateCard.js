import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { Icon } from "react-native-elements";
import RideOptionsCard from "./RideOptionsCard";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={tw`bg-white flex-1`}>
      <View style={tw`bg-white flex-1 mb-9`}>
        <Text style={tw`text-center text-xl`}>Good Morning, Nahom</Text>
        <View style={tw`border-t border-gray-200 flex-shrink `} />
        <View style={tw`flex-1`}>
          <GooglePlacesAutocomplete
            placeholder="where to?"
            styles={toInputBoxStyles}
            fetchDetails={true}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate(RideOptionsCard);
            }}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_KEY,
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>

        {/* todo: add arrow that takes to RideOptions Card */}
      </View>

      <NavFavourites />
      <View style={tw`flex-row justify-evenly py-2 mt-auto border-gray-100`}>
        <TouchableOpacity
          onPress={() => navigation.navigate(RideOptionsCard)}
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 mb-1 rounded-full`}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 mb-1 rounded-full`}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text style={tw`text-black text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#eee",
    borderRadius: 5,
    fontSize: 15,
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
