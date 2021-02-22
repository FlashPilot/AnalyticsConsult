import React from 'react';
import { Button,StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Transaction"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

  {/*For old customer*/}
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems:'stretch', justifyContent: 'space-around' }}>
      <View style={ {flexWrap:'wrap', flexDirection:'row', marginTop:20, marginLeft:50}}>
        <Text style={{fontSize:20}}>Patient ID:</Text>
        <Text>     </Text>
        <Text style={{fontSize:20}}>P0000000</Text>
      </View>
      <View style={ {flexWrap:'wrap', flexDirection:'row', marginTop:20, marginLeft:50}}>
        <Text style={{fontSize:20}}>Transaction No. :</Text>
        <Text>     </Text>
        <Text style={{fontSize:20}}>123</Text>
      </View>
      <View style={ {flexWrap:'wrap', flexDirection:'row', marginTop:20, marginLeft:50}}>
        <Text style={{fontSize:20}}>Bill Amount:</Text>
        <Text>     </Text>
        <Text style={{fontSize:20}}>100</Text>
      </View>
      <View style={ {flexWrap:'wrap', flexDirection:'row', marginTop:20, marginLeft:50}}>
        <Text style={{fontSize:20}}>Bonus Applied:</Text>
        <Text>     </Text>
        <Text style={{fontSize:20}}>5</Text>
      </View>
      <View>
        {/* 留白 */}
      </View>
      <View style={ {flexWrap:'wrap', flexDirection:'row', justifyContent: 'space-around', marginBottom:50}}>
        <View style={ {width: 100, height: 50, margin:20}}>
          <Button
            color="green"
            title="Confirm"
            onPress={() => navigation.navigate('Input')}
          />
        </View>
        <SafeAreaView style={stylesButton.container}>
          <Button
            title="Cancel"
            onPress={() => navigation.navigate('Home')}
          />
        </SafeAreaView>
        
      </View>
    </View>
  );
}

function InputScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>InputScreen</Text>
    </View>
  );
}

const stylesButton = StyleSheet.create({
  container: {
    flex: 1,
    color: "dodgerblue",
    width: 50, 
    height: 50, 
    margin:20
  },
});

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Input" component={InputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
