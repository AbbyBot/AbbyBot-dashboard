import React, { useContext, useState } from 'react'
import Card from '../../../components/Card'
import { useSearchParams } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { faCrown, faShield, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ServersList() {
    const { user } = useContext(AuthContext)
    const [searchParams] = useSearchParams()
    const guild_id = searchParams.get('guild_id')
    const abbybotServers = user.abbybot.userServers.servers
    const redirect = useNavigate()

    const setGuild = (guild_id) => {
        redirect(`/dashboard/manage-servers?guild_id=${guild_id}`)
    }

    const setIcon = (is_admin, is_owner) => {
        if (is_owner) {
            return <FontAwesomeIcon icon={faCrown} />
        }
        if (is_admin) {
            return <FontAwesomeIcon icon={faShield} />
        }
        return <FontAwesomeIcon icon={faUser} />
    }

    return (
        <Card className={`d-flex flex-column sticky gap-2 ${!guild_id ? 'flex-grow-1' : ''}`} style={{ minWidth: '200px' }}>
            <h3 className='m-1'>Your Guilds</h3>
            {abbybotServers.map((server, index) => (
                <button 
                    onClick={() => setGuild(server.guild_id)} 
                    className='btn-link' 
                    key={`srv-${index}`}
                >
                    <img className='circled' src={server.guild_icon_url} width={40} alt="" />
                    {setIcon(server.is_admin, server.is_owner)}
                    {server.guild_name}
                </button>
            ))}
        </Card>
    )
}
