import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import Cards from 'pages/home/components/products/components/card';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductsActions from 'redux/ducks/products';

import { colors } from 'styles';
import styles from './styles';

class Products extends Component {
  static propTypes = {
    categories: PropTypes.shape({
      ativeCategory: PropTypes.number.isRequired,
    }).isRequired,
    products: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    navigation: PropTypes.shape({}).isRequired,
    productsRefresh: PropTypes.func.isRequired,
    productsRequest: PropTypes.func.isRequired,
  };

  state = { refreshing: false };

  refreshProducts = () => {
    if (this.props.categories.ativeCategory === 0) {
      this.props.productsRefresh(1);
    } else {
      this.props.productsRequest(this.props.categories.ativeCategory);
    }
  };

  errorOrEmpty = products =>
    (products.data.length === 0 ? (
      <Text style={styles.errorMsg}>Categoria Vazia</Text>
    ) : (
      <Text style={styles.errorMsg}>Ops...Não possível carregar os produtos.</Text>
    ));

  renderProducts = products =>
    (products.error
      ? this.errorOrEmpty(products)
      : products.data.map((product, indice) => (
        <Cards
          key={product.id}
          product={product}
          navigation={this.props.navigation}
          ativeCategory={this.props.categories.ativeCategory}
          indice={indice}
        />
      )));

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            title="Atualizando"
            colors={[colors.white, colors.roseDark]}
            progressBackgroundColor={colors.rose}
            refreshing={this.state.refreshing}
            onRefresh={() => this.refreshProducts()}
          />
        }
      >
        <View style={styles.scroll}>
          {this.props.products.loading ? (
            <ActivityIndicator style={styles.scroll} size="small" color={colors.rose} />
          ) : (
            this.renderProducts(this.props.products)
          )}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.products,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      productsRefresh: id => dispatch(ProductsActions.productsRefresh(id)),
      productsRequest: id => dispatch(ProductsActions.productsRequest(id)),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Products);
