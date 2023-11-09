import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Icon } from '@rneui/themed';
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
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: item.avatar }}
          />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
        <View style={{flex:1}}>
        <TouchableOpacity onPress={()=>fullName(`${item.name}${'\n'}${item.alias}${'\n'}${item.position}${'\n'}${item.address}${'\n'}${item.bounty}`)}>
          <Icon
            name="dots-three-horizontal"
            type="entypo"
            size={20}
            style={styles.opt}
        />
        </TouchableOpacity>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius:400/2,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
    fontWeight:'bold',
  },
  address:{
    fontSize: 12,
    marginBottom:20
  },
  opt:{
    flexDirection:'row-reverse',
    padding:12,
    marginLeft:15
  },
});
