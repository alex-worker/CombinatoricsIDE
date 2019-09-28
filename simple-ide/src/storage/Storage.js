import PouchDB from 'pouchdb'
// const uuidv4 = require('uuid/v4')
// import pouchdbDebug from 'pouchdb-debug'

const MyPouchDb = PouchDB
// .plugin(pouchdbDebug)
// MyPouchDb.debug.enable('pouchdb:*') // если указать просто '*' начинается жесткий флуд в консоль из-за вебсокетов реакта

const vars = [
  { name: 'var_act', default: '0', description: 'Текущее действие' },
  { name: 'var_ret', default: '0', description: 'Что возвратил скрипт после своего выполнения, стек не реализован да и не нужен' },
  { name: 'var_pos_y', default: '0', description: 'Позиция X ( персонажа, действия, итп) ' },
  { name: 'var_pos_x', default: '0', description: 'Позиция Y ( персонажа, действия, итп) ' },
  { name: 'item_id', default: '0', description: 'ID активного предмета' },
  { name: 'game_over', default: '0', description: 'Тип окончания игры, 0 - игра еще не окончена.' }
]

const initVars = (db) => {
  vars.map(async (item, index) => {
    item._id = String(index)
    db.put(item)
      .then(resp => {
        console.log(resp)
      })
      .catch(e => {
        console.log(item, e)
      })
  })
}

const initDb = (db) => {
  initVars(db)
}

const destroyDb = () => {
  const db = new MyPouchDb('simple-ide-vars')
  db.destroy()
    .catch(e => {
      console.log(e)
    })
}

class Storage {
  // db - PouchDB connector
  constructor () {
    destroyDb()
    this.db = new MyPouchDb('simple-ide-vars', {
      revs_limit: 1,
      auto_compaction: true
    })
    initDb(this.db)
    // this.db.info().then(info => {
    //   console.log('constructor!!!')
    //   this.info = info
    // })
  }
}

export default Storage
