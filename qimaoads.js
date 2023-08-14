var body = $response.body;
var obj = JSON.parse(body);
obj.data.is_vip = "2"

body = JSON.stringify(obj);
$done({body});

// {
//   "data": {
//     "nickname_review_status": "0",
//     "nickname": "七猫书友_112457519752",
//     "tourist_mode": "2",
//     "comment_forbidden_type": "0",
//     "comment_forbidden_message": "",
//     "type": "user",
//     "avatar_review_status": "0",
//     "id": "410204224",
//     "is_vip": "0",
//     "token": "eyJhbGciOiJSUzI1NiIsImNyaXQiOlsiaXNzIiwianRpIiwiaWF0IiwiZXhwIl0sImtpZCI6IjE1MzEyMDM3NjkiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2OTMzMTQzNzAsImlhdCI6MTY5MjAxODM3MCwiaXNzIjoiIiwianRpIjoiNDJhMWUyNTJiYWJhNzczMjBhNjk5NzQ3MzhiYzgwNjMiLCJ1c2VyIjp7InVpZCI6NDEwMjA0MjI0LCJuaWNrbmFtZSI6IuS4g-eMq-S5puWPi18xMTI0NTc1MTk3NTIiLCJpbWVpIjoiIiwidXVpZCI6IiIsImRldmljZUlkIjoiIiwicmVnVGltZSI6MTY2OTI5NjQ1NiwidmlwRXhwaXJlQXQiOjAsInNtX2lkIjoiMjAyMjExMjQwOTE1MDA4ZDEyMjgxOWFmMDEwYTI4YWJkNDJmYmRjZDI2ODFjNzAxMWJmZmQwY2Y2OTdmN2EiLCJudXQiOjE2NjkyOTY0ODksImlmdSI6MCwiaXNfcmJmIjowLCJhY3RfaWQiOjAsImJpbmRfYXQiOjAsInRpZCI6IkQyWDd6SHBiaThybDluZFB5WllIdXE3T2V5SlI1VVhFQm56eTl2SDdNY3J6RVg2ZCIsInRfbW9kZSI6Mn19.EhLwtX-FBLTj75jEuuD0yFDXhmsYdST1AZgEi8VTbx9EIBc74Sv-Zu2W9_4LX1eQdr02SSvVnZSYOUDgC5I7CqXhzHy1jH91hVq27hM6XddXw8ALXdvsPIOvGWsSqKNB6CmDvv9lr30vjAeUjTuWS2qCZsB33zsVkzmz7zhid-Q",
//     "gender": "1",
//     "apple_email": "",
//     "phone": "17682314231",
//     "wechat_name": "",
//     "is_author": "0",
//     "avatar": "https://cdn.wtzw.com/bookimg/free/images/app/1_0_0/portraits_default_photo_360x360.png",
//     "role": "0",
//     "is_bind_apple": "0",
//     "dark_launch": "1",
//     "is_sign_in": "0"
//   }
// }
