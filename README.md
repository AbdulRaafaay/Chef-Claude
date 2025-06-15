# Chef Claude 👨‍🍳

Chef Claude is an AI-powered recipe assistant that helps you discover and create delicious dishes based on your available ingredients. Built with React and powered by advanced AI technology, this application makes cooking more accessible and enjoyable.

## Features

- **Ingredient-Based Recipe Generation**: Input your available ingredients and get personalized recipe suggestions
- **Interactive UI**: Clean and user-friendly interface for seamless recipe exploration
- **AI-Powered Recommendations**: Leverages advanced AI to provide contextual recipe suggestions
- **Real-time Updates**: Instant recipe generation and modifications based on your preferences

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `config.js` file in the root directory with your API credentials (see Configuration section)
4. Start the development server:
   ```bash
   npm run dev
   ```

### Configuration

Create a `config.js` file in the root directory with the following structure:
```javascript
export const HF_ACCESS_TOKEN = "your_hugging_face_token";
```

## Tech Stack

- React
- Vite
- Hugging Face AI API
- CSS for styling