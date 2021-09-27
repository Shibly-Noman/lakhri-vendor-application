import { setStatusBarHidden } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, Image, Button } from 'react-native'

function SomethingGoodContent() {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: '',
            backgroundColor: 'white',
        }}>
            <View style={{
                marginTop: 50,
            }}>
                <Image
                    source={require('../../../assets/images/good_service.svg')}
                    style={{
                        height: 200,
                        width: 250,
                    }}
                />
            </View>
            <Text style={{
                marginTop: 20,
                fontSize: 25,
                fontWeight: 400,
                textAlign: 'center',
                paddingLeft: 10,
                paddingRight: 10,
                marginLeft: 40,
                marginRight: 40,
            }}>Something Good Content.</Text>
            <Text style={{
                marginTop: 30,
                fontSize: 15,
                fontWeight: 400,
                textAlign: 'center',
                paddingRight: 50,
                paddingLeft: 50,
                marginBottom: 50,
                marginLeft: 30,
                marginRight: 30,
            }}>It's a long established fact that a rider will be distracted by the readable content of</Text>

            <Button
                style={{
                  
                }}
                title="Create As Makeup Artist"
                color="#d42aaf"
                
                accessibilityLabel="Learn more about this purple button"
            />

            <Text style={{
                color: 'black',
                fontWeight: 700,
                marginTop: 20,
            }}>Already have an account? Sign In</Text>

        </View>
    );
}

export default SomethingGoodContent;