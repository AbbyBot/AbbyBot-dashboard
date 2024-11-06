import React, { useEffect } from 'react'

export default function ChannelsConfig({ title, description, channels, selected }) {
    return <form className='flex-grow-1 m-4' style={{ flexBasis: '30%' }}>
        <h3 className="m-0">{title}</h3>
        <p className='mt-1'>{description}</p>
        <div className='d-flex gap-2'>
            <select className='select'>
                {selected ? channels.map((channel, index) => (
                    <option selected={selected == channel.channel_id} key={`ch-${index}`} value={channel.channel_id}>{channel.channel_title}</option>
                )) : <option value={null}>Disabled</option>}
            </select>
            <button className='btn-primary'>Save</button>
        </div>
    </form>
}

