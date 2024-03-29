import { Dimensions, StyleSheet, Text, View,TouchableOpacity, Image,ToastAndroid, ScrollView,TextInput} from 'react-native'
import React,{useEffect, useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Swiper from 'react-native-swiper'
import { useSelector } from 'react-redux';

var height = Dimensions.get('window').height;
var {width} = Dimensions.get('window')

const ProductDetails = ({ route,navigation}) => {
  const {products} = useSelector(state => state.products);
  
  const [click, setClick] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // increaseQuantity handler
  const increaseQuantity = () => {
    if (route.params?.products.stock -1 < quantity) {
      ToastAndroid.showWithGravity(
        `Item dont have any stocks left`,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    } else {
      setQuantity(quantity + 1);
    }
  };
  return (
    <View style={{
      elevation:8,
      backgroundColor:"#fff",
      width: width * 1,
    }}>
       <View style={styles.productDetailsTop}>
       <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" color="#333" size={30} />
        </TouchableOpacity>
       
      </View>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    <View style={styles.swiper}>
    
          
            <Image source={{uri: route.params?.products.images}} style={styles.image} key={products.id} />
          
        </View>
      <View style={styles.details_box}>
        <View style={styles.details}>
          <View>
            <Text
              style={{
                color: '#333',
                fontSize: 20,
                fontWeight: '600',
              }}>
              {route.params?.products.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            
            <Text
              style={{
                color: '#333',
                fontSize: 18,
                fontWeight: '600',
              }}>
              ₱{route.params?.products.price}
            </Text>
          </View>
        </View>
        <View style={styles.description}>
          <Text
            style={{
              color: '#333',
              fontSize: 18,
              fontWeight: '600',
            }}>
            Description: 
          </Text>
          <Text
            style={{
              color: '#555',
              fontSize: 15,
              fontWeight: '500',
              lineHeight: 20,
              paddingTop: 10,
            }}>
            {route.params?.products.description}
          </Text>
        </View>
        <View style={styles.quantity}>
            <TouchableOpacity onPress={decreaseQuantity}>
              <View style={styles.quantityBox}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                    fontWeight: '800',
                  }}>
                  -
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#333',
                  fontSize: 16,
                }}>
                {quantity.toString()}
              </Text>
            </View>
            <TouchableOpacity onPress={increaseQuantity}>
              <View style={styles.quantityBox}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                    fontWeight: '800',
                  }}>
                  +
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        <View
          style={{
            width: width * 1 - 30,
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.button} onPress={() => {
    alert('Item added to Wishlist(temporary alert) ');
  }}>
          <View >
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                fontWeight: '600',
              }}>
              Add to Wishlist
            </Text>
          </View>
     </TouchableOpacity>
          <View style={styles.reviews}>
            <Text
              style={{
                fontSize: 18,
                color: '#333',
                fontWeight: '600',
              }}>
              Reviews
            </Text>
            {route.params?.products.reviews == 0 ? (
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 5,
                  color:"#333"
                }}>
               No Reviews have been made yet...
              </Text>
            ) : (
              <View>
                
                  <View
                
                    style={{
                      flexDirection: 'row',
                      alignItems: "flex-start",
                      paddingVertical: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#333',
                        fontWeight: '700',
                        paddingLeft:5
                      }}>
                      {route.params?.products.reviews}
                      <Text
                       style={{
                        fontSize: 15,
                        color: '#555',
                        fontWeight: '600',
                        paddingLeft:5
                      }}
                      >
                      {"  "}
                      </Text>
                    </Text>
                    <Icon name="star" color="#C68600" size={18} />
                    <Text style={{color:"#333"}}>({route.params?.products.ratings})</Text>
                  </View>
                
              </View>
            )}
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#555',
                  fontWeight: '600',
                  paddingRight: 10,
                }}>
                Your Ratings*
              </Text>
              <Icon
                name="star-outline"
                color="#C68600"
                size={18}
                style={{marginHorizontal: 2}}
              />
              <Icon
                name="star-outline"
                color="#C68600"
                size={18}
                style={{marginHorizontal: 2}}
              />
              <Icon
                name="star-outline"
                color="#C68600"
                size={18}
                style={{marginHorizontal: 2}}
              />
              <Icon
                name="star-outline"
                color="#C68600"
                size={18}
                style={{marginHorizontal: 2}}
              />
              <Icon
                name="star-outline"
                color="#C68600"
                size={18}
                style={{marginHorizontal: 2}}
              />
            </View>
            <View style={{
              marginTop:10,
              height:100,
            }}>
              <TextInput
                keyboardType="default"
                placeholder="Add your comment..."
                placeholderTextColor="#333"
                textAlignVertical="top"
                style={{
                  borderWidth:1,
                  paddingLeft:10,
                  color:"#333",
                  borderRadius:5,
                  borderColor:"#0000002b",
                  height:"100%"
                }}
              />
            </View>
            <View style={{
              alignItems:"center"
            }}>
            <TouchableOpacity style={{width: '70%',marginLeft:70}}>
              <Text style={styles.submitButton}>
                Submit
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
    </View>
  );
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 1,
    backgroundColor: '#fff',
  },
  productDetailsTop: {
    width: width * 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: width / 6 - 20,
    paddingHorizontal: 10,
    elevation: 8,
    backgroundColor: '#fff',
  },
  banner: {
    width: width * 1,
    height: width / 2 - 20,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  swiper: {
    width: width * 1,
    height: width / 2,
    backgroundColor: '#fff',
    position: 'relative',
  },
  details_box: {
    backgroundColor: '#e5e5e5',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
    marginTop:20,
    marginBottom: height / 8 - 60,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  description: {
    flexDirection: 'column',
    paddingVertical: 10,
  },
  quantity: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  quantityBox: {
    width: 40,
    height: 40,
    backgroundColor: '#3BB77E',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  button: {
    width: '70%',
    backgroundColor: '#3BB77E',
    height: 50,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  submitButton:{
    width: '70%',
    backgroundColor: '#3BB77E',
    marginTop: 20,
    borderRadius: 5,
    paddingVertical:15,
    textAlign:"center",
    color:"#fff",
    fontSize:18,
    fontWeight:"600"
  },
  reviews: {
    marginTop: 10,
    width: width * 1,
    padding: 20,
  },
  image: {
    width: width,
    height: width / 2 +10 ,
    resizeMode: "contain",

  }
});