import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baa',
  title: 'Fourth Item',
},
{
  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63b',
  title: 'Fifth Item',
},
{
  id: '58694a0f-3da1-471f-bd96-145571e29d72c',
  title: 'Sixth Item',
},
{
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bad',
  title: 'Seventh Item',
},
{
  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63e',
  title: 'Eighth Item',
},
{
  id: '58694a0f-3da1-471f-bd96-145571e29d72f',
  title: 'Ninth Item',
},
{
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28badg',
  title: 'Tenth Item',
},
{
  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63eh',
  title: 'Eleventh Item',
},
{
  id: '58694a0f-3da1-471f-bd96-145571e29d72fi',
  title: 'Twelveth Item',
},
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        horizontal
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 1,
  },
  title: {
    fontSize: 32,
  },
});

export default App;