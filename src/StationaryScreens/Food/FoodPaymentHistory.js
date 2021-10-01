import { setStatusBarHidden } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, Image, Button, TextInput, CheckBox, TouchableWithoutFeedbackBase } from 'react-native'
import { Card, Avatar } from 'react-native-elements'

function FoodPaymentHistory() {
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

            }}>Payment History.</Text>
            <Text style={{
                marginTop: 25,
                paddingLeft: 10,
                fontSize: 20,
                fontWeight: 400,
                textAlign: '',

            }}>Your Weekly Earning History.</Text>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderRadius: 8, marginTop: 20, borderWidth: 1, borderColor: "#999999" }}>
                <view style={{
                    display: 'flex'
                }}>
                    <Image
                        source={require('../../../assets/images/Customer.jpg')}
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 50 / 2,
                            marginRight: 10
                        }}
                    />
                    <view>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',


                        }}>

                            <Text style={{ fontWeight: 700, fontFamily: 'sans-serif', fontSize: 15 }}>Customer Name</Text>


                        </View>
                        <view>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{ marginTop: 10, fontSize: 12 }}>Selling item:</Text>


                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{ marginTop: 10, fontSize: 12 }}>Quantity:</Text>


                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{ marginTop: 10, fontSize: 12 }}>Delivery Location:</Text>


                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{ marginTop: 10, fontSize: 12 }}>Delivery Charge:</Text>


                            </View>
                        </view>
                    </view>
                </view>
                <view>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',

                    }}>
                        <Text style={{ fontWeight: 700, fontFamily: 'sans-serif', fontSize: 15 }}>350.00 BDT</Text>
                    </View>
                    <view>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>

                            <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 600, }}>Bririyany</Text>

                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>

                            <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 600, }}>5 Pkt</Text>

                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>

                            <Text style={{ marginTop: 10, fontSize: 11, fontWeight: 600, }}>109/2 Arjotpara, Mohakhali</Text>

                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>

                            <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 600, }}>45.00 BDT</Text>

                        </View>
                    </view>
                </view>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderRadius: 8, marginTop: 20, borderWidth: 1, borderColor: "#999999" }}>
                <view style={{
                    display: 'flex'
                }}>
                    <Image
                        source={require('../../../assets/images/Customer.jpg')}
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 50 / 2,
                            marginRight: 10
                        }}
                    />
                    <view>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',


                        }}>

                            <Text style={{ fontWeight: 700, fontFamily: 'sans-serif', fontSize: 15 }}>Customer Name</Text>


                        </View>
                        <view>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{ marginTop: 10, fontSize: 12 }}>Selling item:</Text>


                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{ marginTop: 10, fontSize: 12 }}>Quantity:</Text>


                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{ marginTop: 10, fontSize: 12 }}>Delivery Location:</Text>


                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{ marginTop: 10, fontSize: 12 }}>Delivery Charge:</Text>


                            </View>
                        </view>
                    </view>
                </view>
                <view>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',

                    }}>
                        <Text style={{ fontWeight: 700, fontFamily: 'sans-serif', fontSize: 15 }}>350.00 BDT</Text>
                    </View>
                    <view>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>

                            <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 600, }}>Bririyany</Text>

                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>

                            <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 600, }}>5 Pkt</Text>

                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>

                            <Text style={{ marginTop: 10, fontSize: 11, fontWeight: 600, }}>109/2 Arjotpara, Mohakhali</Text>

                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>

                            <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 600, }}>45.00 BDT</Text>

                        </View>
                    </view>
                </view>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderRadius: 8, marginTop: 20, borderWidth: 1, borderColor: "#999999" }}>
                <view style={{
                    display: 'flex'
                }}>
                    <Image
                        source={require('../../../assets/images/Customer.jpg')}
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 50 / 2,
                            marginRight: 10
                        }}
                    />
                    <view>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',


                        }}>

                            <Text style={{ fontWeight: 700, fontFamily: 'sans-serif', fontSize: 15 }}>Customer Name</Text>


                        </View>
                        <view>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{ marginTop: 10, fontSize: 12 }}>Selling item:</Text>


                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{ marginTop: 10, fontSize: 12 }}>Quantity:</Text>


                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{ marginTop: 10, fontSize: 12 }}>Delivery Location:</Text>


                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{ marginTop: 10, fontSize: 12 }}>Delivery Charge:</Text>


                            </View>
                        </view>
                    </view>
                </view>
                <view>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',

                    }}>
                        <Text style={{ fontWeight: 700, fontFamily: 'sans-serif', fontSize: 15 }}>350.00 BDT</Text>
                    </View>
                    <view>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>

                            <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 600, }}>Bririyany</Text>

                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>

                            <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 600, }}>5 Pkt</Text>

                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>

                            <Text style={{ marginTop: 10, fontSize: 11, fontWeight: 600, }}>109/2 Arjotpara, Mohakhali</Text>

                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>

                            <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 600, }}>45.00 BDT</Text>

                        </View>
                    </view>
                </view>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderRadius: 8, marginTop: 20, borderWidth: 1, borderColor: "#999999" }}>
                <view style={{
                    display: 'flex'
                }}>
                    <Image
                        source={require('../../../assets/images/Customer.jpg')}
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 50 / 2,
                            marginRight: 10
                        }}
                    />
                    <view>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',


                        }}>

                            <Text style={{ fontWeight: 700, fontFamily: 'sans-serif', fontSize: 15 }}>Customer Name</Text>


                        </View>
                        <view>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{ marginTop: 10, fontSize: 12 }}>Selling item:</Text>


                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{ marginTop: 10, fontSize: 12 }}>Quantity:</Text>


                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{ marginTop: 10, fontSize: 12 }}>Delivery Location:</Text>


                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{ marginTop: 10, fontSize: 12 }}>Delivery Charge:</Text>


                            </View>
                        </view>
                    </view>
                </view>
                <view>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',

                    }}>
                        <Text style={{ fontWeight: 700, fontFamily: 'sans-serif', fontSize: 15 }}>350.00 BDT</Text>
                    </View>
                    <view>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>

                            <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 600, }}>Bririyany</Text>

                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>

                            <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 600, }}>5 Pkt</Text>

                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>

                            <Text style={{ marginTop: 10, fontSize: 11, fontWeight: 600, }}>109/2 Arjotpara, Mohakhali</Text>

                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>

                            <Text style={{ marginTop: 10, fontSize: 12, fontWeight: 600, }}>45.00 BDT</Text>

                        </View>
                    </view>
                </view>
            </View>
        </View>
    );
}

export default FoodPaymentHistory;