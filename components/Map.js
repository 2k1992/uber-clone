import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);
  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        // latitude: origin.location.lat,
        // longitude: origin.location.lng,
        // latitudeDelta: 0.005,
        // longitudeDelta: 0.005,
        latitude: 8.98078,
        longitude: 38.74792,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
