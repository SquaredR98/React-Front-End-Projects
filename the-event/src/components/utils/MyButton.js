import React from 'react';
import Button from '@material-ui/core/Button';

import TicketIcon from '../../resources/images/icons/ticket.png'

const MyButton = (props) => {
  return (
      <Button
        href={`${props.link}`}
        variant="contained"
        size="large"
        style={{
            backgroundColor: `${props.bgcolor}`,
            color: `${props.color}`
        }}
      >
          <img
            src={TicketIcon}
            className='iconImage'
            alt='Icon Button'
          />
          {props.text}
      </Button>
  )
}

export default MyButton;