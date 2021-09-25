import React from 'react';

const ReadOnlyRow = ({ roles , handleEditClick }) => {
    return (
        <tr>
          <td>{roles.role}</td>
          <td>{roles.permissions}</td>
          <td>
              <button type='button' onClick={(event) => handleEditClick(event, roles)}>Edit</button>
          </td>
        </tr>
    )
}

export default ReadOnlyRow;