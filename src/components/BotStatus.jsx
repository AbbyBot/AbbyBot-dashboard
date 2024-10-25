export default function BotStatus({ status }) {
  return (
    <div className='text-light d-flex gap-2 flex-center-items'>
        <i className='status-circle-ok'></i>
        <span>{status}</span>
    </div>
  )
}
