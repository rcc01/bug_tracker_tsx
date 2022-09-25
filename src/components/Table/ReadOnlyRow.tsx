interface Props {
  contact: any;
  index: any;
  handleEdit: any;
}

const ReadOnlyRow = ({ contact, index, handleEdit }: Props) => {
  return (
    <tr key={index}>
      <td>{contact.title}</td>
      <td>{contact.description}</td>
      <td>{contact.contributors}</td>
      <td>{contact.status}</td>
      <td>
        <button onClick={(event) => handleEdit(event, contact)}>Edit</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
