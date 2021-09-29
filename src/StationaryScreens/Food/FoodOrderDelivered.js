import * as React from 'react';
import { View, Text, Image, Button } from 'react-native'

function FoodOrderDelivered() {
    return (
        <View style={{
            flex: 1,
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: 'center',
            
            backgroundColor: 'white',
        }}>
            <View style={{
                marginTop: 30,
            }}>
                <Image
                    source={require('../../../assets/images/delivery_successful_icon.svg')}
                    style={{
                        height: 200,
                        width: 250,
                        alignSelf: 'center',
                    }}
                />
            </View>
            <Text style={{
                marginTop: 30,
                fontSize: 30,
                fontWeight: 400,
                textAlign: 'center'
            }}>Order Has Been Successfully Delivered</Text>
            <Text style={{
                marginTop: 30,
                fontSize: 16,
                fontWeight: 400,
                textAlign: 'center',
                paddingRight: 50,
                paddingLeft: 50,
                marginBottom: 30,
                color: '#999999'
            }}>It's a long established fact that a reader will be distracted by the readable content of</Text>
            
            <Button
                style={{
                    
                }}
                title="Go To Dashboard"
                color="#8d2ad3"
                
                accessibilityLabel="Learn more about this purple button"
            />
            
            

        </View>
    );
}

export default FoodOrderDelivered;