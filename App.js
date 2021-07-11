import React, { useEffect, useState } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
EStyleSheet.build()
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import axios from 'axios'
import NewsCard from './src/components/NewsCard';
import APIKEY from './ApiKey'
const Header = () => {
  return(
    <View style={styles.header}>
      <Text style={styles.title}>News</Text>
    </View>
  )
}

const App = () => {
  const [topHeadlines, setTopHeadlines] = useState([])
  const Apikey = new APIKEY()
  useEffect(() => {
  
    axios.get(`https://newsapi.org/v2/top-headlines?country=br&apiKey=${Apikey.getApikey}`)
    .then(res => {
      let data = res.data
      setTopHeadlines([...data.articles])
      // console.log(topHeadlines[0].source)
    }) 
    .catch(err => {
      console.log(err)
    })
  }, [])
  
  const renderNewsCard = ({item}) => {
    
    return (
      <NewsCard 
        label={item.title} 
        category={item.source.name}
        img={{uri: item.urlToImage}}
      />
    )
  }

  return ( 
    <SafeAreaView>
      <Header />
      <FlatList 
        showsVerticalScrollIndicator={true}
        data={topHeadlines}
        renderItem={renderNewsCard}
        keyExtractor={(item, index) => index.toString()}
      />

    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  },
  title: {
    fontSize: '1.2rem',
  }
});

export default App;
