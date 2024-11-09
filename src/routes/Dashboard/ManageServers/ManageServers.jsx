import ServersList from './ServersList'
import ServerConfig from './ServerConfig'
import { useSearchParams } from 'react-router-dom'
import Card from '../../../components/Card'
import { faGear, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import ManageMembers from './ManageMembers'

export default function ManageServers() {
  const [searchParams] = useSearchParams()
  const guild_id = searchParams.get('guild_id')
  const tab = searchParams.get('tab')
  const [ activeTab, setActiveTab ] = useState(1)
  const [ content, setContent ] = useState(<ServerConfig />)

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

  return <div className='d-flex gap-2 h100' style={{position: 'relative'}}>
    {guild_id &&
      <div className='flex-grow-1 gap-2 d-flex flex-column'>
        <Card className='d-flex gap-2'>
          {tabButtons.map((tab, index) => (
            <button key={`tab-${index}`} className={`btn-link ${activeTab === tab.id ? 'btn-link-selected' : ''}`} onClick={() => setTab(tab)}>
              <FontAwesomeIcon icon={tab.icon} />
              {tab.title}
            </button>
          ))}
        </Card>
        {content}
      </div>
    }
    <ServersList />
  </div>
}
