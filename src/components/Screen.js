import React from 'react';
import { View } from 'react-native';
import Layout from './Layout';
import SafeView from './SafeView';

const Screen = ({ header, onRefresh, page,setPage, style, children }) => {
  return (
    <View style={{ flex: 1 }}>
      <SafeView>
        {header}
        <Layout
          nested
          style={[{ paddingTop: 16, flex: 1, height: '100%' }, style]}
          onRefresh={onRefresh}
          page={page}
          setPage={setPage}
        >
          {children}
        </Layout>
      </SafeView>
    </View>
  );
};
export default Screen;
