const TBot = require('node-telegram-bot-api')
const db = require(__dirname +'/models/index.js')

const token ='1339121082:AAEVlfGLhuz8JdOmK4UZOOhP2QYWjYZKF8I';
const  bot = new TBot(token,{polling:true});
let trigger=  new Boolean(false);

bot.onText(/\/start/, async msg =>{
    await bot.sendMessage(msg.chat.id, "Введите contractId");
    trigger=true;
})

bot.onText(/[1,2,3,4,5,6,7,8,9,0]/, async msg =>{
    try {
        let data = {};
        data = await db.table2.findOne({attributes: ['balance'], raw: true, where: {contractId: msg.text}});
        await bot.sendMessage(msg.chat.id, "Ваш баланс: " + data.balance);
        trigger = false;
    }
    catch (e) {
        await bot.sendMessage(msg.chat.id, "Введите корректный id");
    }
})

