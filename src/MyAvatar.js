import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function MyAvatar() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Building" src = {require('./Building.png')} />
      <Avatar alt="Direction" src = {require('./imageCard/assets/Direction.png')} />
      <Avatar alt="Message" src = {require('./imageCard/assets/Message.png')} />
    </Stack>
  );
}