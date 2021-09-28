import { setStatusBarHidden } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, Image, Button, TextInput, CheckBox, TouchableWithoutFeedbackBase } from 'react-native'
import { Card, Avatar } from 'react-native-elements'

function Dashboard() {
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

            }}>Welcome To Dashboard.</Text>
            <Text style={{
                marginTop: 20,
                fontSize: 15,
                fontWeight: 400,
                marginBottom: 20,
            }}>See your Delivery Dashboard, In this App.</Text>

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
                    <Text style={{ fontWeight: 600, marginTop: 15 }}>Ordered Craft Item</Text>
                    <Text style={{marginTop: 15 }}>Hand Painted Clothing</Text>
                    
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
                    <Text style={{ fontWeight: 600, marginTop: 15 }}>Payment Method</Text>
                    <Text style={{marginTop: 15 }}>Cash on Delivery</Text>
                    <Text></Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontWeight: 600, marginTop: 15 }}>Delivery Charge</Text>
                    <Text style={{marginTop: 15 }}>45.00 BDT</Text>
                    <Text style={{ width: 20 }}></Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                    
                }}>
                    <Button
                        color="#6d31f5"
                        title="Reject"
                    />
                    <Button
                        style={{
                            
                        }}
                        color="#6d31f5"
                        title="Accept"
                    />
                </View>
            </View>

            <View style={{ padding: 10, borderRadius: 8, margin: 0, marginTop: 20, borderWidth: 1, borderColor: "#999999" }}>
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
                    justifyContent: 'space-between',
                    
                }}>
                    <Text style={{ fontWeight: 600, marginTop: 15 }}>Ordered Craft Item</Text>
                    <Text style={{marginTop: 15 }}>Hand Painted Clothing</Text>
                    
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
                    <Text style={{ fontWeight: 600, marginTop: 15 }}>Payment Method</Text>
                    <Text style={{marginTop: 15 }}>Cash on Delivery</Text>
                    <Text></Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontWeight: 600, marginTop: 15 }}>Delivery Charge</Text>
                    <Text style={{marginTop: 15 }}>45.00 BDT</Text>
                    <Text style={{ width: 20 }}></Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                    
                }}>
                    <Button
                        style={{
                           
                        }}
                        color="#6d31f5"
                        title="Reject"
                    />
                    <Button
                        style={{
                            
                        }}
                        color="#6d31f5"
                        title="Accept"
                    />
                </View>
            </View>            

        </View>
    );
}

export default Dashboard;