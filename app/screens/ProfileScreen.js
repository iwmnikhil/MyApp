import React, { Component } from 'react'
import { Button, Alert, View, Text } from 'react-native'

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {

    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const itemName = navigation.getParam('itemName', 'NO-Product');

    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Screen</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>itemName: {JSON.stringify(itemName)}</Text>
        <Button
          title="View Home"
          onPress={() => navigate('Home')}
          color="green"
        />
      </View>
    );

  }
}

export default ProfileScreen;