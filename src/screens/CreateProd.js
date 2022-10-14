import React, { useState } from "react";
import { Text, View, StyleSheet, Button, ScrollView, Dimensions,TextInput} from 'react-native';
import axios from 'axios';
import SelectList from 'react-native-dropdown-select-list'


var height = Dimensions.get('window').height;
var {width} = Dimensions.get('window')
export default function CreateProd({navigation}) {

  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [images, setImages] = React.useState('https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png');
  const [stock, setStock] = React.useState('');

  const data = [
    {key:'Electronics',value:'Electronics'},
    {key:'Mens Apparel',value:'Mens Apparel'},
    {key:'Womens Apparel',value:'Womens Apparel'},
    {key:'Health and Personal Care',value:'Health and Personal Care'},
    {key:'Men Shoes',value:'Men Shoes'},
    {key:'Women Shoes',value:'Women Shoes'},
    {key:'Groceries',value:'Groceries'},
    
  ];


  const createClick = async () => {

    axios.post('https://ite301api.000webhostapp.com/phprestapi/api/product/create.php', { name: name, price: price, description: description, category: category, stock: stock, images:images})
      .then(response => alert('product added')).catch(function(error) {
        console.log('There has been a problem adding the product' + error.message);
         // ADD THIS THROW error
          throw alert('There has been a problem adding the product');});

  };
  
  return (
    <View style ={styles.container}>
    <Text style={styles.header}>Sell Your Product!</Text>
    <View style={styles.Box}>
 
        <Text style={styles.labelText}>Name:</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Product Name"
          value={name}
          onChangeText={name => setName(name)}
        />
        <Text style={styles.labelText}>Price:</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Set price on php"
          onChangeText={price => setPrice(price)}
        />
        <Text style={styles.labelText}>Category:</Text>
        <SelectList
         setCategory={setCategory}
          data={data} onValueChange={category => setCategory(category)}
          dropdownStyles={{backgroundColor:'white'}}
          dropdownTextStyles={{color:"black"}} />

        <Text style={styles.labelText}>Stock:</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Product available stock"
          onChangeText={stock => setStock(stock)}
        />
        <Text style={styles.labelText}>Description:</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Description"
          onChangeText={description => setDescription(description)}
        />
        <Text style={styles.labelText}>Image URL:</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Image url"
          onChangeText={images => setImages(images)}
        />
       <Button
          title="Submit"
          onPress={() => createClick(this)}
          style={styles.button}
          color="#6200EE"
        />
       
    </View>
    

    </View>
  
  );
  }
const styles = StyleSheet.create({
 container:{
  backgroundColor:'#f4ddd8',
  height:height,
  width:width
 },
 Box:{
  backgroundColor:"gray",
  width:width/1 -20,
  height:height/2 +80*2,
  
  alignSelf:"center",
  marginTop:40,
  elevation:10
 },
 header:{
  fontSize:30,
  fontFamily:"serif",
  alignSelf:'center',
  color:'crimson',
  marginTop:30
 },
  labelText: {
  marginTop:10,
  marginBottom: 5,
  fontFamily:'sans-serif',
  fontWeight:'bold',
  fontSize:15,
  paddingLeft:5
},
button: {
  borderRadius: 4,
  padding: 8,
  elevation: 2,
  width:width/4,
  marginTop:20
},

})


