import React from 'react';
import { Layout, Sidebar } from 'react-admin';
import AppBar from './AppBar';

const CustomSidebar = props => <Sidebar size={200} {...props} />;
export default props => (
  <Layout appBar={AppBar} sidebar={CustomSidebar} {...props} />
);
