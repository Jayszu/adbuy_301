import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity,ScrollView,TouchableWithoutFeedback } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'





var height = Dimensions.get('window').height;
var { width } = Dimensions.get('window');


const ProductCard = ({ product, navigation }) => {
  const[ click ,setClick] = useState(false);

  return (
 <TouchableWithoutFeedback onPress={()=> navigation.navigate("ProductDetails",
  {item:product})}>
  <View style={styles.productCard}>
      <Image source={{ uri: product.images[0].url }}
        style={styles.image}
      />
      <View>
        <Text style={{
          color: "#333",
          paddingVertical: 5,
          textAlign: 'center'

        }}>{product.name}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
      <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:"space-between",
            width: "100%",
            paddingBottom:10
          }}>
        <Text style={{ color: 'green', paddingHorizontal:10, fontSize:15 }}>₱{product.price}</Text>
        <View 
            style={{
              flexDirection: 'row',
              alignItems: 'center',              
            }}
           >
           <Icon name='star' color="#C68600" size={18} />
           <Text style={{
             color:"#333",
             paddingHorizontal:5,
             fontSize:16
           }}>({product.numOfReviews})</Text>
           </View>
      </View>
      </View>
      
      <View style={{
            flexDirection:"row",
            justifyContent:'flex-end'
          }}>
          {
            click ? (
              <TouchableOpacity>
          <Icon name ="heart" size={28}  style={{marginRight:5, color:'crimson',}}
            onPress={()=>setClick(!click)}
          />
          </TouchableOpacity>
            
            )
            :(
              <TouchableOpacity>
          <Icon name ="heart-dislike" size={28} style={{marginRight:5, color:'#333'}}
            onPress={()=>setClick(!click)}
          />
          </TouchableOpacity>
            )
          }
          {
            product.Stock !== 0 ? (
              <TouchableOpacity>
          <Icon name ="cart-outline" size={28}s style={{color:'#333'}}/>
          </TouchableOpacity>
            )
            :(
              null
            )
          }
        
          </View>
         {
          product.Stock === 0 ? (
            <View style={styles.outofstock}>
          <Text style ={{color:'red', fontSize:14}}>No Stock</Text>

          </View>
          )
          :(
            null
          )
         }
          
    </View>
 </TouchableWithoutFeedback>
   
  )
}

export default ProductCard

const styles = StyleSheet.create({
  productCard: {
    width: width / 2 - 30,
    height: width/1.7,
    borderRadius: 10,
    elevation: 8,
    backgroundColor: "#e5e5e5",
    flexWrap: 'wrap',
    margin: 10,

  },
  image: {
    width: '100%',
    height: width / 2 - 60,
    resizeMode: "contain",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  outofstock:{
    width:100,
    height:100,
    backgroundColor:'gray',
    borderRadius:50,
    position:'absolute',
    top:20,
    left:35,
    alignItems:'center',
    justifyContent:'center'
  }


});