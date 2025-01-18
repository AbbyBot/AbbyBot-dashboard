import { useSearchParams } from "react-router-dom"
import Card from "../../../components/Card"
import Table from "../../../components/Table"
import { useEffect, useState } from "react"
import axios from "axios"
import { ABBYBOT_API_URL } from "../../../environ"

export default function ManageMembers() {
  const [searchParams] = useSearchParams()
  const [members, setMembers] = useState([])
  const guild_id = searchParams.get('guild_id')
  const getMembers = async () => {
    try {
      let fetchMembers = await axios.get(`${ABBYBOT_API_URL}/server-dashboard?guild_id=${guild_id}`)
      if (Array.isArray(fetchMembers.data.users)) {
        setMembers(fetchMembers.data.users)
      } else {
        setMembers([])
      }
    } catch (error) {
      console.error("Error fetching members:", error)
      setMembers([])
    }
  }

  useEffect(() => {
    getMembers()
  }, [guild_id])

  let tableColumns = ['ID', 'Username', 'Nickname', 'User Type', 'Birthday', 'Actions']

  return <>
    <Card className="d-flex gap-2">
      <input type="text" className="input" placeholder="Search members" />
      <button className="btn-primary">Search</button>
    </Card>
    <Card className="flex-grow-1">
      <Table>
        <Table.Header>
          <Table.Row>
            {tableColumns.map((column, index) => (
              <Table.Data header key={index}>{column}</Table.Data>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {members.map((member, index) => (
            <Table.Row key={index}>
              <Table.Data>{member.user_id}</Table.Data>
              <Table.Data>{member.username}</Table.Data>
              <Table.Data>{member.nickname_in_server}</Table.Data>
              <Table.Data>{member.user_type}</Table.Data>
              <Table.Data>{member.birthday_date ?? 'Not set'}</Table.Data>
              <Table.Data></Table.Data>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Card>
  </>
}
