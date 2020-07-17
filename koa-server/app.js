const Koa = require('koa');
const koaBody = require('koa-bodyparser')
const cors = require('@koa/cors')
const Router = require('koa-router')
const db = require(__dirname +'/models/index.js')

const app = new Koa();
const router = new Router();
app.use(cors());
app.use(koaBody());
app.use(router.routes());



router.get('/aa', async (ctx, next) => {
  //ctx.body="AYAYA";
  try{
    let tabledata = await db.table2.findAll(
        {include:[
      {
        model: db.table1,
        attributes: ['f','i','o']}],
        attributes: ['balance'],
        raw:true
        });

    ctx.body= tabledata;
  }
  catch (e) {
    console.error('err',e);
    ctx.status=500;
    ctx.body="FeelsBadMan";
  }
});

app.listen(3001);