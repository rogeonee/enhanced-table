import { View } from 'react-native';
import { TableWrapper } from './_components/TableWrapper';
import { columns } from './_components/columns';
import { getData } from './_lib/data';
import { Text } from '~/components/ui/text';

const TableScreen = () => {
  const data = getData();

  return (
    <View className="flex-1">
      <View className="p-4">
        <Text className="text-2xl font-bold">Student Health Data</Text>
      </View>
      <TableWrapper data={data} columns={columns} />
    </View>
  );
};

export default TableScreen;
