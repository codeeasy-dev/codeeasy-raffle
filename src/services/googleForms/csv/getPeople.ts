import Papa from 'papaparse'
import IPerson from '../../../interfaces/IPerson'
const url = require('./data.json')

const getPeople = (setPeople: (people: IPerson[]) => void) => {
  return Papa.parse(url.csv_url, {
    download: true,
    complete: (results: Papa.ParseResult) => {
      const people: Array<any> = results.data.filter(
        person => person[0][0] !== 'C' && person[0] !== ''
      )

      let count = 1

      const newPeople: IPerson[] = people.map(person => {
        const newPerson: IPerson = {
          id: count,
          name: `${person[1]} - ${person[2]}`,
        }
        count++
        return newPerson
      })

      setPeople(newPeople)
    }
  })
}

export default getPeople
