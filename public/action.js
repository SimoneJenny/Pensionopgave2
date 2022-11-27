let indk = document.querySelector('#indkomst')
let formue = document.querySelector('#friformue')
let civil = document.querySelector('#civil')
let bp = document.querySelector('#beregnetPension')
let pi = document.querySelector('#pensionsindkomst')
let ki = document.querySelector('#Kapitalindkomst')


async function beregn(){
  let calcbp = indk.value + formue.value - 5600
  let data  = await (await fetch('http://localhost:4444/iss',{
    method: 'PUT'} 
    )).json()
  console.log(calcbp)

//const sum = Math.abs(datas.indk - datas.formue + datas.ki); 
//console.log(`${indk.value} + ${formue.value} + ${ki.value} + ${pi.value} = ${sum}`);
console.log(datas);

  bp.innerHTML = JSON.stringify(calcbp)
}


let datas =  
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
       
let fdata = datas.indk


    



