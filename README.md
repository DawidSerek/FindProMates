> The entire process of development is documented futher in google docs:
> https://drive.google.com/drive/u/1/folders/1YyhlR_fLQO159f1sBVRv3qaeXhYECJot?ths=true

## Setup and Start:

```
npm install
```

if you don't have json-server I would recommend to install it with a command

```
npm install json-server
```

then you can run

```
json-server -w ./data/db.json -p 3500
```

and in new a terminal

```
npm start
```

you can also do it with one command (nothing should be running on ports 3000 and 3500):

```
npm run dev
```

## Goals:

## _Creation of the platform FindProMates_

Create a platform that facilitates the organization of projects and events. The emphasis is placed on the ability to "recruit" individuals whose skills are currently needed by us as organizers.

## Expand web development skills, attention to organizational matters, enhance CV

#### _General organizational skills._

Communication is crucial for insight sharing (knowledge should not be "held in one pair of hands"; everyone should have a clear understanding of the project structure). It will also be useful to actively maintain the code to avoid confusion: comments (but not excessive) and code that is not redundant. Diversification of knowledge aims to accelerate project development, and it contributes to individual growth.

## Technical details

- Backend: not chosen yet (json-server as temporary database)
- Frontend: React, Chakra UI
- Github: https://github.com/ReptilianEye/FindProMates
- Figma (UI): https://www.figma.com/file/BrHDHRmowtE02kjL9zNULZ/FindProMates?type=design&node-id=8%3A21&t=Rpq6BLfuWvizcRgS-1
