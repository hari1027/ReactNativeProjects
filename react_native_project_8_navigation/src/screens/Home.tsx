import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App"

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({ navigation }: HomeProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.smallText}>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details', {
                    productId: "1"
                })}

            // pushing screens in a stack
            // onPress={() => navigation.push('Details', {
            //     productId: "1"
            // })}

            // replacing the screen
            // onPress={() => navigation.replace('Details', {
            //     productId: "1"
            // })}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallText: {
        color: "#212121"
    }
})