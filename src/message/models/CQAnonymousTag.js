const CQTag = require('../CQTag')

module.exports = class CQAnonymousTag extends CQTag {
  constructor (shouldIgnoreIfFailed) {
    super('anonymous')
    this.modifier.ignore = Boolean(shouldIgnoreIfFailed)
  }

  shouldIgnoreIfFailed () {
    return this.modifier.ignore
  }
}