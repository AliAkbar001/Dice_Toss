import { View, Text, ImageSourcePropType, StyleSheet, Image, Pressable } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import Head from '../../assets/Head.jpeg'
import Tail from '../../assets/Tail.jpeg'

type CoinProps = PropsWithChildren<{
    imagePath: ImageSourcePropType
}>
const FlipCoin = ({imagePath}: CoinProps):React.JSX.Element =>{
    return(
        <View>
            <Image style={styles.diceImage} source={imagePath} />
        </View>
    )
}
export default function Coin(): React.JSX.Element {
    const [coinImage, setCoinImage] = useState<ImageSourcePropType>(Head)
    const [coinFace, setCoinFace] = useState<String>('Head')

    const flipCoinOnTap = () => {
        let randomNumber = Math.floor(Math.random() * 2) + 1;
        if(randomNumber === 1){
            setCoinImage(Head) 
            setCoinFace('Head')
        }else{
            setCoinImage(Tail)
            setCoinFace('Tail')
        }
      }
    
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{coinFace}</Text>
      <FlipCoin imagePath={coinImage} />
      <Pressable onPress={flipCoinOnTap}>
        <Text style={styles.rollDiceBtnText}>
            FLIP COIN
        </Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    headingText:{
        color: '#8EA7E9',
        fontSize: 20,
        marginBottom: 20,
        letterSpacing: 2
    },
    diceContainer: {
      margin: 12,
    },
    diceImage: {
      width: 200,
      height: 200,
    },
    rollDiceBtnText: {
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
    },
  });
  