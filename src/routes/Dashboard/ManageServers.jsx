import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Card from '../../components/Card'
import { useNavigate, useSearchParams } from 'react-router-dom'


export default function ManageServers() {
  const { user } = useContext(AuthContext)
  const [searchParams] = useSearchParams()
  const [guild, setGuild] = useState()
  const abbybotServers = user.abbybot.userServers.servers
  const redirect = useNavigate()
  let guild_id = Number.parseInt(searchParams.get('guild_id'))

  const setGuildId = (guild_id) => {
    redirect(`/dashboard/manage-servers?guild_id=${guild_id}`)
  }

  useEffect(() => {
    if (guild_id) {
      const selectedGuild = abbybotServers.find(server => server.guild_id === guild_id)
      setGuild(selectedGuild || null)
    }
  }, 
  [guild_id])

  return <div className='d-flex gap-2 h100'>
    {guild_id &&
      <Card className='flex-grow-1'>
        <h1 className='m-1'>Manage Server</h1>
        <span>{guild.guild_id}</span>
      </Card>
    }
    <Card className={`d-flex flex-column overflow-hidden ${!guild_id && 'flex-grow-1'}`}>
      <section className='flex-grow-1'>
        <h3 className='m-0 p-2 text-light'>Your guilds</h3>
        {abbybotServers.map((server, index) =>
          <button onClick={() => setGuildId(server.guild_id)} className='btn-link d-flex flex-center-items fs-2 gap-2 w100' key={`server-${index}`}>
            <img draggable='false' className='circled' width={30} src={server.guild_icon_url ? server.guild_icon_url : notFound} alt="" />
            {server.guild_name}
          </button>
        )}
      </section>
    </Card>
  </div>
}
