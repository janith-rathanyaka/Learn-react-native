// 2 session part 15
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import GoalItem from './components/GoalItem';
import { 
  StyleSheet,
   Text,
    View, 
     TextInput ,
      Button ,
       ScrollView,
       FlatList
      
      } from 'react-native';

export default function App() {
  const [enterGoal,setEnterGoal] = useState('');
  const [courseGoal,setCourseGoals] = useState([])
  function goalInputHandler(enterText){
   setEnterGoal(enterText);
  }

  function addGoalHandler(){
   // setCourseGoals([...setCourseGoals,enterGoal])
    setCourseGoals(currentGoals => [...currentGoals,{key:Math.random().toString(),value:enterGoal}])
  }
  return (
    <View style={{padding: 30}}>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TextInput 
            placeholder="Course goal"
            style={{borderColor:'black', borderWidth:1,padding:10}}
            onChangeText={goalInputHandler} 
            value={enterGoal}
              />
            <Button  title="ADD" onPress={addGoalHandler} />
        
       </View>
       <FlatList 
        data={courseGoal}
        renderItem = { itemData => <GoalItem title={itemData.item.value} /> }
       
       />

    {/*   <ScrollView>
        {courseGoal.map((goal)=>(
        <View key={goal} style={styles.listItem}>
          <Text >{goal}</Text>
          </View>
          ))}
       </ScrollView>  */}
    </View>
  );
}

const styles = StyleSheet.create({
    listItem:{
      padding:10,
      marginVertical:10,
      backgroundColor:'#ccc',
      borderColor: 'black',
      borderWidth: 1
    }
});
