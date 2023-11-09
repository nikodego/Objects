import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Button } from '@rneui/themed';
import Entypo from 'react-native-vector-icons/Entypo';
import { datas } from './data';

export default function App() {

  const fullName = (users) =>{
    alert(users)
  };
  
  return (
    <View style={styles.container}>
      <ScrollView>
      <Entypo/>
      <FlatList
        data={datas}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => (
        <View style={styles.user}>          
          <View style={styles.nickn}>
            <Text style={styles.name}>{item.nickName}</Text>
          </View>
        <View style={styles.button}>
        <Button 
              title="Show"
              onPress={()=>fullName(`${'Name: '}${item.name.firstName}${' '}${item.name.lastName}${'\n'}${'Course: '}${item.course}${'\n'}${'Year: '}${item.year}`)}
              buttonStylestyle={styles.buton}/>
        </View> 
    </View>
  )}
    />
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
    width: 300,
  },
  name: {
    fontSize: 30,
    marginTop: 5,
    fontWeight:'bold',
  },
  nickn: {
    width: 200,
    padding: 10,
  },
  buton: {
    width: 59,
    color: 'green',
  },
  button: {
    width: 89,
    marginTop: 10,
    flexDirection: 'row-reverse',
  },
});
