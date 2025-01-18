import ServersList from './ServersList'
import ServerConfig from './ServerConfig'
import { useSearchParams, useNavigate } from 'react-router-dom'
import Card from '../../../components/Card'
import { faGear, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState, useContext } from 'react'
import ManageMembers from './ManageMembers'
import { AuthContext } from '../../../context/AuthContext'
import notFound from '../../../assets/image-not-found.png'

export default function ManageServers() {
  const { user } = useContext(AuthContext)
  const [searchParams] = useSearchParams()
  const guild_id = searchParams.get('guild_id')
  const tab = searchParams.get('tab')
  const [ activeTab, setActiveTab ] = useState(1)
  const [ content, setContent ] = useState(<ServerConfig />)
  const navigate = useNavigate()

  const tabButtons = [{
      id: 1,
      title: 'Manage Guild',
      icon: faGear,
      renderElement: <ServerConfig />,
    },
    { 
      id: 2,
      title: 'Manage Members',
      icon: faUserGroup,
      renderElement: <ManageMembers />
    }]

  const setTab = (tab) => {
    setActiveTab(tab.id)
    setContent(tab.renderElement)
  }

  const server = user.abbybot.userServers.servers.find(s => s.guild_id === guild_id)
  const isAuthorized = server && (server.is_admin || server.is_owner)

  return <div className='d-flex gap-2 h100' style={{position: 'relative'}}>
    {guild_id && (
      <div className='flex-grow-1 gap-2 d-flex flex-column'>
        <Card className='d-flex gap-2'>
          {tabButtons.map((tab, index) => (
            <button key={`tab-${index}`} className={`btn-link ${activeTab === tab.id ? 'btn-link-selected' : ''}`} onClick={() => setTab(tab)}>
              <FontAwesomeIcon icon={tab.icon} />
              {tab.title}
            </button>
          ))}
        </Card>
        {isAuthorized ? (
          content
        ) : (
          <Card className='d-flex flex-column align-items-center p-4'>
            <img src={server.guild_icon_url || notFound} alt="Server Icon" width={100} className='mb-3 rounded' />
            <h3>{server.guild_name}</h3>
            <p className='text-danger'>Sorry, You do not have permission to modify this server.</p>
            <p className='text-secondary'>Please contact the server owner or an admin for more information.</p>
            <div className='d-flex gap-2'>
              <button className='btn-primary' onClick={() => navigate('/')}>Go to Home</button>
              <button className='btn-secondary' onClick={() => navigate('/dashboard/manage-servers')}>List Servers</button>
            </div>
          </Card>
        )}
      </div>
    )}
    <ServersList />
  </div>
}
