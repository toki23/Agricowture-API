const cred = require('./calendar-credential.json');
const KEY = cred.private_key;
const SERVICE_ACCT_ID = cred.client_id;
const CALENDAR_URL = 'https://calendar.google.com/calendar/embed?src=2hgte3b66etcvg1g6bgcu2qans%40group.calendar.google.com&ctz=Asia%2FTokyo'
const CALENDAR_ID = {
	'Agricowture' : '2hgte3b66etcvg1g6bgcu2qans@group.calendar.google.com'
}
const TIMEZONE = 'UTC+09:00'

module.exports.calendarUrl = CALENDAR_URL;
module.exports.serviceAcctId = SERVICE_ACCT_ID;
module.exports.calendarID = CALENDAR_ID;
module.exports.key = KEY;
module.exports.timezone = TIMEZONE;
