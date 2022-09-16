import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native'
import React, { useEffect ,useState} from 'react'
import Swiper from 'react-native-swiper';

var { width } = Dimensions.get('window');
const Banner = () => {
    const[Bannerdata, setBannerData] = useState([]);

    useEffect(()=>{
        setBannerData(['https://img.freepik.com/free-psd/online-shopping-store-concept-mobile-phone-with-3d-shopping-cart-shopping-bag-like-icon_106244-2052.jpg?w=996&t=st=1662697012~exp=1662697612~hmac=5d105666438217ecdfd09ead39c48e62852b403f5f5664871213a71dc292687a',
                        'https://img.freepik.com/premium-vector/e-commerce-online-shopping-flat-illustration-suitable-web-banners_210682-45.jpg',
                        'https://img.freepik.com/free-photo/top-view-women-man-accessoires-travel-concept-white-black-mobile-phone-airplane-hat-passport-watch-sunglasses-shoes-key-wood-table_1921-50.jpg?w=996&t=st=1662697113~exp=1662697713~hmac=290f6a3e6d40600e18e09f8235ab8236c38d3ba39c68463936ab71bb29157485',
                        'https://thumbs.dreamstime.com/b/vinnytsia-ukraine-september-vector-banner-iphone-vector-illustration-app-web-presentation-design-vector-banner-iphone-230042240.jpg',
                        'https://images.template.net/wp-content/uploads/2019/04/Sale-Advertising-Banner-Templates.jpg'
                    ]);
  
    return() =>{
        setBannerData([]);
    };
},[]); 
  return (
    <ScrollView>
        <View style={styles.container}>
        <View style={styles.swiper}>
        <Swiper 
            showButtons ={false}
            autoplay ={true}
            autoplayTimeout={4}
            style={{height:width/2}}>
                {Bannerdata.map((item)=>{
                    return(
                        <Image
                        key={item}
                        resizeMode="contain"
                        source={{uri:item}}
                        style ={styles.banner}/>
                    )
                })}
            </Swiper>
            <View style ={{height:20}}></View>
        </View>
        </View>
    </ScrollView>
  )
}

export default Banner

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e5e5e5',
        zIndex:0,
        
           
        
        
     },
    swiper:{
        width:width,
        marginTop:'5%',
        alignItems:'center'
    },
    banner:{
        height:width/2-20,
        width:width -40,
        borderRadius:10,
        marginHorizontal:20,
    },
})