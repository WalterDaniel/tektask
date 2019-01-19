import React from "react";

export default ({icon}) => {
    let iconName = icon.replace(/Icon$/, '')
    let resolved = require(`@material-ui/icons/${iconName}`).default

    if (!resolved) {
        throw Error(`Could not find @material-ui/icons/${iconName}`)
    }

    return React.createElement(resolved)
}