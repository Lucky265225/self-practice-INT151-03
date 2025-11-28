let timeOpen = new Date("2025-10-01T08:00:00+07:00")
let timeClose = new Date("2025-11-01T20:00:00+07:00")
let timeTest1 = new Date("2025-11-01T19:00:00+07:00")
let timeTest2 = new Date("2026-11-01T19:00:00+07:00")

let reserveCourses = []

let courses = [
  {
    "id": "CS101",
    "courseTitle": "Introduction to Computer Science",
    "credit": 3
  },
  {
    "id": "MA202",
    "courseTitle": "Calculus II",
    "credit": 4
  },
  {
    "id": "EN150",
    "courseTitle": "Academic English Writing",
    "credit": 2
  },
  {
    "id": "IT230",
    "courseTitle": "Database Systems",
    "credit": 3
  }
]

document.addEventListener("DOMContentLoaded" , () => {
    createElementCourse()
    reserveTime()
    checkReserve()
    showReserve()
})


function createElementCourse(){
    courses.forEach(course => {
        const divList = document.querySelector("#content")
        const divCourse = document.createElement("div")
        const pContent = document.createElement("p")
        const btnReserve = document.createElement("button")
        const btnCancel = document.createElement("button")

        // divCourse.dataset.id = course.id
        
        btnReserve.className = "can"
        btnCancel.className = "noCan"

        btnCancel.disabled = true

        btnReserve.addEventListener("click" , () => {
            divCourse.classList.add("reserve")
            btnReserve.disabled = true
            btnCancel.disabled = false
            reserveCourses.push(course)
            showReserve()
        })

        btnCancel.addEventListener("click" , () => {
            divCourse.classList.remove("reserve")
            btnReserve.disabled = false
            btnCancel.disabled = true
            reserveCourses = reserveCourses.filter(c => c.id !== course.id);
            showReserve()
        })

        divCourse.className = "course"
        pContent.textContent = `course : ${course.courseTitle} , credit : ${course.credit}`
        btnReserve.textContent = "reserve"
        btnCancel.textContent = "cancel"

        divCourse.append(pContent,btnReserve,btnCancel)
        divList.append(divCourse)
    })
}


function reserveTime(){
    const formatterDate = new Intl.DateTimeFormat("en-TH",{
        dateStyle : "full"
    })
    const formatterTime = new Intl.DateTimeFormat("en-TH",{
        timeStyle : "short"
    })

    const showTime = document.getElementById("time")
    const pDate = document.createElement("p")
    const pTime = document.createElement("p")

    pDate.textContent = `Every day on ${formatterDate.format(timeOpen)} - ${formatterDate.format(timeClose)}`
    pTime.textContent = `Time on ${formatterTime.format(timeOpen)} - ${formatterTime.format(timeClose)}`

    showTime.append(pDate,pTime)
}

function checkReserve(){
    const btnReserve = document.querySelectorAll(".can")
    const btnCancel = document.querySelectorAll(".noCan")
    if(timeOpen.getTime() < timeTest1.getTime() && timeTest1.getTime() < timeClose.getTime()){
        btnReserve.forEach(btn => btn.disabled = false)
        btnCancel.forEach(btn => btn.disabled = false)
    }else{
        btnReserve.forEach(btn => btn.disabled = true)
        btnCancel.forEach(btn => btn.disabled = true)
    }
}

function checkCredit(){
    const btnReserve = document.querySelectorAll(".can")
    let totalCredit = reserveCourses.reduce((a,b) => a + b.credit,0)
    console.log(totalCredit);
    if(totalCredit < 6){
        btnReserve.forEach(btn => btn.disabled = false)
    }else{
        btnReserve.forEach(btn => btn.disabled = true)
    }
}


function showReserve(){
    const showReserve = document.getElementById("showReserve")
    const showCredit = document.getElementById("showCredit")
    showReserve.textContent = ""
    showCredit.textContent = ""
    let totalCredit = 0
    console.log(reserveCourses);
    if(reserveCourses.length === 0){
        return null
    }

    reserveCourses.forEach(course => {
        totalCredit += course.credit

        const showReserve = document.getElementById("showReserve")
        const divCourse = document.createElement("div")

        divCourse.className = "reserveCourse"
        divCourse.textContent = course.courseTitle
        
        showReserve.append(divCourse)
    })

    showCredit.textContent = `current credit : ${totalCredit}`
    checkCredit()
}