import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity,ScrollView,TouchableWithoutFeedback,ToastAndroid } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addWishList,removeWishList } from '../../../redux/Actions/ProductAction';
import axios from 'axios';






var height = Dimensions.get('window').height;
var { width } = Dimensions.get('window');


const ProductCard = ({ products, navigation,wishlistData }) => {
  const {user} = useSelector(state => state.user);
  const [click, setClick] = useState(false);
  const [data, setData] = useState('');
  const [touch, setTouch] = useState(false);
  const dispatch = useDispatch();

  const wishListHandler = async () => {
    setClick(true);
    dispatch(
      addWishList(
        products.name,
        products.images,
        products.price,
        products.id,
        products.stock,
      ),
    );
    ToastAndroid.showWithGravity(
      `${products.name} added to Wishlist`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      
    );
  };
  const removeWishListData = (data) => {
    setClick(false);
    setTouch(true);
    axios.post('https://adbuystore.000webhostapp.com/phprestapi/api/wishlist/removeWishlist.php', { id:products.id,})
    ToastAndroid.showWithGravity(
      `${products.name} removed from Wishlist`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      
    );
  };

  useEffect(() => {
    if (wishlistData && wishlistData.length > 0) {
      wishlistData.map(data => {
        setData(data);
        if (data.id === products.id && touch === false) {
          setClick(true);
        }
      });
    }
  }, [wishlistData]);
  return (
 <TouchableWithoutFeedback onPress={()=> navigation.navigate("ProductDetails",
 {products:products,wishlistData})}>
  <View style={styles.productCard}>
  
      <Image source={{ uri: products.images }}
        style={styles.image}
      />
      <View>
        <Text style={{
          color: "#333",
          paddingVertical: 5,
          textAlign: 'center'

        }}>{products.name}</Text>
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
        <Text style={{ color: 'green', paddingHorizontal:10, fontSize:15 }}>₱{products.price}</Text>
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
           }}>({products.numOfReviews})</Text>
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
             onPress={() => removeWishListData()}
          />
          </TouchableOpacity>
            
            )
            :(
              <TouchableOpacity>
          <Icon name ="heart-dislike" size={28} style={{marginRight:5, color:'#333'}}
            onPress={wishListHandler}
          />
          </TouchableOpacity>
            )
          }
         
        
          </View>
         {
         products && products.stock == 0 ? (
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