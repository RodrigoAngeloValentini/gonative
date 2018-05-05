import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Modal, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/users';
import { colors } from 'styles';
import styles from './styles';

class Map extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      avatar_url: PropTypes.string,
      bio: PropTypes.string,
      coordinate: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }),
    })),
    modalVisible: PropTypes.bool,
    getUserRequest: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  static defaultProps = {
    users: [],
    modalVisible: false,
  };

  state = {
    coordinate: {
      latitude: -27.1048797,
      longitude: -52.6143743,
    },
    search: '',
  };

  componentDidMount() {
    console.log(this.props.users);
  }

  onLongPress = (e) => {
    const { coordinate } = e.nativeEvent;
    this.setState({ coordinate }, () => {
      this.props.openModal();
    });
  };

  searchUser = () => {
    const { search, coordinate } = this.state;
    this.props.getUserRequest(search, coordinate);
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent
          visible={this.props.modalVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalBox}>
              <Text style={styles.title}>Adicionar novo local</Text>
              <TextInput
                value={this.state.search}
                style={styles.input}
                placeholder="Usuário no GitHub"
                placeholderTextColor={colors.gray}
                underlineColorAndroid="rgba(0,0,0,0)"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={search => this.setState({ search })}
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.closeModal();
                  }}
                  style={styles.buttonCancel}
                >
                  <Text style={styles.buttonText}>Fechar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonSave}
                  onPress={() => {
                    this.searchUser();
                  }}
                >
                  <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -27.110063749061503,
            longitude: -52.622902225703,
            latitudeDelta: 0.05092674038343503,
            longitudeDelta: 0.035695843398571014,
          }}
          onLongPress={this.onLongPress}
        >
          {this.props.users.map(marker => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinate}
              title={marker.name}
              description={marker.bio}
            >
              <Image source={{ uri: marker.avatar_url }} style={styles.marker} />
            </Marker>
          ))}
        </MapView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.data,
  modalVisible: state.users.modalVisible,
});

const mapDispatchProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Map);
