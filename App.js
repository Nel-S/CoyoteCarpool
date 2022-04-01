import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import HomePage from './components/HomePage';

const App = () => {
  return(
    <View style = {styles.container}>
      
      {<HomePage />}
      {/*<DashboardPage />*/}
      {/*<ProfilePage />*/}
      {/*<DriverListPage />*/}
      {/*<RiderListPage />*/}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#0065bd',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
});

export default App;