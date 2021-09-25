import React from 'react';


const EditableRow = ({editFormRoles, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>
                <input 
                    type='text' 
                    required='required' 
                    placeholder='Enter Role' 
                    name='role'
                    value={editFormRoles.role}
                    onChange={handleEditFormChange}>
                </input>
            </td>
            <td>
            <input 
                    type='text' 
                    required='required' 
                    placeholder='Enter Permissions' 
                    name='permissions'
                    value={editFormRoles.permissions}
                    onChange={handleEditFormChange}>
                </input> 
            </td>
            <td>
                <button type='submit'>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditableRow;