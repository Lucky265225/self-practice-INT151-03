import { loadQuotes } from "./quoteManagement";

document.addEventListener("DOMContentLoaded", async () => {
    const quotes = await loadQuotes()
    quotes.forEach(quote => {
        const divCard = createQuote(quote)
        const quoteList = document.getElementById("quoteList")
        quoteList.append(divCard)
    })

})

function createQuote(quote){
    const divCard = document.createElement("div")
    const pContent = document.createElement("p")
    const pAuthor = document.createElement("p")
    const divActions = document.createElement("div")
    const btnEdit = document.createElement("button")
    const btnDelete = document.createElement("button")

    divCard.setAttribute("class","quote-card")
    divCard.setAttribute("data-id",quote.id)

    pContent.textContent = quote.content

    pAuthor.setAttribute("class","author")
    pAuthor.textContent = quote.author

    divActions.setAttribute("class","actions")

    btnEdit.setAttribute("class","edit")
    btnEdit.setAttribute("data-id",quote.id)
    btnEdit.textContent = "Edit"
    btnDelete.setAttribute("class","delete")
    btnDelete.setAttribute("data-id",quote.id)
    btnDelete.textContent = "Delete"

    divActions.append(btnEdit,btnDelete)
    divCard.append(pContent,pAuthor,divActions)
    return divCard
}