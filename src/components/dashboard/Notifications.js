import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
  const { notifications } = props
  return (
    <div className='section'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='title'>Notifications</span>
          <ul className='notifications'>
            { notifications && notifications.map(item => {
              return (
                <li className='notification-content' key={item.id}>
                  <span className='pink-text'>{item.user} </span>
                  <span className='dark-grey-text'>{item.content}</span>
                  <div className='grey-text note-date'>
                    {moment(item.time.toDate()).fromNow()}
                  </div>
                  <div className='notification-divider' />
                </li>
              )
            }) }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications
