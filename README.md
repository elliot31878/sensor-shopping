# Sensor Shopping Platform

A sensor shopping platform built with micro-frontend architecture using React, TypeScript, SolidJS, and Module Federation. The platform allows users to view, add, and remove sensors from the cart, and proceed to checkout. The server is powered by Nuxt.js. This repository includes 5 micro-frontend packages: `AddToCart`, `Cart`, `Home`, `Sensors`, and `Server`. 

## Features

- **View Sensors**: Browse available sensors.
- **Add to Cart**: Add selected sensors to the shopping cart.
- **Remove Sensors**: Clear sensors from the cart.
- **Checkout**: Complete the purchase of sensors.
- **Authentication**: User login functionality.
- **Micro-frontend Architecture**: Packages are split for better maintainability using Module Federation.
- **Testing**: Jest testing implemented for hooks.

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **TypeScript**: Strongly typed programming language.
- **SolidJS**: Reactive UI library for efficient performance.
- **React Query**: For handling server-state and API calls.
- **Material UI**: Component library for responsive UI.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Jest**: Testing framework for unit testing and hooks.
- **Webpack**: Module bundler for managing micro-frontend setup.
- **Nuxt.js**: Used for server-side rendering and API management.

## Micro-frontend Packages

- **AddToCart**: Manages adding sensors to the shopping cart.
- **Cart**: Displays the current shopping cart and allows modifications.
- **Home**: The landing page that showcases available sensors.
- **Sensors**: Displays detailed information about each sensor.
- **Server**: Handles authentication, data fetching, and checkout logic with Nuxt.js.

## Installation

To install and run the project locally, follow these steps:

### Prerequisites

- Ensure you have **Node.js** and **npm** installed on your machine.

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/elliot31878/sensor-shopping.git
   
$ Navigate to the project directory:
```cd sensor-shopping```

# AddToCart:
```
cd /addToCart
npm install
npm run start

```

# Cart:
```
cd /cart
npm install
npm run start

```

#AddToCart:
```
cd /addToCart
npm install
npm run start

```

# Home:
```
cd /home
npm install
npm run start

```

# Home:
```
cd /server
npm install
npm run start

```

# Running Tests

```
npm run test
```

# Reference
This project is based on the tutorial: [Microfrontend Tutorial with Module Federation](https://www.youtube.com/watch?v=lKKsjpH09dU&t=2633s)





