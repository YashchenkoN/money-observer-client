import React from 'react';
import PropTypes from 'prop-types';
import HeaderIcon from './HeaderIcon';
import screens from "../screens/Screens";

const DrawerButton = ({ navigation }) => (
  <HeaderIcon
    name="menu"
    onPress={() => navigation.navigate(screens.DrawerOpen)}
  />
);

DrawerButton.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DrawerButton;
