// add date-fns cdn link to html file. 

const now = new Date();
//console.log(now)
// am/pm format
const formattedDateam_pm = dateFns.format(now,"dd/mm/yyyy hh:mm aa")
//24 hours format
const formattedDate_24h = dateFns.format(now,"dd/mm/yyyy kk:mm")
//console.log(formattedDate_24h);

// week format
const formattedDate_week = dateFns.format(now,"EEEE 'the' do 'of' MMMM")
console.log(formattedDate_week)
const formattedDate_today = dateFns.format(now,"do MMMM,yyyy")
console.log(formattedDate_today)
const formattedDate_timenow = dateFns.format(now,"do MMMM,yyyy kk:mm")

console.log(formattedDate_timenow)