import React from 'react';

const ReadOnlyRow = ({ roles , handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
          <td>{roles.role}</td>
          <td>{roles.permissions}</td>
          <td>
              <button type='button' onClick={(event) => handleEditClick(event, roles)}>Edit</button>
              <button type='button' onClick={() => handleDeleteClick(roles.id)}>Delete</button>
          </td>
        </tr>
    )
}

export default ReadOnlyRow;