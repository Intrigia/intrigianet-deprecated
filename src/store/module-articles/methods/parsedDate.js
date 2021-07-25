const parsedDate = (date) => { 
  const options = { 
    weekday: 'long', year: 'numeric', month: 'short', day: 'numeric',
    hour: 'numeric', minute: 'numeric'
  }
  if (date.length < 1 ) {
    return 'Inget publiceringsdatum'
  }
  if (typeof(date) != 'string') { 
    var parsed = new Intl.DateTimeFormat('sv-SE', options).format(date)
  } else if(typeof(date) != 'object') {
    var unParsedDate = Date.parse(date)
    var parsed = new Intl.DateTimeFormat('sv-SE', options).format(unParsedDate)
  } else {
    return false
  }
  parsed = parsed.toString()
  parsed = parsed[0].toUpperCase() + parsed.slice(1, parsed.length)
  return parsed
}

export default parsedDate