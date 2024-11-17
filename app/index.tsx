import React from 'react';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';

const MenuScreen = () => {
  return (
    <View className="flex-1 justify-center items-center gap-8">
      <Text className="text-3xl font-bold my-10">Enhanced Table</Text>
      <Link href="./table" asChild>
        <Button size="lg" className="w-50">
          <Text className="text-lg font-bold">Regular Table</Text>
        </Button>
      </Link>
      <Button size="lg" className="w-50">
        <Text className="text-lg font-bold">Start Study</Text>
      </Button>
      <Button size="lg" className="w-50">
        <Text className="text-lg font-bold">Options</Text>
      </Button>
    </View>
  );
};

export default MenuScreen;
