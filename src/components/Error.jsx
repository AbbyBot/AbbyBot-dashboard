import React from 'react'

export default function Error({ message, error }) {
    return <div className='text-light'>
        <h2>{message}</h2>
        <p className='text-tertiary'>Error: {error}</p>
    </div>
}
