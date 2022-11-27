let indk = document.querySelector('#indkomst')
let formue = document.querySelector('#friformue')
let civil = document.querySelector('#civil')
let bp = document.querySelector('#beregnetPension')
let pi = document.querySelector('#pensionsindkomst')
let ki = document.querySelector('#Kapitalindkomst')



 async function beregn(){
  let params = getDatas()
  const response = await fetch('http://localhost:4444/iss',{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
 },
    body: params
    
  })
  bp.innerHTML = response.body
}

function getDatas(){
  
return JSON.stringify(
  {   
    "licenseKey": "3QXT-W5B3-GYAE-ABJ2-X5S6-FQ27-DQ",
    "data": {
     "person": {
       "customer": true,
       "spouse": true
     },
     "customer": {
       "danishSSN": "string",
       "pensionDate": "string",
       "salary": parseInt(indk.value),
       "coronaSalary": 0,
       "activeVSOIncome": 0,
       "inactiveVSOIncome": 0,
       "pensionIncome": parseInt(pi.value),
       "pensionSaving": parseInt(formue.value),
       "capitalIncome": parseInt(ki.value),
       "liquidity": 0,
       "nationalChurchMember": true,
       "yearsAbroad": 0
     },
     "spouse": {
       "danishSSN": "string",
       "pensionDate": "string",
       "salary": parseInt(indk.value),
       "coronaSalary": 0,
       "activeVSOIncome": 0,
       "inactiveVSOIncome": 0,
       "pensionIncome": parseInt(pi.value),
       "pensionSaving": parseInt(formue.value),
       "capitalIncome": parseInt(ki.value),
       "liquidity": 0,
       "nationalChurchMember": true,
       "yearsAbroad": 0
     },
     "maritalStatus": "Unknown",
     "spouseIsSeniorCitizen": true,
     "calculationDate": "string",
     "includePublicPensionExtraSupplement": true
   }
}
)
}

