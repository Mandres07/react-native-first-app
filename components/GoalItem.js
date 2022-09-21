import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function GoalItem({ id, text, onItemClick }) {
   function onDeleteHandler() {
      onItemClick(id);
   }

   function getPressableStyle({ pressed }) {
      return pressed && styles.pressedItem;
   }

   return (
      <Pressable android_ripple={{ color: '#40078b' }}
         onPress={onDeleteHandler}
         style={getPressableStyle}
      >
         <View style={styles.goalItem}>
            <Text style={styles.goalText}>
               {text}
            </Text>
         </View>
      </Pressable>
   );
};

const styles = StyleSheet.create({
   goalItem: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: '#5e0acc'
   },
   pressedItem: {
      opacity: 0.5,
   },
   goalText: {
      color: 'white',
      padding: 8,
   }
});