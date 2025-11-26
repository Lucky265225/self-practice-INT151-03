// Date Object
// format YYYY-MM-DDTHH:mm:ss.sssZ

const today1 = new Date()
// console.log(today1);

const today2 = new Date(Date.now())
// console.log(today2);

// method get DateTime
const myDate = new Date()
// console.log("year : " , myDate.getFullYear());
// console.log("month : " , myDate.getMonth());
// console.log("date : " , myDate.getDate());
// console.log(`hour : ${myDate.getHours()}`);
// console.log(`minute : ${myDate.getMinutes()}`);
// console.log(`second : ${myDate.getSeconds()}`);


// Date Object to string
// console.log(myDate.toString());

// show DateTime to Local
// console.log(myDate.toLocaleString('th-TH',
//     {weekday:'long',year:"numeric",day:'numeric',month:'long'}
// ));


// Intl.DateTimeFormat
const formatter = new Intl.DateTimeFormat('th-TH',
    {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: 'Asia/Bangkok'
    }
)
// console.log(formatter.format(myDate));


// toISOString ปรับเวลามาเป็น UTC
const dayA = new Date('2025-10-01T10:00:00+07:00')
const dayB = new Date('2025-10-01T09:00:00+08:00')
const dayC = new Date('2025-10-01T09:00:00+08:00')

// console.log(dayA.toISOString());
// console.log(dayB.toISOString());


// comparation DateTime
console.log(dayA.getTime()); // เปลี่ยนเป็น millisecond
console.log(dayB.getTime());
if(dayA < dayB){
    console.log(`dayA come before dayB`);
}else{
    console.log(`dayB come before dayA`);
}