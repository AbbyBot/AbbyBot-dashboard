import React, { useContext, useEffect, useState } from 'react'
import { ABBYBOT_API_URL } from '../../environ'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import { useForm } from 'react-hook-form'
export default function ProfilePreferences() {
    const [themes, setThemes] = useState([])
    const {user} = useContext(AuthContext)
    const {handleSubmit, register} = useForm()

    const getThemes = async () => {
        let fetchThemes = await axios.get(`${ABBYBOT_API_URL}/abbybot-themes`)
        setThemes(fetchThemes.data.abbybot_themes)
    }
    useEffect(() => {
        getThemes()
    }, [])

    return <>
        <h1 className='m-1 mb-4'>Preferences</h1>
        <form action="" className='d-flex flex-column gap-4 m-0'>
            <div>
                <h4 className='m-1'>Theme</h4>
                <select {...register('theme')} className='select' onChange={() => console.log("me cago en diez")}>
                    {themes.map((data, index) => {
                        return <option selected={user.abbybot.userInfo.theme.theme_id == data.theme_id} value={data.theme_id} key={index}>{data.theme_title}</option>
                    })}
                </select>

            </div>
            <div>
                <button className='btn-secondary' disabled>Save changes</button>
            </div>
        </form>
    </>
}
