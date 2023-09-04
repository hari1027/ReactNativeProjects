import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

//navigation
import { useNavigation } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({ route }: DetailsProps) => {

    const { productId } = route.params
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <View style={styles.container}>
            <Text style={styles.smallText}>Details: {productId}</Text>
            <Button
                title='Go to Home'
                onPress={() => { navigation.navigate("Home") }}

            // simply go back one screen
            // onPress={() => { navigation.goBack()}}

            // pop no of screens you want
            // here only 2 screens we have soo 1
            // onPress={() => { navigation.pop(1)}}

            //goes to the intial page 
            // onPress={() => { navigation.popToTop() }}
            />
        </View>
    )
}

export default Details

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