import Datastore from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import path from 'path'
import fs from 'fs-extra'
import { app, remote } from 'electron'
import LodashId from 'lodash-id'

const APP = process.type === 'renderer' ? remote.app : app

const STORE_PATH = APP.getPath('userData')
console.log("data.json存储于" + STORE_PATH)
if (process.type !== 'renderer') {
    if (!fs.pathExistsSync(STORE_PATH)) {
        fs.mkdirpSync(STORE_PATH)
        console.log
    }
}

const adapter = new FileSync(path.join(STORE_PATH, '/data.json'))
const db = Datastore(adapter)
db._.mixin(LodashId)

if (!db.has('question').value()) {
    console.log('初始化数据库ing')

    db.defaults({question: [], answer: []}).write()

    db.get('question').push({id: 1, title: 'you are amazing?', single: -1}).write()
    db.get('question').push({id: 2, title: 'you are interesting?', single: 1}).write()

    db.get('answer').push({id: 1, qid: 1, content: 'sure', right: 1}).write()
    db.get('answer').push({id: 2, qid: 1, content: 'not really', right: -1}).write()
    db.get('answer').push({id: 3, qid: 1, content: 'nonsense!', right: 1}).write()
    db.get('answer').push({id: 4, qid: 1, content: 'do not tell you', right: -1}).write()
    db.get('answer').push({id: 5, qid: 2, content: 'sure', right: 1}).write()
    db.get('answer').push({id: 6, qid: 2, content: 'not yet', right: -1}).write()
    db.get('answer').push({id: 7, qid: 2, content: 'may not', right: -1}).write()

    console.log("数据库初始化完毕!")
    console.log("问题数量：" + db.get('question').size().value())
    console.log("答案数量：" + db.get('answer').size().value())
}

export default db