import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Start from '@/views/start';

function Com () {
  return (
    <Switch>
      <Route path='/start/' component={ Start } />
    </Switch>
  )
}

export default Com;
