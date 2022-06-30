/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from "react";
import { RefreshControl, ScrollView, View } from "react-native";

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

export const Layout = ({
  children,
  scrollToEnd,
  refreshing = false,
  onRefresh = () => null,
  persistTaps = true,
  nested = false,
  page,
  setPage = () => null,
  style,
}) => {
  const Ref = useRef(null);

  return (
    <ScrollView
      ref={Ref}
      nestedScrollEnabled={true}
      keyboardShouldPersistTaps={persistTaps ? "handled" : "never"}
      keyboardDismissMode="interactive"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      onContentSizeChange={() => {
        if (scrollToEnd) {
          Ref?.current?.scrollToEnd();
        }
      }}
      onScroll={(event) => {
          
        if (page  && isCloseToBottom(event.nativeEvent)) {
          setPage(page + 1);
        }
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View
        style={[
          {
            flex: 1,
          },
          style,
        ]}
      >
        {children}
      </View>
    </ScrollView>
  );
};

export default Layout;
