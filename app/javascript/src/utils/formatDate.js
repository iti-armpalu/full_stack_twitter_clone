function FormatDate(date, isRelative) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let newDate = new Date(date)
  newDate = months[newDate.getMonth()] + ' ' + newDate.getDate() + ', ' + newDate.getFullYear() + ' ' + newDate.toLocaleTimeString()
  if(isRelative) {
    newDate = Date.now() - new Date(date)
    newDate = newDate / 1000
    if(newDate < 60 ) {
      newDate = Math.round(newDate) + ' seconds ago'
    } else if(newDate < 3600 ) {
      newDate = Math.round(newDate / 60) + ' minutes ago'
    } else if(newDate < 86400) {
      newDate = Math.round(newDate / 3600) + ' hours ago'
    } else {
      newDate = Math.round(newDate / 86400) + ' days ago'
    }
    // newDate = newDate / 1000  / 60 / 60 / 24
    return newDate
  }
  return newDate
}

export default FormatDate