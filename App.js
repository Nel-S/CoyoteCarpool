import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Homepage from './components/Homepage';

const App = () => {
  return(
    <View style = {styles.container}>
      
      {<Homepage />}
      {/*<Dashboardpage />*/}
      {/*<Profilepage />*/}
      {/*<Driverpage />*/}
      {/*<Riderpage />*/}

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