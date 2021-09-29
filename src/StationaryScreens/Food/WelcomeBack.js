import { setStatusBarHidden } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, Image, Button, TextInput, CheckBox } from 'react-native'

function WelcomeBack() {
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
                marginLeft: 15,
                fontSize: 25,
                fontWeight: 400,
                textAlign: '',
            }}>Welcome Back.</Text>
            <Text style={{
                marginTop: 20,
                fontSize: 15,
                fontWeight: 400,
                marginBottom: 20,
                color: '#999999'
            }}>Hello there, Log-in to See you around your Location.</Text>
            <Text style={{
                marginTop: 20,
                fontSize: 15,
                fontWeight: 400,
                marginBottom: 5,
                color: '#999999'
            }}>Userneme or Email.</Text>
            <TextInput
                style={{
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 5,
                    marginBottom: 20,
                    padding: 10,
                    borderColor: '##8d2ad3'
                }}
                placeholder="Username or Email"
                keyboardType="numeric"
            />
            <Text style={{
                marginTop: 15,
                fontSize: 15,
                fontWeight: 400,
                marginBottom: 5,
                color: '#999999'
            }}>Password.</Text>
            <TextInput
                style={{
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 5,
                    padding: 10,
                    borderColor: '##8d2ad3'
                }}
                placeholder="Password"
                keyboardType="numeric"
            />
            <Text style={{
                marginTop: 20,
                fontSize: 15,
                fontWeight: 400,
                marginBottom: 25,
                color: '#999999'
            }}>Forgot Password?</Text>
            <View>
                <Button
                    style={{
                        marginTop: 20,
                    }}
                    title="Sign In"
                    color="#8d2ad3"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
            <view style={{
                marginTop: 20,
                textAlign: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 600,
                }}>Don't have any account? </Text>
                <Text style={{
                    color: '#8d2ad3',
                    fontWeight: 700,
                }}>Create Account.</Text>
            </view>
        </View>
    );
}

export default WelcomeBack;