import React from 'react'
import { Helmet } from 'react-helmet'

import {
  Toolbar,
  ToolbarTitle,
  ToolbarDropdownButton
} from '../components/library/Toolbar'

import { MenuItem } from '../components/library/Menu'

const l10n = (str) => {
  return str
}

const name = 'Combinatorica IDE'
// const section = 'world'

const sectionNames = {
  world: l10n('NAV_GAME_WORLD'),
  sprites: l10n('NAV_SPRITES'),
  backgrounds: l10n('NAV_BACKGROUNDS'),
  ui: l10n('NAV_UI_ELEMENTS'),
  music: l10n('NAV_MUSIC'),
  dialogue: l10n('NAV_DIALOGUE_REVIEW'),
  build: l10n('NAV_BUILD_AND_RUN'),
  settings: l10n('NAV_SETTINGS')
}

const AppToolbar = () => {
  const [section, setSection] = React.useState('world')
  return (
    <Toolbar>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <ToolbarDropdownButton
        label={<div style={{ minWidth: 106 }}>{sectionNames[section]}</div>}
      >
        {Object.keys(sectionNames).map(key => (
          <MenuItem
            key={key}
            value={key}
            onClick={() => setSection(key)}
            style={{ minWidth: 200 }}
          >
            {sectionNames[key]}
          </MenuItem>
        ))}
      </ToolbarDropdownButton>
      <ToolbarTitle>
        {name || 'Untitled'}
      </ToolbarTitle>
    </Toolbar>
  )
}

export default AppToolbar
