# lyftrac

## API Routes

| API Base URL                   | Method | Path                   | Action                          |
| ------------------------------ | ------ | ---------------------- | ------------------------------- |
| https://lyftrac.herokuapp.com/ | POST   | `"/api/users"`         | Register a user                 |
| https://lyftrac.herokuapp.com/ | POST   | `"/api/users/login"`   | Login using user credentials    |
| https://lyftrac.herokuapp.com/ | GET    | `"/api/users/profile"` | Get users profile data          |
| https://lyftrac.herokuapp.com/ | PUT    | `"/api/users/profile"` | Update users profile data       |
| https://lyftrac.herokuapp.com/ | GET    | `"/api/users/id"`      | Get user by ID                  |
| https://lyftrac.herokuapp.com/ | PUT    | `"/api/users/id"`      | Update users details            |
| https://lyftrac.herokuapp.com/ | DELETE | `"/api/users/id"`      | Delete user using id            |
| https://lyftrac.herokuapp.com/ | POST   | `"/api/goals"`         | Create a new goal               |
| https://lyftrac.herokuapp.com/ | GET    | `"/api/goals/id"`      | Get all the goals using user id |
| https://lyftrac.herokuapp.com/ | GET    | `"/api/goals/id"`      | Get a goal using id             |
| https://lyftrac.herokuapp.com/ | PUT    | `"/api/goals/id"`      | Update a goal using id          |
| https://lyftrac.herokuapp.com/ | DELETE | `"/api/goals/id"`      | Delete a goal using id          |


## Available Scripts

**Install Dependencies**

```bash
npm install
```

**Start Development Server**

```bash
npm run dev
```

**Start Production Server**

```bash
npm start
```

---
