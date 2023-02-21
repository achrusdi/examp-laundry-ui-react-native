import {StyleSheet, View} from 'react-native';
import React from 'react';
import TabItem from '../TabItem';

const ButtomNavigator = ({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem
            key={index}
            isFocused={isFocused}
            onLongPress={onLongPress}
            onPress={onPress}
            label={label}
          />
        );
      })}
    </View>
  );
};

export default ButtomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    paddingHorizontal: 55,
    paddingVertical: 14,
  },
});
