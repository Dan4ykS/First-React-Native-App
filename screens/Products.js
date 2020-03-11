import React from 'react';
import withStore from '../utils/helpFuncsForRedux';
import LoadingDataLogic from '../componentsLogic/LoadingData';
import { confDataForLogicComp } from '../utils/helpFuncks';
import { CustomText, CustomView, TextHeader } from '../components/ui/CustomElements';
import { View, FlatList } from 'react-native';

const ProductsScreen = ({ bookList: { books, loading, error }, actions: { fetchBooks } }) => {
  const configData = confDataForLogicComp(loading, error, fetchBooks);
  return (
    <CustomView>
      <LoadingDataLogic configData={configData}>
        <FlatList
          data={books}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginTop: 20, paddingHorizontal: 5 }}>
              <TextHeader>{item.title}</TextHeader>
              <CustomText>{item.description}</CustomText>
            </View>
          )}
        />
      </LoadingDataLogic>
    </CustomView>
  );
};

export default withStore(ProductsScreen);
