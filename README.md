# Project Title

Labkit

## Overview

A computer hardware toolkit that allows users to scan the serial number of a device and return hardware specifications. The specs are stored in a database where users are able to view and manage their devices.

### Problem

The app helps streamline and automate repetitive tasks for computer hardware technicians. One of these tasks involve scanning in a device, inputting all relevant information such as hardware specifications and operating systems, then storing them into the database. 

### User Profile

Level 1 IT Technicians. They will scan in the serial number barcode via scanner or by manually inputting the serial number.

### Features

- As a user, I want to be able to create an account.
- As a user, I want to be able to login my account.

- As an administrator, I want to be able to approve an account.

- As a logged in user, I want to look at my incoming device requests.
- As a logged in user, I want to see available devices.
- As a logged in user, I want to manage my current devices.
- As a logged in user, I want to scan in my device.
- As a logged in user, I want to manipulate my device.
- As a logged in user, I want to search, filter, and sort my device.

## Implementation

### Tech Stack


- React
- MySQL
- Express
- Vite
- TailwindCSS
- Playwright
- JWT
- Client libraries:
    - react
    - react-router
    - axios
    - daisyUI
    - aceternityUI
    - shadeCN/UI
    - radix ui
    - spline
    - tanstack
    - tabler
    - framer motion
    - js cookie
- Server libraries:
    - knex
    - express
    - bcrypt
    - dotenv
    - jsonwebtoken
    - mysql2
    - cors

### APIs

- Web scraping data from various device manufacturers.

### Sitemap

- Home Page
- Dashboard
- Your devices
- Ticket board
- Account Settings


### Endpoints

POST /user

- Create a user account.

Parameters:
- username: User-provided username
- first-name: User-provided first name
- last-name: User-provided last name
- token: JWT authorization token

Response:
[
    {
        "username": "testUserName",
        "firstName": "testFirstName",
        "lastName": "testLastName",
        "authToken": "<generated token>"
    }
]

GET /user

- Retrieve user info after login.
