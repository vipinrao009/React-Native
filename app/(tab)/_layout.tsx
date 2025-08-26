import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
            name='index' 
            options={{
                title:'Home',
                tabBarIcon: ({color,size}) => <FontAwesome size={28} name='home' color={color}/>

            }}/>
        <Tabs.Screen 
            name='profile' 
            options={{
                title:'Profile',
                tabBarIcon:({color})=> {
                    return (
                        <View
                           style={{
                            width:60,
                            height:60,
                            justifyContent:'center',
                            alignItems:'center',
                            backgroundColor:'red',
                            marginBottom:40,
                            borderRadius:50
                           }}
                        >
                            <FontAwesome size={28} name='user' color={color}/>
                        </View>
                    )
                }
                }}/>
        <Tabs.Screen
            name="about"
            options={{
                title: 'About',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name='about' color={color} />,
            }}>
        </Tabs.Screen>
    </Tabs>
  )
}

export default _layout