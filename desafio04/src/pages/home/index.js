import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from 'store/ducks/products';
import { View, ScrollView, StatusBar, ActivityIndicator } from 'react-native';

import { colors } from 'styles';

import CategoryBar from './components/CategoryBar';
import ProductItem from './components/ProductItem';

import styles from './styles';

class Home extends Component {
  static navigationOptions = {
    title: 'GoCommerce',
  };

  componentDidMount() {
    this.props.getProductsRequest(1);
  }

  renderProducts = () => {
    const { products } = this.props;

    return products.map(product => <ProductItem product={product} key={product.id} />);
  };

  renderLoading = () => (
    <ActivityIndicator style={styles.loading} color={colors.red} size="large" />
  );

  renderContent = () => {
    const { loading } = this.props;
    if (!loading) {
      return (
        <ScrollView style={styles.scroolView}>
          <View style={styles.productsContainer}>{this.renderProducts()}</View>
        </ScrollView>
      );
    }
    return this.renderLoading();
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <CategoryBar />
        <View style={styles.contentContainer}>{this.renderContent()}</View>
      </View>
    );
  }
}

Home.defaultProps = {
  products: [],
};

Home.propTypes = {
  getProductsRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    brand: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  })),
};

const mapStateToProps = state => ({
  products: state.products.products,
  loading: state.products.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
