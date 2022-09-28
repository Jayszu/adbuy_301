import {StyleSheet, Text, View,ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { useState } from 'react';

import ProductCard from '../Home/ProductCard';

var {width}= Dimensions.get('window')
const categories = [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'Electronics',
    },
    {
      id: 3,
      name: 'Mens Apparel',
    },
    {
      id: 4,
      name: 'Womens Apparel ',
    },
    {
      id: 5,
      name: 'Health and Personal Care',
    },
    {
      id: 6,
      name: 'Men Shoes',
    },
    {
      id: 7,
      name: 'Women Shoes',
    },
    {
      id: 8,
      name: 'Groceries',
    },
  ];

const FilterProducts = ({navigation}) => {
    const {products} = useSelector(state => state.products);
    //const {wishlistData} = useSelector(state => state.wishList);
    const [active, setActive] = useState('All');
    const [data, setData] = useState(products);

    const productsFilter = active => {
      if (active !== 'All') {
        setData([...products.filter(item => item.category === active)]);
      } else {
        setData(products);
      }
      setActive(active);
    };
    

  return (
    <View>
      <ScrollView style ={{ flexDirection:'row', marginVertical:10}}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
    {categories.map((i, index)=>(
        <TouchableOpacity onPress={()=> productsFilter(i.name)}
        style={[styles.name, active === i.name && styles.nameActive]}
        key={index}>
        <Text style={{color:'white'}}>{i.name}</Text>
        </TouchableOpacity>
    ))}
      </ScrollView>
      
      <View style={styles.productCard}>
      
        {data &&data.length === 0 ? (
          <Text style={{color: '#000', marginTop: 100, fontSize: 16}}>
            No Products Found!
          </Text>
        ) : (
          <>
            {data &&
              data.map(product => (
                <ProductCard
                  key={product._id}
                  product={product}
                  navigation={navigation}
                  //wishlistData={wishlistData}
                />
              ))}
          </>
        )}
      </View>
 
    </View>
  );
};

export default FilterProducts;

const styles = StyleSheet.create({
  name:{
    borderRadius: 15,
    backgroundColor: '#3BB77E',
    marginHorizontal: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  nameActive: {
    backgroundColor: '#000',
  },
  productCard: {
    width: width * 1 - 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
