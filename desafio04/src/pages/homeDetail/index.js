import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductActions } from 'store/ducks/product';

import { colors } from 'styles';

import { View, ActivityIndicator } from 'react-native';

import Product from './components/Product';

import styles from './styles';

class HomeDetail extends Component {
  static navigationOptions = {
    title: 'Name here',
  };

  componentDidMount() {
    const { params } = this.props.navigation.state;
    const productId = params ? params.productId : null;
    this.props.getProductRequest(productId);
  }

  renderContent = () => {
    const { loading, product } = this.props;
    if (loading) {
      return <ActivityIndicator style={styles.loading} color={colors.red} size="large" />;
    }
    return <Product product={product} />;
  };

  render() {
    return <View style={styles.container}>{this.renderContent()}</View>;
  }
}

HomeDetail.defaultProps = {
  product: null,
};

HomeDetail.propTypes = {
  loading: PropTypes.bool.isRequired,
  getProductRequest: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    brand: PropTypes.string,
    image: PropTypes.string,
  }),
};

const mapStateToProps = state => ({
  product: state.product.product,
  loading: state.product.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeDetail);
