import { setStatusBarHidden } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, Image, Button, TextInput, CheckBox, TouchableWithoutFeedbackBase } from 'react-native'
import { Card, Avatar } from 'react-native-elements'

function FoodProductInStock() {
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
                marginBottom: 20,
                fontSize: 30,
                fontWeight: 700,
                textAlign: '',

            }}>Product in stock.</Text>

            <view style={{
                display: 'flex'
            }}>
                <View style={{
                    padding: 10,
                    borderRadius: 8,
                    borderBottomRightRadius: 0,
                    borderTopRightRadius: 0,
                    margin: 0,
                    borderWidth: 1,
                    borderRightWidth: 0,
                    borderColor: "#999999",
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <view>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',

                            alignItems: 'center',
                        }}>
                            <Avatar
                                rounded
                                source={{
                                    uri:
                                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                }}
                            />
                            <view style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginLeft: 10,

                            }}>
                                <Text style={{ fontWeight: 600 }}>Vendor Name</Text>
                                <view style={{
                                    display: 'flex',
                                    marginTop: 1,
                                }}>
                                    <View style={{

                                    }}>
                                        <Image
                                            source={require('../../../assets/images/review_star.svg')}
                                            style={{
                                                height: 15,
                                                width: 20,
                                            }}
                                        />
                                    </View>
                                    <Text style={{
                                        paddingLeft: 5,
                                    }}>4.5</Text>
                                    <Text style={{
                                        paddingLeft: 5,
                                    }}>(200)</Text>
                                </view>
                            </view>
                        </View>
                        <view style={{
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: 200,
                        }}>
                            <text style={{
                                fontSize: 22,
                                fontWeight: 800,
                                paddingTop: 10
                            }}>Product Name</text>
                            <text style={{
                                fontFamily: 'sans-serif',
                                fontSize: 12,

                                paddingTop: 10

                            }}>There are many variations of passages of Lorem</text>
                            <view style={{
                                paddingTop: 20
                            }}>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: 700,
                                    paddingTop: 20,

                                }}>Product Availability:</Text>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: 700,
                                    paddingTop: 20,
                                    paddingLeft: 20,
                                    color: '#8e2ad3'
                                }}>In Stock</Text>
                            </view>
                            <text style={{
                                fontSize: 17,
                                fontWeight: 800,
                                paddingTop: 20

                            }}>Price - 250.00 BDT</text>
                        </view>
                    </view>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 0
                }}>
                    <Image
                        source={require('../../../assets/images/Toast.jpg')}
                        style={{
                            height: 220,
                            width: 150,
                            borderRadius: 8,
                            borderBottomLeftRadius: 0,
                            borderTopLeftRadius: 0,
                            borderWidth: 1,
                            borderColor: "#999999",
                            borderLeftWidth: 0,
                        }}
                    />
                </View>
            </view>
            <view style={{
                display: 'flex',
                marginTop: 20
            }}>
                <View style={{
                    padding: 10,
                    borderRadius: 8,
                    borderBottomRightRadius: 0,
                    borderTopRightRadius: 0,
                    margin: 0,
                    borderWidth: 1,
                    borderRightWidth: 0,
                    borderColor: "#999999",
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <view>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',

                            alignItems: 'center',
                        }}>
                            <Avatar
                                rounded
                                source={{
                                    uri:
                                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                }}
                            />
                            <view style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginLeft: 10,

                            }}>
                                <Text style={{ fontWeight: 600 }}>Vendor Name</Text>
                                <view style={{
                                    display: 'flex',
                                    marginTop: 1,
                                }}>
                                    <View style={{

                                    }}>
                                        <Image
                                            source={require('../../../assets/images/review_star.svg')}
                                            style={{
                                                height: 15,
                                                width: 20,
                                            }}
                                        />
                                    </View>
                                    <Text style={{
                                        paddingLeft: 5,
                                    }}>4.5</Text>
                                    <Text style={{
                                        paddingLeft: 5,
                                    }}>(200)</Text>
                                </view>
                            </view>
                        </View>
                        <view style={{
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: 200,
                        }}>
                            <text style={{
                                fontSize: 22,
                                fontWeight: 800,
                                paddingTop: 10
                            }}>Product Name</text>
                            <text style={{
                                fontFamily: 'sans-serif',
                                fontSize: 12,

                                paddingTop: 10

                            }}>There are many variations of passages of Lorem</text>
                            <view style={{
                                paddingTop: 20
                            }}>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: 700,
                                    paddingTop: 20,

                                }}>Product Availability:</Text>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: 700,
                                    paddingTop: 20,
                                    paddingLeft: 20,
                                    color: '#8e2ad3'
                                }}>In Stock</Text>
                            </view>
                            <text style={{
                                fontSize: 17,
                                fontWeight: 800,
                                paddingTop: 20

                            }}>Price - 250.00 BDT</text>
                        </view>
                    </view>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 0
                }}>
                    <Image
                        source={require('../../../assets/images/Salad.jpg')}
                        style={{
                            height: 220,
                            width: 150,
                            borderRadius: 8,
                            borderBottomLeftRadius: 0,
                            borderTopLeftRadius: 0,
                            borderWidth: 1,
                            borderColor: "#999999",
                            borderLeftWidth: 0,
                        }}
                    />
                </View>
            </view>
            <view style={{
                display: 'flex',
                marginTop: 20
            }}>
                <View style={{
                    padding: 10,
                    borderRadius: 8,
                    borderBottomRightRadius: 0,
                    borderTopRightRadius: 0,
                    margin: 0,
                    borderWidth: 1,
                    borderRightWidth: 0,
                    borderColor: "#999999",
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <view>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',

                            alignItems: 'center',
                        }}>
                            <Avatar
                                rounded
                                source={{
                                    uri:
                                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                }}
                            />
                            <view style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginLeft: 10,

                            }}>
                                <Text style={{ fontWeight: 600 }}>Vendor Name</Text>
                                <view style={{
                                    display: 'flex',
                                    marginTop: 1,
                                }}>
                                    <View style={{

                                    }}>
                                        <Image
                                            source={require('../../../assets/images/review_star.svg')}
                                            style={{
                                                height: 15,
                                                width: 20,
                                            }}
                                        />
                                    </View>
                                    <Text style={{
                                        paddingLeft: 5,
                                    }}>4.5</Text>
                                    <Text style={{
                                        paddingLeft: 5,
                                    }}>(200)</Text>
                                </view>
                            </view>
                        </View>
                        <view style={{
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: 200,
                        }}>
                            <text style={{
                                fontSize: 22,
                                fontWeight: 800,
                                paddingTop: 10
                            }}>Product Name</text>
                            <text style={{
                                fontFamily: 'sans-serif',
                                fontSize: 12,

                                paddingTop: 10

                            }}>There are many variations of passages of Lorem</text>
                            <view style={{
                                paddingTop: 20
                            }}>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: 700,
                                    paddingTop: 20,

                                }}>Product Availability:</Text>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: 700,
                                    paddingTop: 20,
                                    paddingLeft: 20,
                                    color: '#8e2ad3'
                                }}>In Stock</Text>
                            </view>
                            <text style={{
                                fontSize: 17,
                                fontWeight: 800,
                                paddingTop: 20

                            }}>Price - 250.00 BDT</text>
                        </view>
                    </view>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 0
                }}>
                    <Image
                        source={require('../../../assets/images/Pasta.jpg')}
                        style={{
                            height: 220,
                            width: 150,
                            borderRadius: 8,
                            borderBottomLeftRadius: 0,
                            borderTopLeftRadius: 0,
                            borderWidth: 1,
                            borderColor: "#999999",
                            borderLeftWidth: 0,
                        }}
                    />
                </View>
            </view>
        </View>
    );
}

export default FoodProductInStock;