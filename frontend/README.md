# Fraud Detection System

The Fraud Detection System is a React-based web application designed to evaluate and display the compliance and risk scores of organizations based on their financial and regulatory data. The system provides insights into organizations' statuses, reasons for evaluation, and detailed information about their compliance.

## Features

- **Search by FIN**: Users can search for organizations using their FIN (Taxpayer Identification Number) to view a list of matching organizations and their scores.
- **Search by VOEN**: Users can search for a specific organization using its VOEN (Taxpayer Registration Number) to view detailed information.
- **Organization Details**: Displays detailed information about an organization, including its name, address, phone number, registration date, owner, and compliance reasons.
- **Score Visualization**: Visual representation of an organization's compliance score using a circular progress indicator.
- **Responsive Design**: The application is designed to work seamlessly across different screen sizes.

## Project Structure

The project is organized as follows:

- **`src/components`**: Contains reusable React components such as `ScoreCircle`, `StateIndicator`, `MainInfo`, `ReasonDescription`, and `TransactionsTable`.
- **`src/pages`**: Contains the main pages of the application, including `Home`, `Results`, and `ResultsByFin`.
- **`src/utils`**: Contains utility functions for fetching organization data.
- **`src/types`**: Defines TypeScript interfaces for the application's data structures.
- **`src/mock.json`**: Mock data used for testing and development purposes.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd mono-repo/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open the application in your browser at `http://localhost:3000`.

## Scripts

- **`npm start`**: Starts the development server.
- **`npm build`**: Builds the application for production.
- **`npm test`**: Runs the test suite.
- **`npm eject`**: Ejects the configuration files (use with caution).

## Dependencies

The project uses the following key dependencies:

- **React**: A JavaScript library for building user interfaces.
- **React Router DOM**: For routing and navigation.
- **TypeScript**: For static type checking.
- **Testing Library**: For testing React components.

## Folder Structure
