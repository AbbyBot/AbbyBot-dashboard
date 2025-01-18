import React, { useContext, useEffect, useState } from 'react'
import { ABBYBOT_API_URL } from '../../../environ'
import axios from 'axios'
import { AuthContext } from '../../../context/AuthContext'
import { useForm } from 'react-hook-form'
import { ThemeContext } from '../../../context/ThemeProvider'
import Toast from '../../../components/Toast/Toast';

export default function ProfilePreferences() {
    const [themes, setThemes] = useState([])
    const [isLoading, setLoading] = useState(false)
    const { user } = useContext(AuthContext)
    const [disabled, setDisabled] = useState(true)
    const { handleSubmit, register, watch } = useForm()
    const { setTheme } = useContext(ThemeContext)
    const [toastMessage, setToastMessage] = useState('');

    const getThemes = async () => {
        let fetchThemes = await axios.get(`${ABBYBOT_API_URL}/abbybot-themes`)
        setThemes(fetchThemes.data.abbybot_themes)
    }

    const selectedTheme = watch('theme')

    const submit = async (data) => {
        let postData = {
            user_id: user.data.id,
            theme_id: Number.parseInt(data.theme.split(';')[1])
        }
        setDisabled(true)
        setLoading(true)
        await axios.post(`${ABBYBOT_API_URL}/update-abbybot_theme`, postData)
        setLoading(false);
        setToastMessage('Theme updated successfully!');
        setTimeout(() => {
            setToastMessage(''); // Reset the toast message
        }, 3000);
    }

    useEffect(() => {
        getThemes()
    }, [])

    useEffect(() => {
        if (selectedTheme) {
            setDisabled(false);
            setTheme(selectedTheme.split(';')[0])
        }
    }, [selectedTheme]);

    return <>
        <h1 className='m-1 mb-4'>Preferences</h1>
        <form action="" className='d-flex flex-column gap-4 m-0'>
            <div>
                <h4 className='m-1'>Theme</h4>
                <p>Note that the changes will be applied when you save changes. Otherwise, if you reload it, the changes won't be applied.</p>
                <select {...register('theme')} className='select'>
                    {themes.map((data, index) => {
                        return <option selected={user.abbybot.userInfo.theme.theme_id == data.theme_id} value={`${data.theme_class};${data.theme_id}`} key={index}>{data.theme_title}</option>
                    })}
                </select>

            </div>
            <div>
                <button onClick={handleSubmit(submit)} className='btn-secondary' disabled={disabled || isLoading}>
                    {isLoading ? 'Saving...' : 'Save Changes'}
                </button>
            </div>
        </form>
        {toastMessage && <Toast message={toastMessage} />}
    </>
}
