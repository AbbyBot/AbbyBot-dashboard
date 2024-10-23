import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { DISCORD_AVATAR_URL } from '../../environ'
import Card from '../../components/Card'
import Dropdown from '../../components/Dropdown'
// import { Dropdown } from '../../components/Dropdown'

export default function Profile() {
  const { user } = useContext(AuthContext)
  return (
    <div className='text-light d-flex flex-column gap-2'>
      <Card className='d-flex gap-2 flex-grow-1'>
        <div className='d-flex flex-center-items flex-column'>
          <img className='circled' src={DISCORD_AVATAR_URL + `${user.data.id}/${user.data.avatar}`} alt="" />
          <small className='m-1'>What a handsome uh?</small>
        </div>
        <div>
          <h1 className='m-1'>My Profile</h1>
          <p className='m-1'>
            AbbyBot collects only public user data,
            it will never use your personal information without authorization.
          </p>
        </div>
      </Card>
      <Card>
        <h1 className='m-1'>What AbbyBot knows about you?</h1>
        <section className='grid grid-2'>
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
              <i className='text-tertiary'></i>
            </p>
          </aside>
          <aside className='column-1'>
            <p className='d-flex flex-column'>
              <strong>AbbyBot Privileges</strong>
              <i className='text-tertiary'>{user.data.id}</i>
            </p>
            <p className='d-flex flex-column'>
              <strong>Servers shared with abbybot</strong>
              <i className='text-tertiary'>{user.abbybot.servers.length}</i>
            </p>
            <p>
              <strong>User birthday</strong>
              <br />
              <i className='text-tertiary'>{user.data.global_name}</i>
            </p>
            <p>
              <strong>Theme</strong>
              <br />
            </p>
          </aside>
        </section>
        <button className="btn-secondary" disabled>Save changes</button>
      </Card>
    </div>
  )
}
