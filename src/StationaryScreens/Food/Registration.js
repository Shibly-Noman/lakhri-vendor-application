import { setStatusBarHidden } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, Image, Button, TextInput, CheckBox } from 'react-native'

function Registration() {
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

            }}>Registration.</Text>
            <Text style={{
                marginTop: 20,
                fontSize: 15,
                fontWeight: 400,
                marginBottom: 20,
            }}>You are going to Supply the Food Item through the App.</Text>
            <TextInput
                style={{
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 5,
                    marginBottom: 20,
                    padding: 10,
                }}

                placeholder="Vendor Owner Full Name"
                keyboardType="numeric"
            />
            <TextInput
                style={{
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 5,
                    marginBottom: 20,
                    padding: 10,
                }}

                placeholder="Vendor Name"
                keyboardType="numeric"
            />
            <TextInput
                style={{
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 5,
                    marginBottom: 20,
                    padding: 10,
                }}

                placeholder="Vendor Location"
                keyboardType="numeric"
            />
            <TextInput
                style={{
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 5,
                    marginBottom: 20,
                    padding: 10,
                }}

                placeholder="Vendor Email"
                keyboardType="numeric"
            />
            <TextInput
                style={{
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 5,
                    marginBottom: 20,
                    padding: 10,
                }}

                placeholder="Password"
                keyboardType="numeric"
            />
            <TextInput
                style={{
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 5,
                    marginBottom: 20,
                    padding: 10,
                }}

                placeholder="National ID Card Number"
                keyboardType="numeric"
            />
            <TextInput
                style={{
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 5,
                    marginBottom: 20,
                    padding: 10,
                }}

                placeholder="Phone Number"
                keyboardType="numeric"
            />

            <view
            style={{
                display: 'flex',
                marginBottom: 10,
            }}
            >
            <CheckBox
                style={{
                    marginRight: 5,
                   
                }}
            />
            <Text>I Accept the Terms and Policy</Text>
            </view>
            <View>
                <Button
                    style={{
                        
                    }}
                    title="Register"
                    color="#179bd7"
                    
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
            <Text style={{
                color: 'black',
                fontWeight: 700,
                marginTop: 20,
                textAlign: 'center',
            }}>Already have an account? Sign In.</Text>
        </View>
    );
}

export default Registration;