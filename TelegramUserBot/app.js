
const Telegraf = require('telegraf').Telegraf;
const bot = new Telegraf('5099406409:AAGg9aHo1Apz_-4_f3-Kd-AArdwFQUp2CnI');//insert bot token here

//method that invokes start command
bot.command('start',ctx=>{
console.log(ctx.from)
bot.telegram.sendMessage(ctx.chat.id, 'Hello, My name is Simanye Magwa and this is my bot.\n To view my bot menu, type menu \n To view my phone number, type phone',{

})
})

//method that displays inline keyboard buttons
bot.hears('menu', ctx => { //change 'animals' variable
    console.log(ctx.from)
    let menuMessage='Choose an option from the menu'; //string/message that'll display
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, menuMessage, {
        reply_markup:{
            inline_keyboard: [
                [{
                    text: "View My Details",
                    callback_data: 'details'        //change 'dog 'variable 
                },
                {
                    text: "Download CV",
                    callback_data: 'cv'        //change 'cat 'variable
                },
                {
                    text: "View My Github projects",  //link to github projects
                    callback_data: 'projects'
                }
            ],


            ]


        }
    })
})

//change method from return image of dog to my file
bot.action('details', ctx=> {       //change 'dog' variable
bot.telegram.sendMessage(ctx.chat.id, "Name: Simanye Magwa\nAge:22\nQualification: NDip:Information Technology\n Home Language:Xhosa\n Other Languages:English , Afrikaans\n to view more details,download my cv."
)
})
//change method from return image of cat to my file
bot.action('cv',ctx=>{
    bot.telegram.sendDocument(ctx.chat.id, {
        source: "res/cvofsimanye magwa.pdf"
    })
})

//method for requesting my phone number
bot.hears('phone', (ctx,next)=>{
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Can we get acces to your phone number?', requestPhoneKeyboard);
})

//method for requesting user's location
bot.hears("location", (ctx)=> {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Can we access your location?', requestLocationKeyboard);
})

//constructor for providing phone number to bot
const requestPhoneKeyboard={
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard":[
            [{
                text:"My phone number",
                request_contact:true,
                one_time_keyboard:true
            }],
            ["Cancel"]
        ]
    }
};

//constructor for providing location
const requestLocationKeyboard={
    "reply_markup": {
    "one_time_keyboard":true,
    "keyboard":[
        [{
            text: "My location",
            request_location: true,
            one_time_keyboard: true
        }],
        ["Cancel"]
    ]
    }
}

//method to start get script to pulling updates for telegram
bot.launch();
