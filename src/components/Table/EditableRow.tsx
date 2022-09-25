interface Props {
  editFormData: any;
  handleEditFormChange: any;
}

const EditableRow = ({ editFormData, handleEditFormChange }: Props) => {
  return (
    <tr>
      <td>
        <input
          type='text'
          required
          placeholder='Project Name'
          name='title'
          value={editFormData.title}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type='text'
          required
          placeholder='Description'
          name='description'
          value={editFormData.description}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type='text'
          required
          placeholder='Contributors'
          name='contributors'
          value={editFormData.contributors}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <label htmlFor='status'>Status:</label>
        <select
          name='status'
          required
          onChange={handleEditFormChange}
          value={editFormData.status}
        >
          <option value='' disabled>
            Choose
          </option>
          <option value='Completed'>Completed</option>
          <option value='New'>New</option>
          <option value='In Progress'>In Progress</option>
        </select>
      </td>
      <td>
        <button>Save</button>
      </td>
    </tr>
  );
};

export default EditableRow;
