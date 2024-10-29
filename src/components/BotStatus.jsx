import axios from "axios"
import { useContext, useEffect } from "react"
import { BotContext } from "../context/BotProvider"


export default function BotStatus() {
  const { getStatus, isLoading,  status} = useContext(BotContext)
  const refreshStatus = async () => await getStatus()
  
  useEffect(() => {
    refreshStatus()
  }, [status])

  return (
    <div className='text-light d-flex gap-2 flex-center-items'>
        <i className={status === 'Online' ? 'status-circle-ok' : 'status-circle-offline'}></i>
        <span>{status}</span>
    </div>
  )
}
