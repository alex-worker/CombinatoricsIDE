import React from 'react'
import { Helmet } from 'react-helmet'

import {
  Toolbar,
  ToolbarTitle,
  ToolbarDropdownButton
} from './library/Toolbar'

import { MenuItem } from './library/Menu'

// const l10n = (str) => {
//   return str
// }

const name = 'Combinatorica IDE'

// const sectionNames = {
//   world: l10n('NAV_GAME_WORLD'),
//   sprites: l10n('NAV_SPRITES'),
//   backgrounds: l10n('NAV_BACKGROUNDS'),
//   ui: l10n('NAV_UI_ELEMENTS'),
//   music: l10n('NAV_MUSIC'),
//   dialogue: l10n('NAV_DIALOGUE_REVIEW'),
//   build: l10n('NAV_BUILD_AND_RUN'),
//   settings: l10n('NAV_SETTINGS')
// }

const AppToolbar = ({ sectionNames, headerName = 'UNDEFINED', curSection, onSectionChange }) => {
  // const [section, setSection] = React.useState(curPage)
  return (
    <Toolbar>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <ToolbarDropdownButton
        label={<div style={{ minWidth: 106 }}>{sectionNames[curSection]}</div>}
      >
        {Object.keys(sectionNames).map(key => (
          <MenuItem
            key={key}
            value={key}
            onClick={() => onSectionChange(key)}
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
