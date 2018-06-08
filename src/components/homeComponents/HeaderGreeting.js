import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RoundButton } from '../common';

const HeaderGreeting = () => {
  const { greetingStyle, blankStyle, usernameStyle, spentStyle, imageStyle,
    containerStyle, white } = styles;


  return (
    <ImageBackground
    source={require('../Img/header1.jpg')}
    style={imageStyle}
    >
      <View>
        <View style={containerStyle}>
        <View style={{ flexDirection: 'row' }}>
          <RoundButton onPress={() => Actions.addTransaction()}>
            Add
          </RoundButton>
          <RoundButton onPress={() => Actions.camera()}>
            Pic
          </RoundButton>
        </View>
          <Text style={greetingStyle}>Good Morning,</Text>
          <Text style={usernameStyle}>Jack.</Text>
          <View style={blankStyle} />
          <Text style={white}>You have spent</Text>
          <Text style={spentStyle}>£12345.67</Text>
          <Text style={white}>this week.</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = {
  white: {
    fontFamily: 'AlegreyaSansSC-Regular',
    fontSize: 20,
    color: 'white',
    textAlign: 'right',
    marginBottom: -10,
    marginTop: -10,
  },

  containerStyle: {
    marginTop: 64,
    paddingHorizontal: 20
  },

  blankStyle: {
    height: 45
  },

  greetingStyle: {
    fontFamily: 'Drugs',
    fontSize: 34,
    textAlign: 'left',
    color: 'white',
    opacity: 0.9
  },

  usernameStyle: {
    fontFamily: 'AlegreyaSansSC-Regular',
    fontSize: 30,
    textAlign: 'right',
    right: 40,
    color: 'white',
    opacity: 0.9
  },

  spentStyle: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'right',
    color: 'white',
    opacity: 0.9
  },

  imageStyle: {
    backgroundColor: '#2a363b',
    justifyContent: 'center',
    alignContent: 'space-between',
    height: 300,
    width: null //to make sure the img spread across the page
  },

  toplineStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};

export { HeaderGreeting };
