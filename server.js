import Koa from 'koa'
import KoaStatic from 'koa-static'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

import {database} from './mongodb' // 引入mongodb

database()
const GraphqlRouter = require('./router')
const app = new Koa()
const router = new Router()

app.use(bodyParser())
app.use(KoaStatic(__dirname +
'/public'))

router.use('', GraphqlRouter.routes())

app
  .use(router.routes())
  .use(router.allowedMethods());

  app.listen(4000);
