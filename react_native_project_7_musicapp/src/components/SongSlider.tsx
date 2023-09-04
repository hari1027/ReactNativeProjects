import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useProgress } from "react-native-track-player"
import Slider from '@react-native-community/slider'
import TrackPlayer from 'react-native-track-player';

const SongSlider = () => {
    let { position, duration } = useProgress();

    const handleSliderChange = (value: any) => {
        TrackPlayer.seekTo(value)
    }

    return (
        <View>
            <Slider
                value={position}
                minimumValue={0}
                maximumValue={duration}
                thumbTintColor='#FFF'
                maximumTrackTintColor='#FFF'
                style={styles.sliderContainer}
                onValueChange={handleSliderChange}
            />
            <View style={styles.timeContainer}>
                <Text style={styles.time}>
                    {new Date(position * 1000).toISOString().substring(15, 19)}
                </Text>

                <Text style={styles.time}>
                    {new Date((duration - position) * 1000).toISOString().substring(15, 19)}
                </Text>
            </View>
        </View>
    )
}

export default SongSlider

const styles = StyleSheet.create({
    sliderContainer: {
        width: 350,
        height: 40,
        marginTop: 25,

        flexDirection: 'row',
    },
    timeContainer: {
        width: 340,

        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    time: {
        color: '#fff',
    },
})