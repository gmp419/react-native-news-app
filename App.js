import React, { useContext } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import Context, { NewsContext } from './API/Context';
import InShortTabs from './components/InShortTabs';

function App() {

  const {darkTheme , setDarkTheme} = useContext(NewsContext);
  return (
    <SafeAreaView style={{...styles.container, backgroundColor: darkTheme ? '#282C35' : '#fff'}}>
      <InShortTabs/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,

  },
});

export default ()=>{
  return (<Context>
    <App />
  </Context>);
}