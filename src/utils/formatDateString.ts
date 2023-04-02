import moment from 'moment'

const formatDateString = (dateString: any): any => {
  const date = moment(dateString, [
    'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ',
    'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ (ZZ)',
  ])
  return date.format('YYYY-MM-DD')
}

export default formatDateString
