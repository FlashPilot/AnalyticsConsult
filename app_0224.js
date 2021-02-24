import React from 'react';
import { Button,StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Old Customer"
        onPress={() => navigation.navigate('OldCustomer')}
      />
      <Button
        title="New Customer"
        onPress={() => navigation.navigate('NewCustomer')}
      />
    </View>
  );
}

  {/*For old customer*/}
function OldCustomer({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems:'stretch', justifyContent: 'space-around' }}>
      <View style={ {flexWrap:'wrap', flexDirection:'row', marginTop:20, marginLeft:50}}>
        <Text style={{fontSize:20}}>Patient ID:</Text>
        <Text>     </Text>
        <TextInput style={{ height: 35, width: 100, borderColor: 'gray', borderWidth: 1 }} placeholder="P0000000"/>
      </View>
      <View style={ {flexWrap:'wrap', flexDirection:'row', marginTop:20, marginLeft:50}}>
        <Text style={{fontSize:20}}>Transaction No. :</Text>
        <Text>     </Text>
        <TextInput style={{ height: 35, width: 100, borderColor: 'gray', borderWidth: 1 }} placeholder="T0000000"/>
      </View>
      <View style={ {flexWrap:'wrap', flexDirection:'row', marginTop:20, marginLeft:50}}>
        <Text style={{fontSize:20}}>Bill Amount:</Text>
        <Text>     </Text>
        <TextInput style={{ height: 35, width: 70, borderColor: 'gray', borderWidth: 1 }} placeholder="100"/>
      </View>
      <View style={ {flexWrap:'wrap', flexDirection:'row', marginTop:20, marginLeft:50}}>
        <Text style={{fontSize:20}}>Bonus Applied:</Text>
        <Text>     </Text>
        <TextInput style={{ height: 35, width: 50, borderColor: 'gray', borderWidth: 1 }} placeholder="5"/>
      </View>
      <View>
        {/* 留白 */}
      </View>
      <View style={ {flexWrap:'wrap', flexDirection:'row', justifyContent: 'space-around', marginBottom:50}}>
        <View style={ {width: 100, height: 50, margin:20}}>
          <Button
            color="green"
            title="Confirm"
            onPress={() => navigation.navigate('Scan')}
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

{/*For new customer*/}
function NewCustomer({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems:'stretch', justifyContent: 'space-around' }}>
      <View style={ {flexWrap:'wrap', flexDirection:'row', marginTop:20, marginLeft:50}}>
        <Text style={{fontSize:20}}>Patient ID:</Text>
        <Text>     </Text>
        <TextInput style={{ height: 35, width: 100, borderColor: 'gray', borderWidth: 1 }} placeholder="P0000000"/>
      </View>
      <View style={ {flexWrap:'wrap', flexDirection:'row', marginTop:20, marginLeft:50}}>
        <Text style={{fontSize:20}}>Transaction No. :</Text>
        <Text>     </Text>
        <TextInput style={{ height: 35, width: 100, borderColor: 'gray', borderWidth: 1 }} placeholder="T0000000"/>
      </View>
      <View style={ {flexWrap:'wrap', flexDirection:'row', marginTop:20, marginLeft:50}}>
        <Text style={{fontSize:20}}>Bill Amount:</Text>
        <Text>     </Text>
        <TextInput style={{ height: 35, width: 70, borderColor: 'gray', borderWidth: 1 }} placeholder="100"/>
      </View>
      <View style={ {flexWrap:'wrap', flexDirection:'row', marginTop:20, marginLeft:50}}>
        <Text style={{fontSize:20}}>Coupon Applied:</Text>
        <Text>     </Text>
        <TextInput style={{ height: 35, width: 50, borderColor: 'gray', borderWidth: 1 }} placeholder="5"/>
      </View>
      <View>
        {/* 留白 */}
      </View>
      <View style={ {flexWrap:'wrap', flexDirection:'row', justifyContent: 'space-around', marginBottom:50}}>
        <View style={ {width: 100, height: 50, margin:20}}>
          <Button
            color="green"
            title="Confirm"
            onPress={() => navigation.navigate('Scan')}
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

function ScanScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ScanScreen</Text>
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
        <Stack.Screen name="OldCustomer" component={OldCustomer} />
        <Stack.Screen name="NewCustomer" component={NewCustomer} />
        <Stack.Screen name="Scan" component={ScanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
