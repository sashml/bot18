var bot18 = global.BOT18

/*
  lib.printMotd()

  - Prints the ZalgoNet MOTD to stderr.
*/

module.exports = function (cb) {
  if (bot18.conf.motd) {
    var linkify = require('linkify-terminal')
    require('fs').readFile(require('path').resolve(__dirname, '..', 'motd.txt'), {encoding: 'utf8'}, function (err, motd) {
      if (err) {
        return cb(err)
      }
      console.error('\n' + linkify(motd, {pretty: true}).cyan + '\n')
      cb()
    })
  }
  else {
    cb()
  }
}