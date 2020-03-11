import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { THEM } from '../styles/styles';
import { FontAwesome } from '@expo/vector-icons';

const HeaderIcons = (props) => <HeaderButton {...props} iconSize={25} color={THEM.MAIN_COLOR} IconComponent={FontAwesome} />;

export default HeaderIcons;
