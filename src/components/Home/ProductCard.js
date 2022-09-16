import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity,ScrollView } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'




var { width } = Dimensions.get('window');


const ProductCard = ({ product }) => {
  const[ click ,setClick] = useState(false);

  return (
 
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
        <Text style={{ color: 'green', paddingHorizontal:10, fontSize:15 }}>PHP{product.price}</Text>
       

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
          <Icon name ="heart-dislike" size={28} style={{marginRight:5}}
            onPress={()=>setClick(!click)}
          />
          </TouchableOpacity>
            )
          }
          {
            product.Stock !== 0 ? (
              <TouchableOpacity>
          <Icon name ="cart-outline" size={28}/>
          </TouchableOpacity>
            )
            :(
              null
            )
          }
        
          </View>
         {
          product.countInStock === 0 ? (
            <View style={styles.outofstock}>
          <Text style ={{color:'red', fontSize:14}}>No Stock</Text>

          </View>
          )
          :(
            null
          )
         }
          
    </View>
 
   
  )
}

export default ProductCard

const styles = StyleSheet.create({
  productCard: {
    width: width / 2 - 30,
    height: width/1.8,
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