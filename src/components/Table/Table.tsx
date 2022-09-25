import axios from 'axios';
import { SetStateAction, useEffect, useState } from 'react';
import '../styles/styles.css';
import { v4 as uuidv4 } from 'uuid';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import { async } from 'q';

const Table = () => {
  const URL = 'http://localhost:8080/Project';

  //GET!

  const getData = async () => {
    const response = await axios.get(URL);
    console.log(response);
    return response;
  };
  // this is really recent projects..GET!
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    getData().then((response) => {
      setContacts(response.data);
    });
  }, []);

  // end of GET!

  // POST

  const [addFormData, setAddFormData] = useState({
    title: '',
    description: '',
    contributors: '',
    status: '',
  });

  //for POST:
  const handleAddFormChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target as HTMLTextAreaElement;
    setAddFormData({
      ...addFormData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newContact = {
      id: uuidv4(),
      title: addFormData.title,
      description: addFormData.description,
      contributors: addFormData.contributors,
      status: addFormData.status,
    };
    console.log(newContact); //tengo que enviar esto a post

    const response = await axios.post(URL, newContact);
  };

  // PUT!!!!
  // create EDIT button... toggle between readOnlyRow and EditableRow
  const [editContactId, setEditContactId] = useState(null);

  const handleEdit = async (event: any, contact: any) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      title: contact.title,
      description: contact.description,
      contributors: contact.contributors,
      status: contact.status,
    };
    console.log(formValues); //tengo que enviar esto a PUT!!
    const response = await axios.put(`${URL}`, formValues);

    // misssing something?
  };

  const [editFormData, setEditFormData] = useState({
    title: '',
    description: '',
    contributors: '',
    status: '',
  });

  const handleEditFormChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  return (
    <div>
      <h3>Recent Projects</h3>
      <form action=''>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Contributors</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => {
              return (
                <>
                  {editContactId === contact.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      key={index}
                      index={undefined}
                      handleEdit={handleEdit}
                    />
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </form>

      <h2>Add a Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          required
          placeholder='Project Name'
          onChange={handleAddFormChange}
        />
        <input
          type='text'
          name='description'
          required
          placeholder='Description'
          onChange={handleAddFormChange}
        />
        <input
          type='text'
          name='contributors'
          required
          placeholder='Contributors'
          onChange={handleAddFormChange}
        />
        <label htmlFor='status'>Status:</label>
        <select name='status' onChange={handleAddFormChange} required>
          <option value='' disabled>
            Choose
          </option>
          <option value='Completed'>Completed</option>
          <option value='New'>New</option>
          <option value='In Progress'>In Progress</option>
        </select>
        <button>Add</button>
      </form>
    </div>
  );
};

export default Table;
