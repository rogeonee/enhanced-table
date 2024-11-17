import React from 'react';
import { View } from 'react-native';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';

const MenuScreen = () => {
  return (
    <View className="flex-1 justify-center items-center gap-8">
      <Text className="text-3xl font-bold my-10">Enhanced Table</Text>
      <Button size="lg">
        <Text className="text-lg font-bold">Playground</Text>
      </Button>
      <Button size="lg">
        <Text className="text-lg font-bold">Start Study</Text>
      </Button>
      <Button size="lg">
        <Text className="text-lg font-bold">Options</Text>
      </Button>
    </View>
  );
};

export default MenuScreen;
