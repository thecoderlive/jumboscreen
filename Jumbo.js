import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import JumboList from './JumboList'

const Jumbo = () => (
<ScrollView style={styles.jumbo} showsVerticalScrollIndicator={false}>
<Text style={styles.jumbo_title}>{item.jumbo_title}</Text>
<JumboList item={item.jumbo_list}/>
</ScrollView>
)

export default Jumbo;

const styles = StyleSheet.create({
jumbo_title: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  }
});