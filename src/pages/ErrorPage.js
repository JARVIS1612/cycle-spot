import React from 'react'
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

export default function ErrorPage({status_code}) {
  let message
  if(status_code==="404")
    message = "Sorry, the page you visited does not exist."
  else
    message = "Sorry, you are not logged in !"
  return (
    <Result
    status={status_code}
    title={status_code}
    subTitle={message}
    style={{paddingTop:"6rem"}}
    extra={<Button type="primary"><Link to="/">Back Home</Link></Button>}
  />
  )
}
