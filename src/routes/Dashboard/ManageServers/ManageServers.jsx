import ServersList from './ServersList'
import ServerConfig from './ServerConfig'

export default function ManageServers() {
  

  return <div className='d-flex gap-2 h100'>
    <ServerConfig />
    <ServersList />
  </div>
}
