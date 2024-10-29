import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { DISCORD_AVATAR_URL } from '../../environ'
import Card from '../../components/Card'
import ProfilePreferences from './ProfilePreferences'
import Error from '../../components/Error'

export default function Profile() {
  const { user, error } = useContext(AuthContext)
  useEffect(() => {
    console.log(user)
  })
  if (error) {
    useEffect(() => {
      console.log(error.response)
    })
    return <Error message='Something went wrong! Try again later' error={error.response.data.error} />
  }

  if (!user) {
    return <h1>loading...</h1>
  }
  
  return (
    <div className='text-light d-flex flex-column gap-2'>
      <Card className='d-flex gap-2 flex-grow-1'>
        <div className='d-flex flex-center-items flex-column'>
          <img className='circled' src={DISCORD_AVATAR_URL + `${user.data.id}/${user.data.avatar}`} alt="" />
          <small className='m-1'>Feeling cute, right?</small>
        </div>
        <div>
          <h1 className='m-1'>My Profile</h1>
          <p className='m-1'>
            AbbyBot collects only public user data. It will never use your personal information without your authorization.
            <br /><br />For more details, read our <a href="https://abbybotproject.com/#terms-and-conditions">privacy policy</a>.
          </p>
        </div>
      </Card>
      <Card>
        <h1 className='m-1'>What AbbyBot knows about you?</h1>
        <section className='grid grid-2 p-1'>
          <aside className='column-1'>
            <p className='d-flex flex-column'>
              <strong>Discord ID</strong>
              <i className='text-tertiary'>{user.data.id}</i>
            </p>
            <p className='d-flex flex-column'>
              <strong>Discord username</strong>
              <i className='text-tertiary'>{user.data.username}</i>
            </p>
            <p>
              <strong>Discord nickname</strong>
              <br />
              <i className='text-tertiary'>{user.data.global_name}</i>
            </p>
            <p>
              <strong>Account created at</strong>
              <br />
              <i className='text-tertiary'>{new Date(user.abbybot.userInfo.account_created_at).toLocaleString()}</i>
            </p>
          </aside>
          <aside className='column-1'>
            <p className='d-flex flex-column'>
              <strong>AbbyBot Privileges</strong>
              <i className='text-tertiary'>{user.abbybot.userInfo.privilege}</i>
            </p>
            <p className='d-flex flex-column'>
              <strong>Servers shared with abbybot</strong>
              <i className='text-tertiary'>{user.abbybot.userServers.servers.length}</i>
            </p>
            <p>
              <strong>User birthday</strong>
              <br />
              <i className='text-tertiary'>{user.abbybot.userInfo.user_birthday ? user.abbybot.userInfo.user_birthday : 'Not set'}</i>
            </p>
          </aside>
        </section>
      </Card>
      <Card>
        <ProfilePreferences />
      </Card>
    </div>
  )
}
