import React, {useState , Fragment} from 'react';
import './App.css'
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';
import data from './mock-data.json'

const App = () => {

  const [roles, setRoles] = useState(data);
  const [addFormRoles, setAddFormRoles] = useState({
    role: '',
    permissions: ''
  });

  const [editFormRoles, setEditFormRoles] = useState({
    role: '',
    permissions: ''  
  });

  const [editRoleId, setEditRoleId] = useState(null);


  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value;

    const newFormRoles = { ...addFormRoles };
    newFormRoles[fieldName] = fieldValue;

    setAddFormRoles(newFormRoles);
  }

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormRoles = {...editFormRoles };
    newFormRoles[fieldName] = fieldValue

    setEditFormRoles(newFormRoles);

  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newRole = {
      id: data.length, 
      role: addFormRoles.role,
      permissions: addFormRoles.permissions
    };

    const newRoles = [...roles, newRole];
    setRoles(newRoles);
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedRole = {
      id: editRoleId,
      role: editFormRoles.role,
      permissions: editFormRoles.permissions
    };

    const newRoles = [...roles];

    const index = roles.findIndex((role) => role.id === editRoleId)

    newRoles[index] = editedRole;
    setRoles(newRoles);
    setEditRoleId(null);
  }

  const handleEditClick = (event, roles) => {
    event.preventDefault();
    setEditRoleId(roles.id);

    const formValues = {
      role: roles.role,
      permissions: roles.permissions  
    }

    setEditFormRoles(formValues);
  }

  const handleCancelClick = () => {
    setEditRoleId(null);
  }

  const handleDeleteClick = (rolesId) => {
    const newRoles = [...roles];
    const index = roles.findIndex((role) => role.id===rolesId)

    newRoles.splice(index, 1);
    setRoles(newRoles);
  }

  return <div>
    <form onSubmit={handleEditFormSubmit}>
    <table>
      <thead>
        <tr>
          <th>Roles</th>
          <th>Permissions</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((roles) => ( 
          <Fragment> 
             { editRoleId === roles.id ? <EditableRow editFormRoles={editFormRoles} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/> : <ReadOnlyRow roles={roles} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/> }
          </Fragment>
       ))}
      </tbody>
    </table>
    </form>

    <h2>Add new role</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input 
        type='text' 
        name='role' 
        required='required' 
        placeholder='role name'
        onChange={handleAddFormChange}>
      </input>
      <input 
        type='text' 
        name='permissions' 
        required='required' 
        placeholder='permissions added'
        onChange={handleAddFormChange}>
      </input>
      <button type='submit'>Submit</button>
    </form>
  </div>;
}

export default App; 