interface Props {
  item: any;
}

const TableHeadItem = ({ item }: Props) => {
  return <th>{item.heading}</th>;
};

export default TableHeadItem;
