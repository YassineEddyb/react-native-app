import React from "react";
import { View, StyleSheet } from "react-native";

import Card from "../components/Card";
import ListItem from "../components/ListItem";

function ListingDetails({ route }) {
  const listing = route.params;

  return (
    <View style={styles.listing}>
      <Card
        style={styles.card}
        imageStyle={styles.cardImage}
        title={listing.title}
        subTitle={"$" + listing.price}
        image={listing.image}
      />
      <View style={styles.detailsContainer}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="mosh hamadani"
          subTitle="10 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listing: {
    width: "100%",
    height: "100%",
  },
  card: {
    borderRadius: 0,
  },
  cardImage: {
    height: 250,
  },
  detailsContainer: {
    padding: 10,
  },
});

export default ListingDetails;
