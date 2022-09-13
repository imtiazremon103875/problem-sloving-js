 const data_object = [
    {
            "Number_of_Participants": 150,
            "Opportunity.Account_Name.Venue_Country": "Australia",
            "Email": "spzlobby@gmail.com",
            "Opportunity.Account_Name.Venue_Postcode": "2000"
        },
        {
            "Number_of_Participants": 350,
            "Opportunity.Account_Name.Venue_Country": "England",
            "Email": "spzlobby1@gmail.com",
            "Opportunity.Account_Name.Venue_Postcode": "2000"
  
        },
        {
            "Number_of_Participants": 550,
            "Opportunity.Account_Name.Venue_Country": "Japan",
            "Email": "spzlobby2@gmail.com",
            "Opportunity.Account_Name.Venue_Postcode": "1000"
        },
       {
            "Number_of_Participants": 50,
            "Opportunity.Account_Name.Venue_Country": "Australia",
            "Email": "spzlobby@gmail.com",
            "Opportunity.Account_Name.Venue_Postcode": "2000"
        }
 ]
//  Opportunity.Account_Name.Venue_Country




//  problem-1 number of participate

 let sum=0;
 data_object.forEach(data=>{
    sum +=data.Number_of_Participants;
 })

 console.log(sum)

//  problem-1 number of unique vanue


let uniqueVanueMap={};
data_object.forEach(data=>{
    if(data?.["Opportunity.Account_Name.Venue_Country"]  )
       { 
        uniqueVanueMap[data?.["Opportunity.Account_Name.Venue_Country"]]=true
    }
    
})

console.log(Object.keys(uniqueVanueMap))



let uniquePostalMap={}
data_object.forEach(data=>{
    if(data?.["Opportunity.Account_Name.Venue_Postcode"] ){
        uniquePostalMap[data?.["Opportunity.Account_Name.Venue_Postcode"]]=true
    }
})

console.log(Object.keys(uniquePostalMap))