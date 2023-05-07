import cors from "cors";
import express, { Request, Response } from "express";
import mongoose from "mongoose";

const app = express(); app.use(cors({ origin: '*' })); app.use(express.json())
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
      },
      {
        "id": 7,
        "name": "Bojira at McAllen Convention Center",
        "description": "Ticket can be purchased on ticketmaster",
        "address": "700 Convention Center Blvd",
        "city": "McAllen",
        "state": "Texas",
        "country": "USA",
        "start": "7:00pm",
        "end": "9:30",
        "day": "30",
        "month": "Aug",
        "year": "2023"
      },
      {
        "id": 8,
        "name": "GLAM * FUSE * GLARE * DEFEATED NOTION",
        "description": "Killer line up",
        "address": "808 Drum Drive",
        "city": "Pharr",
        "state": "Texas",
        "country": "USA",
        "start": "7:00pm",
        "end": "9:30",
        "day": "29",
        "month": "May",
        "year": "2023"
      },
      {
        "id": 9,
        "name": "Music Concert",
        "description": "Concert",
        "address": "111 Simple Event Avenue",
        "city": "Los Fresnos",
        "state": "Texas",
        "country": "USA",
        "start": "6:00pm",
        "end": "8:30",
        "day": "29",
        "month": "July",
        "year": "2023"
      },
      {
        "id": 10,
        "name": "Noodlefest",
        "description": "The iconic noodlefest returns with an amazing lineup as always. Move Kant Adjust, Cure Division, Lunar Eye, and more. Check out our art vendors for cool, one of a kind items only found here in the valley. Also be sure to order some amazing grub from our many street food artist we'll have posted up at the event. This includes Gard's amazing deep fried noodles.. as if we thought we'd seen it all! This is a safe and inclusive space for our community. Look out for each other. Racism, transphobia, homophobia, sexism, or any other type of discrimination or bigotry is NOT TOLERATED. If something is messed up, say something. Security/Staff and we will handle it as quickly and diligently as possible",
        "address": "1300 Ty Grovve Blvd",
        "city": "Edinburg",
        "state": "Texas",
        "country": "USA",
        "start": "8pm",
        "end": "11pm",
        "day": "29",
        "month": "September",
        "year": "2023"
      },
      {
        "id": 11,
        "name": "The Shack Presents - Calm Bull, Cat Bamboo, The Decemberists, Forest Bodies, King Van",
        "description": "Line up like no other at The Shack this coming weekend. Calm Bull opening the show with the eccentric, genre-bending style they are critically acclaimed for. Taking influence from the underground post hardcore scene which bloomed in the late 90s they've been able to take the sound and morph it into something truly air rippling. Don't miss it. Directly following their set we have some familiar guests. Cat Bamboo. Midway through their United States tour they take the time to play out some of their most resonating pieces with their math rockish approach to rythms and chords. It'll be a treat for those in attendance. Of course, we'd be remiss not adverting your attention to one of the greatest to ever do it in the valley's alt scene. The Septemberists. Known for their energetic sets in the mid to late 00's they come back to give the scene something time has made forcibly forgotten: the driving, colorful sounds of their live sets. On that same note we have Forest Bodies. Long ago in the deep recesses of valley neighborhoods, bars, and venues resonated the rythmic sounds of this group. Now, The Shack has arranged for their return. New walls will contain and reflect the sounds this legendary valley band produced. All for the ear to consume. Lastly, the closing act: King Van. Not sure we need to say anything to be completely honest. We will simply for the fact that King Van's utterly atrocious sonic pallete is something to truly behold. Wait what? Atrocious? Yes. The wall of sheer abrasive air coming from their amps will have anyone in the vicinity tranced by the abhorrently beautiful melodics, drones, and atmospheric backing tracks. Expose your sensory interface to something it will struggle to understand. Completely worth it.",
        "address": "333 Angel Numbers Road",
        "city": "Brownsville",
        "state": "Texas",
        "country": "USA",
        "start": "7:30pm",
        "end": "10pm",
        "day": "1",
        "month": "January",
        "year": "2022"
      }
    ]
  );
})

// asynchronous initialization. keeps api from processesing requests until a successful connection to db is established
mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(port, () => {});
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
  process.exit(1); // exit the process with an error code
});

