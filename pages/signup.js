import React from 'react';
import { Form, Button, Icon, Message, Segment } from 'semantic-ui-react';
import Link from 'next/link';
import catchErrors from '../utils/catchErrors';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { handleLogin } from '../utils/auth'


function Signup() {
  return <>
    <Message
      attached
      icon='settings'
      header='Get started!'
      content='Create a new account'
      color='pink'
    />
  </>;
}

export default Signup;
