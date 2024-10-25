import React from 'react'

export default function ProfilePreferences() {
    return <>
        <h1 className='m-1 mb-4'>Preferences</h1>
        <form action="" className='d-flex flex-column gap-4 m-0'>
            <div>
                <h4 className='m-1'>Theme</h4>
                <select name="" id="" className='select'>
                    <option value="">Abbybot</option>
                    <option value="">Dozer</option>
                </select>

            </div>
            <div>
                <button className='btn-secondary'>Save changes</button>
            </div>
        </form>
    </>
}
