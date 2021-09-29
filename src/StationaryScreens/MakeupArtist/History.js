import { setStatusBarHidden } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, Image, Button, TextInput, CheckBox, TouchableWithoutFeedbackBase } from 'react-native'
import { Card, Avatar } from 'react-native-elements'

function History() {
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
                paddingLeft: 20,
                fontSize: 25,
                fontWeight: 400,
                textAlign: '',

            }}>History.</Text>


            <View style={{ padding: 10, borderRadius: 8, marginTop: 20, borderWidth: 1, borderColor: "#999999" }}>

                
                <view style={{
                    display: 'flex',
                    marginBottom: 15
                }}>
                    <Image
                        source={require('../../../assets/images/Makeup4.jpg')}
                        style={{
                            height: 120,
                            width: 130,
                            borderRadius: 40,
                        }}
                    />
                    <view style={{
                        marginLeft: 20,
                        marginTop: 10,

                    }}>
                        <text style={{
                            fontWeight: 700,
                            fontFamily: 'sans-serif',
                        }}>
                            Makeup Artist Name
                        </text>
                        <view style={{

                        }}>
                            <view style={{
                                display: 'flex'
                            }}>
                                <View style={{
                                    marginTop: 10,
                                }}>
                                    <Image
                                        source={require('../../../assets/images/review_star.svg')}
                                        style={{
                                            height: 15,
                                            width: 20,
                                        }}
                                    />
                                </View>
                                <View style={{
                                    marginTop: 10,
                                }}>
                                    <Image
                                        source={require('../../../assets/images/review_star.svg')}
                                        style={{
                                            height: 15,
                                            width: 20,
                                        }}
                                    />
                                </View>
                                <View style={{
                                    marginTop: 10,
                                }}>
                                    <Image
                                        source={require('../../../assets/images/review_star.svg')}
                                        style={{
                                            height: 15,
                                            width: 20,
                                        }}
                                    />
                                </View>
                                <View style={{
                                    marginTop: 10,
                                }}>
                                    <Image
                                        source={require('../../../assets/images/review_star.svg')}
                                        style={{
                                            height: 15,
                                            width: 20,
                                        }}
                                    />
                                </View>
                                <View style={{
                                    marginTop: 10,
                                }}>
                                    <Image
                                        source={require('../../../assets/images/review_star.svg')}
                                        style={{
                                            height: 15,
                                            width: 20,
                                        }}
                                    />
                                </View>
                                <text style={{ marginTop: 12, paddingLeft: 10, fontSize: 12 }}>4.5</text>
                            </view>
                        </view>
                        <view style={{
                            display: 'flex',
                            flexDirection: 'column',

                        }}>
                            <text style={{
                                marginTop: 10,
                            }}>
                                2.5 km Distance
                            </text>
                            <text style={{
                                marginTop: 10,
                            }}>
                                30 Min
                            </text>
                        </view>

                    </view>
                </view>
                
                <view><hr></hr></view>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 15,

                }}>
                    <Text style={{ fontWeight: 800 }}>Jennifer Lawrence</Text>
                    <Text>350.00 BDT</Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontWeight: 600, marginTop: 15 }}>Service Take:</Text>
                    <Text style={{ marginTop: 15 }}>Bridal Makeup</Text>
                    <view style={{
                        marginTop: 6
                    }}>
                    <Avatar
                        rounded
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />
                    </view>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontWeight: 600, marginTop: 15 }}>Payment Method:</Text>
                    <Text style={{ marginTop: 15 }}>Cash on Delivery</Text>
                    <Text></Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontWeight: 600, marginTop: 15 }}>Delivery Charge:</Text>
                    <Text style={{ marginTop: 15 }}>45.00 BDT</Text>
                    <Text style={{ width: 20 }}></Text>
                </View>

            </View>
            
            <View style={{ padding: 10, borderRadius: 8, marginTop: 20, borderWidth: 1, borderColor: "#999999" }}>

                
                <view style={{
                    display: 'flex',
                    marginBottom: 15
                }}>
                    <Image
                        source={require('../../../assets/images/Makeup4.jpg')}
                        style={{
                            height: 120,
                            width: 130,
                            borderRadius: 40,
                        }}
                    />
                    <view style={{
                        marginLeft: 20,
                        marginTop: 10,

                    }}>
                        <text style={{
                            fontWeight: 700,
                            fontFamily: 'sans-serif',
                        }}>
                            Makeup Artist Name
                        </text>
                        <view style={{

                        }}>
                            <view style={{
                                display: 'flex'
                            }}>
                                <View style={{
                                    marginTop: 10,
                                }}>
                                    <Image
                                        source={require('../../../assets/images/review_star.svg')}
                                        style={{
                                            height: 15,
                                            width: 20,
                                        }}
                                    />
                                </View>
                                <View style={{
                                    marginTop: 10,
                                }}>
                                    <Image
                                        source={require('../../../assets/images/review_star.svg')}
                                        style={{
                                            height: 15,
                                            width: 20,
                                        }}
                                    />
                                </View>
                                <View style={{
                                    marginTop: 10,
                                }}>
                                    <Image
                                        source={require('../../../assets/images/review_star.svg')}
                                        style={{
                                            height: 15,
                                            width: 20,
                                        }}
                                    />
                                </View>
                                <View style={{
                                    marginTop: 10,
                                }}>
                                    <Image
                                        source={require('../../../assets/images/review_star.svg')}
                                        style={{
                                            height: 15,
                                            width: 20,
                                        }}
                                    />
                                </View>
                                <View style={{
                                    marginTop: 10,
                                }}>
                                    <Image
                                        source={require('../../../assets/images/review_star.svg')}
                                        style={{
                                            height: 15,
                                            width: 20,
                                        }}
                                    />
                                </View>
                                <text style={{ marginTop: 12, paddingLeft: 10, fontSize: 12 }}>4.5</text>
                            </view>
                        </view>
                        <view style={{
                            display: 'flex',
                            flexDirection: 'column',

                        }}>
                            <text style={{
                                marginTop: 10,
                            }}>
                                2.5 km Distance
                            </text>
                            <text style={{
                                marginTop: 10,
                            }}>
                                30 Min
                            </text>
                        </view>

                    </view>
                </view>
                
                <view><hr></hr></view>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 15,

                }}>
                    <Text style={{ fontWeight: 800 }}>Jennifer Lawrence</Text>
                    <Text>350.00 BDT</Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontWeight: 600, marginTop: 15 }}>Service Take:</Text>
                    <Text style={{ marginTop: 15 }}>Bridal Makeup</Text>
                    <view style={{
                        marginTop: 6
                    }}>
                    <Avatar
                        rounded
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />
                    </view>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontWeight: 600, marginTop: 15 }}>Payment Method:</Text>
                    <Text style={{ marginTop: 15 }}>Cash on Delivery</Text>
                    <Text></Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontWeight: 600, marginTop: 15 }}>Delivery Charge:</Text>
                    <Text style={{ marginTop: 15 }}>45.00 BDT</Text>
                    <Text style={{ width: 20 }}></Text>
                </View>

            </View>

        </View>
    );
}

export default History;