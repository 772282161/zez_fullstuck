import React, { useState, useEffect } from 'react';
import { getMembersCollection } from '../api/memberApi'
import { MemberEntity } from '../model/member'
function MemberTabel() {
  const [data, setData] = useState<MemberEntity[]>([]);
  const arr = [1, 2, 3]

  useEffect(() => {
    getMembersCollection().then((getdata) => setData(getdata))
  }, [data])
  return (
    <>
    <h2>Sample app</h2>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((member) => (
            <MemberRow key={member.id} member={member} />
          ))}
        </tbody>
      </table>
    </>
  )
}

const MemberRow = ({ member }: { member: MemberEntity }) => (
  <tr>
    <td>
      <img src={member.avatar_url} style={{ maxWidth: "10rem" }} />
    </td>
    <td>
      <span>{member.id}</span>
    </td>
    <td>
      <span>{member.login}</span>
    </td>
  </tr>
);

export default MemberTabel