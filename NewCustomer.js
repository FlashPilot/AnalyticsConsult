import React from 'react';
import { Button,StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

  export default function NewCustomer({navigation}) {
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
                onPress={() => navigation.navigate('scanner')}
              />
            </View>
            <View style={ {width: 100, height: 50, margin:20}}>
              <Button
                title="Cancel"
                onPress={() => navigation.navigate('Home')}
              />
            </View>
            
          </View>
        </View>
      );
  }
