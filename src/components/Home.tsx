import { View, StyleSheet, Pressable, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'

type PropsTypes = PropsWithChildren<{
    navigation: any
}>
export default function Home({navigation}: PropsTypes): React.JSX.Element {
  return (
    <View style={styles.buttonContainer}>
        <Pressable onPress={() => { navigation.navigate('Roll Dice')}}>
        <Text style={styles.btnText}>
            ROLL DICE
        </Text>
      </Pressable>
        <Pressable onPress={() => { navigation.navigate('Flip Coin')}}>
        <Text style={styles.btnText}>
            FLIP COIN
        </Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
    buttonContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent:'center',
        marginLeft: 30,
        marginRight: 30,
        gap: 8
      },
      btnText: {
        marginTop: 30,
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#E5E0FF',
        fontSize: 16,
        color: '#8EA7E9',
        fontWeight: '700',
        textTransform: 'uppercase',
        textAlign: 'center'
      },
})