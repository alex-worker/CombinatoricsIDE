import PouchDB from 'pouchdb'
import pouchdbDebug from 'pouchdb-debug'

const MyPouchDb = PouchDB.plugin(pouchdbDebug)
MyPouchDb.debug.enable('*')

class Storage {
  constructor () {
    this.db = new MyPouchDb('simple-ide')
    this.db.info().then(function (info) {
      console.log(info)
    })
  }
}

export default Storage
