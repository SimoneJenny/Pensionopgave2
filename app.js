import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'

const app = express()
const port = 4444

let corsOptions = {
    origin : ['*'],
}
app.use(cors(corsOptions))

app.put('/iss', cors(corsOptions), async (req, res)=>{

    let dataresponse = await fetch('https://minitoolsapi.azurewebsites.net/api/PublicPension',  {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
   },
      body: req.body
  })
  console.log(dataresponse)
  res.send(dataresponse)
})

app.use(express.static("public"))

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})