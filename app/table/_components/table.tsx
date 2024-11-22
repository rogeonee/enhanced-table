import React, { useState } from 'react';
import { useGesture } from '@use-gesture/react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

interface TableRow {
  col1: string;
  col2: string;
  detail: string;
  expandedContent: string;
}

interface TableProps {
  data: TableRow[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [expandedRows, setExpandedRows] = useState<{ [key: string]: boolean }>({});
  const [tooltipContent, setTooltipContent] = useState('');

  const toggleRow = (index: string | number) => {
    setExpandedRows((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const bind = useGesture({
    onDoubleClick: ({ args: [index] }) => toggleRow(index),
    onDrag: ({ args: [index], movement: [mx] }) => {
      // Handle dragging logic
    },
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <React.Fragment key={index}>
              <tr {...bind(index)}>
                <td data-tip data-for={`tooltip-${index}`} onMouseEnter={() => setTooltipContent(row.detail)}>
                  {row.col1}
                </td>
                <td>{row.col2}</td>
              </tr>
              {expandedRows[index] && (
                <tr>
                  <td colSpan={2}>{row.expandedContent}</td>
                </tr>
              )}
              <ReactTooltip id={`tooltip-${index}`} place="top" content={tooltipContent} />
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;