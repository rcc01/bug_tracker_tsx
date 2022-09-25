import { Key } from 'react';

interface Props {
  item: any;
  column: any;
}

const TableRow = ({ item, column }: Props) => (
  <tr>
    {column.map(
      (columnItem: { value: string }, index: Key | null | undefined) => {
        if (columnItem.value.includes('.')) {
          const itemSplit = columnItem.value.split('.'); //['address', 'city']
          return <td>{item[itemSplit[0]][itemSplit[1]]}</td>;
        }
        return (
          <td key={index}>
            <p>{column.value}</p>
          </td>
        );
      }
    )}
  </tr>
);

export default TableRow;
