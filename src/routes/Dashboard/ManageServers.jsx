import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Card from '../../components/Card'

export default function ManageServers() {
  const { user } = useContext(AuthContext)
  const abbybotServers = user.abbybot.userServers.servers
  console.log(abbybotServers)
  return <div className='d-flex gap-2 h100'>
    <Card className='flex-grow-1'>
        
    </Card>
    <Card>
      <h1 className='m-1 text-light'>Guilds</h1>
      {abbybotServers.map((server, index) =>
        <button className='btn-link d-flex flex-center-items gap-2' key={`server-${index}`}>
          <img draggable='false' className='circled' width={20} src={server.guild_icon_url ? server.guild_icon_url : notFound} alt="" />
          {server.guild_name}
        </button>
      )}
    </Card>
  </div>
}
