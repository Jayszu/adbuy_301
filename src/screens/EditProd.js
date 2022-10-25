import { Dimensions, StyleSheet, Text, View,TextInput,Button} from 'react-native'
import SelectList from 'react-native-dropdown-select-list';
import React from 'react'
import axios from 'axios';
var height = Dimensions.get('window').height;
var {width} = Dimensions.get('window')
const EditProd = ({route}) => {
    const [name, setName] = React.useState(route.params.item.name);
  const [price, setPrice] = React.useState(route.params.item.price);
  const [description, setDescription] = React.useState(route.params.item.description);
  const [category, setCategory] = React.useState(route.params.item.category);
  const [images, setImages] = React.useState(route.params.item.images);
  const [stock, setStock] = React.useState(route.params.item.stock);
  const [id] = React.useState(route.params.item.id);
//cate
  const data = [
    {key:'Electronics',value:'Electronics'},
    {key:'Mens Apparel',value:'Mens Apparel'},
    {key:'Womens Apparel',value:'Womens Apparel'},
    {key:'Health and Personal Care',value:'Health and Personal Care'},
    {key:'Men Shoes',value:'Men Shoes'},
    {key:'Women Shoes',value:'Women Shoes'},
    {key:'Groceries',value:'Groceries'},
    
  ];
  const updateClick = async () => {

    axios.post('https://adbuystore.000webhostapp.com/phprestapi/api/product/update.php', {id:id, name: name, price: price, description: description, category: category, stock: stock, images:images})
      .then(response => alert('product updated')).catch(function(error) {
        console.log('There has been a problem adding the product' + error.message);
         // ADD THIS THROW error
          throw alert('There has been a problem adding the product');});

  };
  return (
    <View style ={styles.container}>
    <Text style={styles.header}>Update your Product</Text>
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
          value={price}
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
          value={stock}
          placeholder="Product available stock"
          onChangeText={stock => setStock(stock)}
        />
        <Text style={styles.labelText}>Description:</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Description"
          value={description}
          onChangeText={description => setDescription(description)}
        />
        <Text style={styles.labelText}>Image:</Text>
        <TextInput
          style={styles.inputText}
          value={images}
          placeholder="Image url"
          onChangeText={images => setImages(images)}
        />
        
      
    </View>
    <View>
       <Button
          title="Submit"
          onPress={() => updateClick(this)}
          style={styles.button}
          color="#6200EE"
    
        />
       </View>
    

    </View>
  
  );
  }
  export default EditProd;
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
  
},
imagebutton:{
  width:300,
  backgroundColor:'gainsboro',
  elevation:8,
 alignSelf:"center",
  justifyContent:'center',
  height:50,
  alignItems:'center',
  borderRadius:5
}

})

