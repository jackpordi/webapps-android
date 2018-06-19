import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import BillHistoryItem from './BillHistoryItem';
import Storages from './../actions/Storages';

const Global = require('./../Global');

class BillHistory extends Component {
  state = { transactionBillMap: [] };

  componentWillMount() {
    Storages.get(Global.EMAIL).then(result => {
      console.log('result', result);
      this.setState({ transactionBillMap: result.transactionBillMap });
    });
  }

  renderBills() {
    return this.state.transactionBillMap.map((transactionBillMap, index) =>
      <BillHistoryItem key={index} bill={transactionBillMap.billDetails} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.addButtonStyle} onPress={Actions.addBill}>
          <Icon name="plus" color='white' size={20} style={styles.iconStyle} />
          <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}> Add Bill</Text>
        </TouchableOpacity>
        <ScrollView>
          {this.renderBills()}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    paddingHorizontal: 5,
  },
  addButtonStyle: {
    marginVertical: 5,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'sandybrown',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
};


export default BillHistory;