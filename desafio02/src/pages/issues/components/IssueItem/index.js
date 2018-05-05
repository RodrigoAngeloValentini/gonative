import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from 'styles';
import { withNavigation } from 'react-navigation';

import styles from './styles';

const IssueItem = ({ issue, navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => {
      Linking.openURL(issue.url);
    }}
  >
    <Image style={styles.avatar} source={{ uri: issue.avatar_url }} />
    <View style={styles.containerInfo}>
      <Text style={styles.title} numberOfLines={1}>
        {issue.title}
      </Text>
      <Text style={styles.login}>{issue.login}</Text>
    </View>

    <Icon style={styles.icon} name="angle-right" size={20} color={colors.dark} />
  </TouchableOpacity>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    login: PropTypes.string,
    avatar_url: PropTypes.string,
  }).isRequired,
};

export default withNavigation(IssueItem);
