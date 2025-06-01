# Backend Upload Service

This project is a backend service designed to evaluate fraud risk and generate explanations for credit request denials using a fraud analysis model and a language model (LLM).

## Features

- **Fraud Risk Evaluation**: Analyzes input data to determine the fraud risk score and reasons for the score.
- **LLM Explanation Generation**: Generates a detailed explanation for credit request denials based on the fraud analysis results.
- **CORS Support**: Handles cross-origin requests for seamless integration with frontend applications.
- **Error Handling**: Provides robust error handling for invalid inputs and server-side issues.

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd backend-upload
    ```

2. Install dependencies using [Bun](https://bun.sh/):
    ```bash
    bun install
    ```

3. Create a `.env` file to configure the required environment variables:
    ```env
    GEMINI_API=<your-google-genai-api-key>
    MODEL_URL=<fraud-analysis-model-url>
    ```

## Usage

Start the server:
```bash
bun run index.ts
```

The server will start on port `3001`.

### API Endpoints

#### `POST /`

- **Description**: Accepts input data, evaluates fraud risk, and generates an explanation.
- **Request Body**:
  ```json
  {
     "key": "value"
  }
  ```
- **Response**:
  ```json
  {
     "result": "Generated explanation text"
  }
  ```

- **Error Responses**:
  - `405`: Method not allowed (only POST requests are supported).
  - `500`: Internal server error.

## Project Structure

- `index.ts`: Main entry point of the application. Handles fraud analysis, LLM explanation generation, and HTTP server setup.
- `tsconfig.json`: TypeScript configuration file.
- `package.json`: Project metadata and dependencies.
- `.gitignore`: Specifies files and directories to ignore in version control.

## Environment Variables

- `GEMINI_API`: API key for the Google GenAI service.
- `MODEL_URL`: URL of the fraud analysis model.

## Development

### Scripts

- `start`: Starts the server using Bun.

### TypeScript Configuration

The project uses strict TypeScript settings for better type safety and modern JavaScript features.

## Dependencies

- `@google/genai`: Library for interacting with Google GenAI.
- `typescript`: TypeScript compiler.

## License

This project is private and not intended for public distribution.

## Contributing

Contributions are welcome! Please follow the project's coding standards and submit a pull request.

## Contact

For any questions or issues, please contact the project maintainer.
