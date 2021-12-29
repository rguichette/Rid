import React from 'react'
import { Text, View , StyleSheet } from 'react-native'
import { ListItem } from '../components/ListItem'
import { Screen } from './Screen'

import {Icon} from '../components/Icon'

import colors from '../config/colors'

export default function MyAccountScreen() {
    return (
        <Screen style={styles.container}>

            <ListItem style={styles.profile} image={require("../assets/icon.png")}  title="My Account" subtitle="hithere@email.com"/>
            
            <View>
                <View style={styles.myItems}>
                <ListItem title="My Messages" IconComponent={<Icon iconName="format-list-bulleted"  iconBGColor={colors.primary}/>
                    } onPress={()=>console.log("hi")}
                    />
                        <ListItem title="My Messages" IconComponent={<Icon iconName="email" iconBGColor={colors.secondary}/>
                    } onPress={()=>console.log("hi")}
                    />
                </View>

                <ListItem  style={styles.logout} title="Logout" IconComponent={<Icon iconName="logout"  iconBGColor={"#ffe66d"}/>
                    } onPress={()=>console.log("hi")}
                    />

            </View>
            {/* <ListItem/>
            <ListItem/> */}


        </Screen>
    )
}


const styles = StyleSheet.create({
    container:{
    backgroundColor: colors.light
    },
    myItems:{
        marginTop: 44

    },
    logout:{
        marginTop: 15,
        backgroundColor: 'white'
    },
    profile:{
        backgroundColor: 'white'
    }
})