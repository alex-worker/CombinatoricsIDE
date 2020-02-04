import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import {
  Toolbar,
  ToolbarTitle,
  ToolbarSpacer,
  ToolbarFixedSpacer
  // ToolbarButton,
  // ToolbarDropdownButton
} from '../components/library/Toolbar'
// import { MenuItem } from '../components/library/Menu'
// import {
//   PlayIcon,
//   ExportIcon,
//   PlusIcon,
//   MinusIcon,
//   FolderIcon,
//   LoadingIcon
// } from '../components/library/Icons'

// const l10n = (input) => {
//   return input
// }

class AppToolbar extends Component {
  render () {
    const name = 'Combinatorica IDE'
    return (
      <Toolbar>
        <Helmet>
          <title>{name}</title>
        </Helmet>
        <ToolbarSpacer />
        <ToolbarTitle>
          {name || 'Untitled'}
        </ToolbarTitle>
        <ToolbarSpacer />
        <ToolbarFixedSpacer style={{ width: 138 }} />
      </Toolbar>
    )
  }
}

AppToolbar.propTypes = {
  name: PropTypes.string,
  projectRoot: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired,
  setSection: PropTypes.func.isRequired,
  zoomIn: PropTypes.func.isRequired,
  zoomOut: PropTypes.func.isRequired,
  zoomReset: PropTypes.func.isRequired,
  openFolder: PropTypes.func.isRequired,
  buildGame: PropTypes.func.isRequired,
  running: PropTypes.bool.isRequired,
  modified: PropTypes.bool.isRequired,
  showZoom: PropTypes.bool.isRequired
};

AppToolbar.defaultProps = {
  name: ""
};

// function mapStateToProps(state) {
//   const section = state.navigation.section;
//   // const zoom = zoomForSection(section, state.editor);
//   return {
//     projectRoot: state.document && state.document.root,
//     modified: state.document && state.document.modified,
//     name: state.entities.present.result.name,
//     section,
//     zoom,
//     showZoom: ["world", "sprites", "backgrounds", "ui"].indexOf(section) > -1,
//     running: state.console.status === "running"
//   };
// }

// const mapDispatchToProps = {
//   saveWorld: actions.saveWorld,
//   setSection: actions.setSection,
//   zoomIn: actions.zoomIn,
//   zoomOut: actions.zoomOut,
//   zoomReset: actions.zoomReset,
//   buildGame: actions.buildGame,
//   openFolder: actions.openFolder
// };

export default AppToolbar;
