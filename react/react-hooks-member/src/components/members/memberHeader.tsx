import * as React from 'react';
//ts  保证代码的正确性

export const MemberHeader:React.FC<{}> = ({}) =>{
    return(
        <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
        </tr>
    )
}