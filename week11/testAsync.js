async function doSomeThing(hasProblem) {
    return new Promise((resolve,reject) => {
        setTimeout(
        () => (hasProblem ? reject("Fail Working") : resolve("Fully Complete")),
        5000
        )
    })
}

// 2. async - await
console.log("starting...")
async function runworking() {
    try{
        const workingStatus = await doSomeThing(false)
        console.log(workingStatus)
        console.log("ending")
    }catch(error){
        console.log(error)
    }
    
}
runworking()



// 1. using .then .catch
// console.log("starting...")
// doSomeThing(true).then((workingStatus) => {
//     console.log(workingStatus)
//     console.log("ending...")
// }).catch((errorMessage) => {
//     console.log(errorMessage)
// })
