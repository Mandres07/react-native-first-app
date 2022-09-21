import { useState } from 'react';
import { StyleSheet, FlatList, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
   const [goals, setGoals] = useState([]);
   const [showModal, setShowModal] = useState(false);

   function addGoalHandler(enteredGoal) {
      setGoals(currentGoals => [
         ...currentGoals,
         { text: enteredGoal, id: Math.random().toString() }
      ]);
      cancelAddGoalHandler();
   }

   function deleteGoalHandler(id) {
      setGoals(currentGoals => {
         return currentGoals.filter(item => item.id !== id);
      });
   }

   function startAddGoalHandler() {
      setShowModal(true);
   }

   function cancelAddGoalHandler() {
      setShowModal(false);
   }

   return (
      <>
         <StatusBar style='light' />
         <View style={styles.appContainer}>
            <Button title='Add New Goal' color="#b796e2" onPress={startAddGoalHandler} />
            <GoalInput addGoalHandler={addGoalHandler} onCancelModal={cancelAddGoalHandler} showModal={showModal} />
            <View style={styles.goalsContainer}>
               <FlatList data={goals}
                  renderItem={itemData => (
                     <GoalItem id={itemData.item.id} text={itemData.item.text} onItemClick={deleteGoalHandler} />
                  )}
                  keyExtractor={(item, index) => item.id}
               />
            </View>
         </View>
      </>
   );
}

const styles = StyleSheet.create({
   appContainer: {
      flex: 1,
      padding: 50,
      paddingHorizontal: 16
   },
   goalsContainer: {
      flex: 5
   },
});
