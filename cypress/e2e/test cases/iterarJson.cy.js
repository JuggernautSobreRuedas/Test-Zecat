var generic_products = []
const filePathUrl = "cypress/fixtures/read-write/product_list.json"

function getRandomNumber(max,min) {
    return Math.floor(Math.random() * (max - min) + min);
  }
var productName 
describe("aaaaa", ()=>{

    it("ttt", ()=> { 
        
        
        console.log("voy a hacer el request")
        cy.request("http://zecat-backend-stage-new.ryp4a3vncu.us-east-1.elasticbeanstalk.com/generic_product?order[price]=asc&&page=1&limit=500")
        .its("body")
        .its("generic_products")
        .then($request=>{
            //console.log($request.find(item => !item.isKit).name)
            var products = $request.filter(item => !item.isKit)
            var index = getRandomNumber(products.length,0)
            productName = products[index].name
            console.log("estoy adentro del then")

        })
        console.log("ya pase el then")
        //cy.writeFile(filePathUrl,generic_products)
        
            
    })
    
    it("ttta", ()=> { 
        
        
        console.log("Soy otro it")
        
            
    })
})