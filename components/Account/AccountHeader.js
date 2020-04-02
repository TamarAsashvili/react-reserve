import { Header, Segment, Icon, Label } from 'semantic-ui-react';
import formatDate from '../../utils/formatDate'

function AccountHeader({ role, createdAt, email, name }) {
  return <>
    <Segment secondary inverted color='orange'>
      <Label color='teal'
        size='large'
        ribbon
        icon='privacy'
        style={{ textTransform: 'capitalize' }}
        content={role}
      />
      <Header inverted textAlign='center' as='h1' icon>
        <Icon name='user' />
        {name}
        <Header.Subheader>{email}</Header.Subheader>
        <Header.Subheader>Joined {formatDate(createdAt)}</Header.Subheader>

      </Header>
    </Segment>
  </>;
}

export default AccountHeader;