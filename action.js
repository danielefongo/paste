const clipboardy = require('clipboardy');

module.exports = function(loader, toggl, timeSlotter, asker, config) {

  this.run = async () => {
    entries = JSON.parse(clipboardy.readSync());

    entries.forEach((entry, index) =>
      setTimeout(() => addEntry(entry), index * 100)
    )
  }

  this.help = () => {
    return "paste entries"
  }

  function addEntry(entry) {
    toggl.rawTogglPost('/time_entries', {time_entry: entry})
  }
}