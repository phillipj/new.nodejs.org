'use strict'

module.exports = (versions, fieldToMatch) => {
  const latest = fieldToMatch
    ? versions.find((version) => typeof version[fieldToMatch] !== 'undefined')
    : versions[0]

  return latest.version
}
