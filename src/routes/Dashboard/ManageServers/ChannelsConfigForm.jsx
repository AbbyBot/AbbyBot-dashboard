import React from 'react'
import { useForm } from 'react-hook-form'

export default function ChannelsConfigForm({ title, description, channels, selected }) {
    const { register, handleSubmit } = useForm()
    return (
        <form className='flex-grow-1 d-flex flex-column gap-2 mt-4 mb-4' style={{ flexBasis: '50%' }}>
            <div>
                <h3 className="m-0">{title}</h3>
                <p className='mt-1'>{description}</p>
            </div>
            <div className='d-flex gap-2 mr-4'>
                <select
                    className='select'
                    defaultValue={selected || ""}
                    {...register('channel_id')}
                >
                    {/* Opción deshabilitada si `selected` es null */}
                    {!selected && (
                        <option value="">
                            Not Set
                        </option>
                    )}
                    {/* Lista todos los canales */}
                    {channels.map((channel, index) => (
                        <option
                            selected={selected}
                            key={`ch-${index}`}
                            value={channel.channel_id}
                        >
                            {channel.channel_title}
                        </option>
                    ))}
                </select>
                <button className='btn-primary'>Save</button>
            </div>
            <div className='d-flex gap-2 mr-4'>
                <select name="" id="" className='select'>
                    <option value="">Disabled</option>
                    <option value="">Enabled</option>
                </select>
                <button className='btn-primary'>Save</button>
            </div>
        </form>
    )
}
