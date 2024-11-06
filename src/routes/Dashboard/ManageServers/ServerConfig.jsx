import { useSearchParams } from 'react-router-dom'
import Card from '../../../components/Card'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import ChannelsConfig from './ChannelsConfig'
import axios from 'axios'
import Cookies from 'js-cookie'
import { ABBYBOT_API_URL } from '../../../environ'

export default function ServerConfig() {
    const [searchParams] = useSearchParams()
    const { user } = useContext(AuthContext)
    const abbybotServers = user.abbybot.userServers.servers
    const guild_id = searchParams.get('guild_id')
    const [guild, setGuild] = useState(null)
    const [channels, setChannels] = useState(null)
    const [loadingChannels, setLoadingChannels] = useState(true)

    const getChannels = async () => {
        if (guild_id) {
            setLoadingChannels(true)
            const response = await axios.get(`${ABBYBOT_API_URL}/server-channels?guild_id=${guild_id}`)
            setChannels(response.data)
            setLoadingChannels(false)
        }
    }

    const channelsConfig = [
        {
            title: 'Welcome Signs',
            description: <>Set a channel for <strong className="text-tertiary">Welcome</strong> signs in your server</>,
            selected: guild ? guild.join_channel_id : null
        },
        {
            title: 'Birthday channel',
            description: <>Set a channel for the birthday signs in your server</>,
            selected: guild ? guild.birthday_channel : null
        },
        {
            title: 'Kick Signs',
            description: <>Set a channel for <strong className="text-tertiary">Kick or Ban</strong> signs in your server</>,
            selected: guild ? guild.kick_channel_id : null
        },
        {
            title: 'Logs Channels',
            description: <>Set a channel for the logs in your server.</>,
            selected: guild ? guild.logs_channel : null
        },
    ]


    useEffect(() => {
        console.log(abbybotServers)
        getChannels()
        setGuild(abbybotServers.find((server) => server.guild_id === guild_id))
    }, [guild_id])

    if (guild_id && guild) {
        return <Card className='flex-grow-1'>
            <h2 className="m-0">Manage Channels</h2>
            <section className='d-flex flex-wrap'>
                {!loadingChannels && channelsConfig.map((channel, index) => (
                    <ChannelsConfig
                        key={`channelConfig-${index}`}
                        title={channel.title}
                        description={channel.description}
                        channels={channels}
                        selected={channel.selected}
                    />
                ))}
            </section>
            <hr />
        </Card>
    }
}
