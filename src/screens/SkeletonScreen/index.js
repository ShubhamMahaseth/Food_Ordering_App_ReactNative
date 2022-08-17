import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonScreen = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 189,
        }}>
        <View
          style={{width: 370, height: 210, borderRadius: 4, marginBottom: 8}}
        />
        <View
          style={{width: 370, height: 210, borderRadius: 4, marginBottom: 8}}
        />
        <View
          style={{width: 370, height: 210, borderRadius: 4, marginBottom: 8}}
        />
        <View
          style={{width: 370, height: 210, borderRadius: 4, marginBottom: 8}}
        />
        <View
          style={{width: 370, height: 210, borderRadius: 4, marginBottom: 8}}
        />
        <View
          style={{width: 370, height: 210, borderRadius: 4, marginBottom: 8}}
        />
        <View
          style={{width: 370, height: 210, borderRadius: 4, marginBottom: 8}}
        />
        <View
          style={{width: 370, height: 210, borderRadius: 4, marginBottom: 8}}
        />
        <View
          style={{width: 370, height: 210, borderRadius: 4, marginBottom: 8}}
        />
      </View>
    </SkeletonPlaceholder>
  );
};

export default SkeletonScreen;
