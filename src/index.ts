import express, { Request, Response } from "express";
import cors from "cors";
const app = express()
app.use(cors({ origin: '*' }));
app.use(express.json())
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  res.send('enm-api')
})

app.get('/api/enmEvents', (req: Request, res: Response) => {
  res.type('application/json');
  res.json(
    [
      {
        "id": 1,
        "name": "ROCK SHOW vol. 1",
        "description": "come see some live bands perform. free drinks while supplies last",
        "address": "456 South Tenant Avenue",
        "city": "Harlingen",
        "state": "Texas",
        "country": "USA",
        "start": "7:00pm",
        "end": "10pm",
        "day": "12",
        "month": "March",
        "year": "2023"
      },
      {
        "id": 2,
        "name": "Tenten's Night of House",
        "description": "Club Music. Until the sun comes up",
        "address": "897 North Blaviken Road",
        "city": "McAllen",
        "state": "Texas",
        "country": "USA",
        "start": "11:00pm",
        "end": "",
        "day": "26",
        "month": "April",
        "year": "2023"
      },
      {
        "id": 3,
        "name": "RAGERFEST",
        "description": "COME IN. RAGE. LEAVE.",
        "address": "67 Incomplete State Highway",
        "city": "Edinburg",
        "state": "Texas",
        "country": "USA",
        "start": "9:00pm",
        "end": "12:00am",
        "day": "14",
        "month": "May",
        "year": "2023"
      },
      {
        "id": 4,
        "name": "Jazz Night at Nene Cherry's",
        "description": "",
        "address": "457 South Tenant Avenue",
        "city": "McAllen",
        "state": "Texas",
        "country": "USA",
        "start": "7:30pm",
        "end": "",
        "day": "29",
        "month": "March",
        "year": "2023"
      },
      {
        "id": 5,
        "name": "TANNA Presents: Hard Techno",
        "description": "Dance with us early into the morning. No cover",
        "address": "897 North Nlaviken Road",
        "city": "Brownsville",
        "state": "Texas",
        "country": "USA",
        "start": "12:00am",
        "end": "4:00am",
        "day": "23",
        "month": "April",
        "year": "2023"
      },
      {
        "id": 6,
        "name": "METALMETALMETAL! ptIII",
        "description": "Open up the pit.",
        "address": "67 Complete State Highway",
        "city": "Mission",
        "state": "Texas",
        "country": "USA",
        "start": "9:00pm",
        "end": "11:30",
        "day": "17",
        "month": "June",
        "year": "2023"
      }
    ]
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

