![logo](https://firebasestorage.googleapis.com/v0/b/jobsapp-2b306.appspot.com/o/logo1.png?alt=media&token=f5d203e4-b8fc-47d9-a71a-    37f7acf995e7&_gl=1*v1x7lh*_ga*MTgyNTUwNTc2OS4xNjk3NDk0NTQw*_ga_CW55HF8NVT*MTY5NzU3MTc4Ny4zLjEuMTY5NzU3MTgyNi4yMS4wLjA.)


# Compass | Find Your Ideal Job
We are a game changing work related social media plataform. We are **Compass**. Find the perfect employer/employee by talking directly to them.

## What's in Compass alpha:
 - Create an account either as a **employer** or a **employee**.
 - Browser through users, with personal filters you can edit at any momment.
 - Swipe users to the right(✓) to show interest in them. Or reject them by swiping left(✗).
 - When both users are interested a **match** is created.
 - Chat with matched users about the job opportunities and land a new job.
 - Customize your profile, to show other users who you are.


## What we built:

### Security
 - Signup with **OAuth2.0** using Facebook and Google for a safe process.
 - Session and user authentication using **JWT** (Json Web Token) stored in the browser cookies.
 - Token expiration after a certain amount of time and also if account no longer exists.
 - All data is sanitize to prevent **XSS**, **NoSQL injections**.
 - Thats to **OAuth2.0** we have protection for brute force attacks and DoS attacks.
 - Routes protection.

### Data Storage
 - All users and chats data is store in our **MongoDB** database (atlas cloud service).
 - Data models with mongoose that include type check and validation to ensure that data is correct.
 - Data pagination to boost performance.
 - Profile images are optimize before being uploaded to our cloud bucket.
 - The images are store in the **Firebase cloud storage** service.

### Front-End
 - Implemented a variety of React design patterns for the development of this application (e.g. Compound components, render props, etc.).
 - Used a system based on **custom hooks** and **react query** to handle all client side async operation. 
 - Modern and responsive design using **Tailwind CSS**.

## Technologies
#### Front-End
![React JS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=React_Query&logoColor=white)
![React Forms](https://img.shields.io/badge/React%20Hook%20Form-EC5990.svg?style=for-the-badge&logo=React-Hook-Form&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

#### Back-End
![Node JS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)

















