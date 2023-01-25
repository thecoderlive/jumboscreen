import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const jumboListItem = ({ item }) => (
<View style={styles.jumbo_list_item}>
<Image
    style={styles.jumbo_background_img}
    source={{uri: item.jumbo_background_img}}
    />
<Text style={styles.jumbo_advice}>{item.jumbo_advice}</Text>
<Text style={styles.about_jumbo}>{item.about_jumbo}</Text>
</View>
  );

const JumboList = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.jumbo_list}
    data={item}
    renderItem={jumboListItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default JumboList;

const styles = StyleSheet.create({
jumbo_background_img: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  },
jumbo_advice: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
about_jumbo: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  }
});