import PouchDB from 'pouchdb'
import pouchdbDebug from 'pouchdb-debug'

const MyPouchDb = PouchDB.plugin(pouchdbDebug)
MyPouchDb.debug.enable('pouchdb:*') // если указать просто '*' начинается жесткий флуд в консоль из-за вебсокетов реакта

class Storage {
  // db - PouchDB connector
  constructor () {
    this.db = new MyPouchDb('simple-ide')
    // this.db.info().then(info => {
    //   console.log('constructor!!!')
    //   this.info = info
    // })
  }
}

export default Storage
