let timeOpen = new Date("2025-10-01T08:00:00+07:00")
let timeClose = new Date("2025-11-01T20:00:00+07:00")
let timeTest = new Date("2025-11-01T19:00:00+07:00")
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
})


function createElementCourse(){
    courses.forEach(course => {
        const divList = document.querySelector("#content")
        const divCourse = document.createElement("div")
        const pContent = document.createElement("p")
        const btnReserve = document.createElement("button")
        const btnCancel = document.createElement("button")
        
        btnReserve.className = "can"
        btnCancel.className = "noCan"

        btnCancel.disabled = true

        btnReserve.addEventListener("click" , () => {
            divCourse.classList.add("reserve")
            btnReserve.disabled = true
            btnCancel.disabled = false
        })

        btnCancel.addEventListener("click" , () => {
            divCourse.classList.remove("reserve")
            btnReserve.disabled = false
            btnCancel.disabled = true
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
    if(timeOpen.getTime() < timeTest.getTime() && timeTest.getTime() < timeClose.getTime()){
        btnReserve.forEach(btn => btn.disabled = false)
        btnCancel.forEach(btn => btn.disabled = false)
    }else{
        btnReserve.forEach(btn => btn.disabled = true)
        btnCancel.forEach(btn => btn.disabled = true)
    }
}