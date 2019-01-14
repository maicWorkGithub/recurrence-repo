import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {
  translate,
  DashboardMenuItem,
  MenuItemLink,
} from 'react-admin';
import { withRouter } from 'react-router-dom';

import GroupIcon from '@material-ui/icons/Group'

const items = [
  { name: 'groups', icon: <GroupIcon /> },
];

const Menu = ({ onMenuClick, translate, logout }) => (
  <div>
    <DashboardMenuItem onClick={onMenuClick} />
    {items.map(item => (
      <MenuItemLink
        key={item.name}
        to={`/${item.name}`}
        primaryText={translate(`resources.${item.name}.name`, {
          smart_count: 2,
        })}
        leftIcon={item.icon}
        onClick={onMenuClick}
      />
    ))}
  </div>
);

const enhance = compose(
  withRouter,
  connect(
    state => ({
      theme: state.theme,
      locale: state.i18n.locale,
    }),
    {}
  ),
  translate
);

export default enhance(Menu);
