
const Telegraf = require('telegraf').Telegraf;
const bot = new Telegraf(/*bot token*/);//insert bot token here

//method that invokes start command
bot.command('start',ctx=>{
console.log(ctx.from)
bot.telegram.sendMessage(ctx.chat.id, 'Hello, My name is Simanye Magwa and this is my bot.\n To view my bot menu, type menu \n To view my phone number, type phone',{

})
})

//method that displays inline keyboard buttons
bot.hears('menu', ctx => { 
    console.log(ctx.from)
    let menuMessage='Choose an option from the menu'; //string/message that'll display
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, menuMessage, {
        reply_markup:{
            inline_keyboard: [
                [{
                    text: "View My Details",
                    callback_data: 'details'        //details variable 
                },
                {
                    text: "Download CV",
                    callback_data: 'cv'        //details variable
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


bot.action('details', ctx=> {       //details variable
bot.telegram.sendMessage(ctx.chat.id, "Name: Simanye Magwa\nAge:22\nQualification: NDip:Information Technology\n Home Language:Xhosa\n Other Languages:English , Afrikaans\n to view more details,download my cv."
)
})

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
