let handler = async (m, { conn }) => {
conn.reply(m.chat,`*✦━━✤━ –⊰ ❖ ⊱– ━✤━━✦*\n\n*✦┃${pickRandom(global.verdaad)}┃✦*\n\n*✦━━✤━ –⊰ ❖ ⊱– ━✤━━✦*`, m)
}
handler.help = ['تا٠']
handler.tags = ['fun']
handler.command = /^تاج/i
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
global.verdaad = [
"اول منشن ذكي",
"اول منشن عمك", 
"اول منشن يحبك", 
"ثاني منشن حمار", 
" ثالث منشن يحب يعقب", 
"خامس منشن يتابع رومانسي", 
"ثالث منشن خايس", 
"ثاني منشن انت عمه", 
"ثالث منشن مُحنك", 
"ثاني منشن يقول اتاك عمك", 
"ثاني منشن يشوف ان ون بيس عمك", 
" ثالث منشن يحبك", 
" رابع منشن غدار", 
" خامس منشن ورع", 
" خامس منشن(بس كذا) ", 
"ثاني منشن مقطع اربع", 
" ثاني منشن هطف", 
" اول منشن يحبك", 
" اول منشن طفشان منك", 
" ثالث منشن متخلف", 
" سادس منشن سحبه", 
" اول منشن يبي يهرب منكم", 
"ثالث منشن حمار", 
"ثامن منشن يثق فيك", 
"ثاني منشن زهق منك", 
"رابع منشن يتابع ناروتو", 
"خامس منشن مايعرف يفكر", 
"رابع منشن خروف" , 
"ثاني منشن بيكرهك" , 
"اول منشن يحبك" , 
"ثالث منشن احسن منك" , 
"خلاص ياخي ازعجتنا" , 
"ثالث منشن ذكي" , 
"ثاني منشن فخم" , 
"اول منشن فخم" , 
"خامس منشن اذكى منك" , 
"رابع منشن اغبى منك" , 
"اول منشن بيفداك" , 
"اول منشن يكرهك" , 
"ثالث منشن يراقبك" , 
"تاسع منشن يشوفك بطل" , 
" رابع منشن يشوفك ورع"
]
