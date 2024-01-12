import { View, Text, ImageSourcePropType, StyleSheet, Image, Pressable } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import FaceOne from '../../assets/FaceOne.jpeg'
import FaceTwo from '../../assets/FaceTwo.jpeg'
import FaceThree from '../../assets/FaceThree.jpeg'
import FaceFour from '../../assets/FaceFour.jpeg'
import FaceFive from '../../assets/FaceFive.jpeg'
import FaceSix from '../../assets/FaceSix.jpeg'

type DiceProps = PropsWithChildren<{
    imagePath: ImageSourcePropType
}>
const RoleDice = ({imagePath}: DiceProps):React.JSX.Element =>{
    return(
        <View>
            <Image style={styles.diceImage} source={imagePath} />
        </View>
    )
}
export default function Dice(): React.JSX.Element {
    const [diceImage, setDiceImage] = useState<ImageSourcePropType>(FaceOne)
    const [diceFace, setDiceFace] = useState<String>('1')

    const rollDiceOnTap = () => {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        switch (randomNumber) {
          case 1:
            setDiceImage(FaceOne)
            setDiceFace('1')
            break;
          case 2:
            setDiceImage(FaceTwo)
            setDiceFace('2')
            break;
          case 3:
            setDiceImage(FaceThree)
            setDiceFace('3')
            break;
          case 4:
            setDiceImage(FaceFour)
            setDiceFace('4')
            break;
          case 5:
            setDiceImage(FaceFive)
            setDiceFace('5')
            break;
          case 6:
            setDiceImage(FaceSix)
            setDiceFace('6')
            break;
        
          default:
            setDiceImage(FaceOne)
            setDiceFace('1')
            break;
        }
      }
    
  return (
    <View style={styles.container}>
        <Text style={styles.headingText}>Dice Number: {diceFace}</Text>
      <RoleDice imagePath={diceImage} />
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>
            Roll the dice
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
    diceContainer: {
      margin: 12,
    },
    diceImage: {
      width: 200,
      height: 200,
    },
    headingText:{
        color: '#8EA7E9',
        fontSize: 20,
        marginBottom: 20,
        letterSpacing: 2
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
  