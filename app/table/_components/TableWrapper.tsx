import React from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from '@tanstack/react-table';
import { Text } from '~/components/ui/text';

interface TableWrapperProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
}

export function TableWrapper<TData>({
  data,
  columns,
}: TableWrapperProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Get headers and rows
  const headerGroups = table.getHeaderGroups();
  const rows = table.getRowModel().rows;

  // Render a single row
  const renderRow = ({ item: row }: { item: (typeof rows)[0] }) => (
    <View key={row.id} className="flex-row">
      {row.getVisibleCells().map((cell) => (
        <View
          key={cell.id}
          className="p-4 border-b border-r border-gray-200 dark:border-gray-700"
          style={{ width: cell.column.columnDef.size }}
        >
          <Text>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </Text>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView horizontal className="flex-1">
      <View>
        {/* Table headers */}
        <View>
          {headerGroups.map((headerGroup) => (
            <View
              key={headerGroup.id}
              className="flex-row bg-gray-100 dark:bg-gray-800"
            >
              {headerGroup.headers.map((header) => (
                <View
                  key={header.id}
                  className="p-4 border-b border-r border-gray-200 dark:border-gray-700"
                  style={{ width: header.column.columnDef.size }}
                >
                  <Text>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Table rows */}
        <FlatList
          data={rows}
          keyExtractor={(row) => row.id}
          renderItem={renderRow}
          initialNumToRender={20}
          maxToRenderPerBatch={20}
          removeClippedSubviews={true}
        />
      </View>
    </ScrollView>
  );
}
