import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const style = StyleSheet.create({
  ProductImage: {
    flex:1,
    height:300
  },
  productName: {
    flex: 1,
    fontSize: 18
  },
  productPrice: {
    width: 100,
    textAlign: 'right',
    fontSize: 18,
    color: 'navy'
  }
})

class ProductItem extends Component {

  getPriceFromatted(price) {
    if (price) {
      const priceFormatted =  price
      .toString()
      .split('')
      .reverse()
      .reduce((a, c, i) => c + (i && i % 3 === 0 ? '.' : '') + a, '');
      return `Rp ${priceFormatted}`;
    }
    return 'Rp 0';
  }

  render() {
    const { name, image, price, actionLink } = this.props.product
    return (
      <Card>
          <CardSection>
            <Image style={ style.ProductImage } source={ { uri:image }} />
          </CardSection>
        <CardSection>
        <Text style={ style.productName }>
            { name }
        </Text>
        <Text tyle={ style.productPrice }>
            { this.getPriceFromatted(price) }
        </Text>
        </CardSection>
        <CardSection>
          <Button onPress={ () => Linking.openURL(actionLink)}>
          Buy Now
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default ProductItem;
