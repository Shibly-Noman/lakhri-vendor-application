import { setStatusBarHidden } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, Image, Button, TextInput, CheckBox, TouchableWithoutFeedbackBase } from 'react-native'
import { Card, Avatar } from 'react-native-elements'

function ActiveOrder() {
    return (
        <View style={{
            flex: 1,
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: '',
            backgroundColor: 'white',

        }}>

            <Text style={{
                marginTop: 10,

                fontSize: 25,
                fontWeight: 400,
                textAlign: '',

            }}>Active Order</Text>
            <Text style={{
                marginTop: 20,
                fontSize: 15,
                fontWeight: 400,
                marginBottom: 20,
                paddingLeft: 10
            }}>Order Ongoing</Text>

            <View style={{ padding: 10, borderRadius: 8, margin: 0, borderWidth: 1, borderColor: "#999999" }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontWeight: 800 }}>Jennifer Lawrence</Text>
                    <Text>350.00 BDT</Text>
                </View>
                
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontWeight: 600, marginTop: 10 }}>Ordered Item</Text>
                    <Text style={{ marginTop: 10 }}>Biriany</Text>

                    <Avatar
                        rounded
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />

                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontWeight: 600, marginTop: 10 }}>Payment Method</Text>
                    <Text style={{ marginTop: 10 }}>Cash on Delivery</Text>
                    <Text></Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontWeight: 600, marginTop: 10 }}>Delivery Charge</Text>
                    <Text style={{ marginTop: 10 }}>45.00 BDT</Text>
                    <Text style={{ width: 20 }}></Text>
                </View>
                <View style={{

                    marginTop: 20,

                }}>
                    <Button
                        style={{
                            borderRadius: 20,
                            
                        }}
                        title="Rider On the Way to Delivery"
                        color= "#8d2ad3"
                        
                    />

                </View>
            </View>
            <Text style={{
                marginTop: 20,
                fontSize: 15,
                fontWeight: 400,
                marginBottom: 20,
                paddingLeft: 10
            }}>Order In Queue</Text>
            <View style={{ padding: 10, borderRadius: 8, margin: 0, borderWidth: 1, borderColor: "#999999" }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontWeight: 800 }}>Jennifer Lawrence</Text>
                    <Text>350.00 BDT</Text>
                </View>
                
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontWeight: 600, marginTop: 10 }}>Ordered Item</Text>
                    <Text style={{ marginTop: 10 }}>Biriany</Text>

                    <Avatar
                        rounded
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />

                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontWeight: 600, marginTop: 10 }}>Payment Method</Text>
                    <Text style={{ marginTop: 10 }}>Cash on Delivery</Text>
                    <Text></Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontWeight: 600, marginTop: 10 }}>Delivery Charge</Text>
                    <Text style={{ marginTop: 10 }}>45.00 BDT</Text>
                    <Text style={{ width: 20 }}></Text>
                </View>
                <View style={{

                    marginTop: 20,

                }}>
                    <Button
                        style={{

                        }}
                        title="You Have Accepted this Order"
                        color= "#8d2ad3"
                    />

                </View>
            </View>

        </View>
    );
}

export default ActiveOrder;