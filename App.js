import React, { Component} from 'react';
import { AppRegistry,Alert, Text, TextInput,StyleSheet,FlatList,Button,View } from 'react-native';


export default class PizzaTranslator extends Component {
  constructor(probs){
    super(probs);
    this.state = {text: ''};
  }
  
  render() {
    return (
        <View style={{padding: 40}}>
        <TextInput style={{heigt: 10}}
            placeholder="Edit_text"
            onChangeText={(text) => this.setState({text})} 
		/>
        
		<Text style={{padding:10, fontSize: 42}}>
            {this.state.text.split(' ').map ((word) => word && '🍕').join(' ')}
        </Text>
		
        <Button 
            onPress={() => { Alert.alert('You tapped the button!'); }}
            title="Press Me"
        />
		
		<FlatList
            data={[
            {key: 'Biehan'},
            {key: 'Ruslan'},
            {key: 'Romanovich'},
			{key: 'PMP_Lab2'},
            ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        /> 
        </View>
    );
  }
}
AppRegistry.registerComponent('FirstApp', ()=>PizzaTranslator);


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
	backgroundColor: 'green',
  },
})


