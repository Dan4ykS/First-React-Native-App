import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useCallback, useEffect } from 'react';
import { THEM } from '../styles/styles';

const LoadingDataLogic = ({ children, configData: { loading, error, loadingData } }) => {
  // eslint-disable-next-line
  // console.log(loading, error, loadingData);
  const request = useCallback(() => loadingData(), []);
  useEffect(() => {
    request();
  }, [request]);
  if (loading) {
    return <ActivityIndicator style={{ marginTop: 20 }} size='large' color={THEM.FRAGMENT_COLOR} />;
  }
  if (error) {
    return <ActivityIndicator />;
  }
  return <>{children}</>;
};

export default LoadingDataLogic;
