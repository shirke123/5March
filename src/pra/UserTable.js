import React from 'react';

const UserTable = (props) => {
    return (
        <table>
            <thead>
            <button to = "/add-employee" className = "btn btn-primary mb-2" > Add Employee </button>

                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            
                        {/* return (
                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>
                                    <button>Delete</button>
                                    <button>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : ( */}
                    {/* <tr>
                        <td colSpan={4}>No users found</td>
                    </tr> */} 
                {/* )   
                }
            </tbody> */}
        </table>
    )
}

export default UserTable;