import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from 'store/ducks/categories';

import CategoryTitle from './../CategoryTitle';

import styles from './styles';

class CategoryBar extends Component {
  componentDidMount() {
    this.props.getCategoriesRequest();
  }

  render() {
    const { categoryActiveId } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {this.props.categories.map(category => (
            <CategoryTitle
              key={category.id}
              category={category}
              active={category.id === categoryActiveId}
              onPress={() => {
                this.props.setCategoryActive(category.id);
              }}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

CategoryBar.propTypes = {
  getCategoriesRequest: PropTypes.func.isRequired,
  setCategoryActive: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  })).isRequired,
  categoryActiveId: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
  loading: state.categories.loading,
  categoryActiveId: state.categories.categoryActiveId,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBar);
