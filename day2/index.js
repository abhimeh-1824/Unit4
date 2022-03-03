const { response } = require("express");
const express = require("express");
const app = express();

app.get("",(request,response)=>{

    response.send("Hello");
})

app.get("/books",(request,response)=>{

   const books = {
    Freedom:`Patty and Walter Berglund were the new pioneers of old St. Paul—the gentrifiers, the hands-on parents, the avant-garde of the Whole Foods generation. Patty was the ideal sort of neighbor, who could...`,
    Ulysses :`Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss`,
    Hamlet :`The Tragedy of Hamlet, Prince of Denmark, or more simply Hamlet, is a tragedy by William Shakespeare, believed to have been written between 1599 and 1601. The play, set in Denmark, recounts how Pri...`,
    Middlemarch : `Middlemarch: A Study of Provincial Life is a novel by George Eliot, the pen name of Mary Anne Evans, later Marian Evans. It is her seventh novel, begun in 1869 and then put aside during the final i...`,
    Beloved:`Beloved (1987) is a Pulitzer Prize-winning novel by Nobel laureate Toni Morrison. The novel, her fifth, is loosely based on the life and legal case of the slave Margaret Garner, about whom Morrison`
}
response.send(JSON.stringify(books))
});

app.listen(4000,()=>{
    console.log("hii")
})
    
