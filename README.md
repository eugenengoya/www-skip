# WWW Skip

## Technical Approach

### Architecture

The project follows a component-based architecture using React and TypeScript, with a focus on:

1. **Type Safety**: Comprehensive TypeScript implementation for better code reliability
2. **Component Reusability**: Modular components that can be easily maintained and extended
3. **Responsive Design**: Mobile-first approach using Tailwind CSS

### Project Structure

```bash
src/
├── components/               # Reusable UI components
│   ├── step-indicator.tsx    # Progress tracking component
│   └── skip-size.tsx         # Skip size selection component
├── lib/                      # Core business logic and data
│   ├── steps.ts              # Step definitions
│   ├── types.ts              # TypeScript type definitions
│   └── location.ts           # Skip location and pricing data
├── App.tsx                   # Main application component
└── main.tsx                  # Application entry point
```

### Implementation Details

- Implemented a step-based navigation system
- Progress tracking with visual indicators
- Validation between steps
- Grid-based layout for skip size options
- Detailed skip information display
- Clean, modern interface design

## Technologies Used

- **React**: Frontend framework
- **TypeScript**: Type-safe programming
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Build tool and development server

## Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Future Enhancements

- API integration
- User authentication
- Booking management system
