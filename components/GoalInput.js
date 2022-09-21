import { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal, Image } from 'react-native';

export default function GoalInput({ addGoalHandler, showModal, onCancelModal }) {
   const [enteredGoal, setEnteredGoal] = useState('');

   function goalInputHandler(enteredValue) {
      setEnteredGoal(enteredValue);
   }

   function onButtonPress() {
      addGoalHandler(enteredGoal);
      setEnteredGoal('');
   }

   return (
      <Modal visible={showModal} animationType='slide'>
         <View style={styles.inputContainer}>
            <Image
               source={require('../assets/images/goal.png')}
               style={styles.image}
            />
            <TextInput
               style={styles.textInput}
               placeholder='Your course goal!'
               onChangeText={goalInputHandler}
               value={enteredGoal}
            />
            <View style={styles.actionContainer}>
               <View style={styles.button}>
                  <Button title='Cancel' onPress={onCancelModal} color="#f31282" />
               </View>
                <View style={styles.button}>
                  <Button title='Add Goal' onPress={onButtonPress} color="#b180f0" />
               </View>
            </View>
         </View>
      </Modal>
   );
};

const styles = StyleSheet.create({
   inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#311b6b'
   },
   image: {
      width: 100,
      height: 100,
      margin: 20
   },
   textInput: {
      borderWidth: 1,
      borderColor: '#e4d0ff',
      backgroundColor: '#e4d0ff',
      color: '#120438',
      borderRadius: 6,
      width: '70%',
      padding: 16,
   },
   actionContainer: {
      marginTop: 16,
      flexDirection: 'row'
   },
   button: {
      width: 100,
      marginHorizontal: 8
   }
});