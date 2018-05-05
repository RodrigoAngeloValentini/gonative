import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from 'styles';
import { withNavigation } from 'react-navigation';

import styles from './styles';

const RepositoryItem = ({ repository, navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() =>
      navigation.navigate('Issues', { name: repository.name, login: repository.login })
    }
  >
    <Image style={styles.avatar} source={{ uri: repository.avatar_url }} />
    <View style={styles.containerInfo}>
      <Text style={styles.name}>{repository.name}</Text>
      <Text style={styles.login}>{repository.login}</Text>
    </View>

    <Icon style={styles.icon} name="angle-right" size={20} color={colors.dark} />
  </TouchableOpacity>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string,
    login: PropTypes.string,
    full_name: PropTypes.string,
    avatar_url: PropTypes.string,
  }).isRequired,
};

export default withNavigation(RepositoryItem);
