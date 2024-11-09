import { useSearchParams } from 'react-router-dom'
import Card from '../../../components/Card'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import axios from 'axios'
import { ABBYBOT_API_URL } from '../../../environ'
import ChannelsConfigForm from './ChannelsConfigForm'

export default function ServerConfig() {
    const [searchParams] = useSearchParams()
    const { user } = useContext(AuthContext)
    const abbybotServers = user.abbybot.userServers.servers
    const guild_id = searchParams.get('guild_id')
    const [guild, setGuild] = useState(null)
    const [channels, setChannels] = useState(null)
    const [loadingChannels, setLoadingChannels] = useState(false)

    const getChannels = async () => {
        if (guild_id) {
            setLoadingChannels(true)
            const response = await axios.get(`${ABBYBOT_API_URL}/server-channels?guild_id=${guild_id}`)
            setChannels(response.data)
            await setTimeout(() => {
                setLoadingChannels(false)
            }, 1000);
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
            description: <>Set a channel for <strong className="text-tertiary">Kick or leave</strong> signs in your server</>,
            selected: guild ? guild.kick_channel_id : null
        },
        {
            title: 'Ban Signs',
            description: <>Set a channel for <strong className="text-tertiary">Ban</strong> signs in your server</>,
            selected: guild ? guild.ban_channel_id : null
        },
        {
            title: 'Logs Channels',
            description: <>Set a channel for the logs in your server.</>,
            selected: guild ? guild.logs_channel : null
        },
    ]


    useEffect(() => {
        getChannels()
        setGuild(abbybotServers.find((server) => server.guild_id === guild_id))
    }, [guild_id])

    if (loadingChannels) {
        return <Card className='flex-grow-1 d-flex flex-center-items flex-center'>
            <div className="spinner"></div>
        </Card>
    }

    if (guild_id && guild) {
        return <Card className='flex-grow-1'>
            <h2 className="m-0">Manage Channels</h2>
            <section className='d-flex flex-wrap'>
                {!loadingChannels && channelsConfig.map((channel, index) => (
                    <ChannelsConfigForm
                        key={`channelConfig-${index}`}
                        title={channel.title}
                        description={channel.description}
                        channels={channels}
                        selected={channel.selected}
                    />
                ))}
            </section>
        </Card>
    }


}
