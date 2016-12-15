/* @flow */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { muiTheme } from 'storybook-addon-material-ui'

import ProjectList from './ProjectList.js'

storiesOf('ProjectList', module)
  .addDecorator(muiTheme())
  .add('default', () => (
    <ProjectList />
  ))
