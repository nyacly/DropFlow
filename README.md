# DropFlow 🚛

Solo Driver Delivery Route Optimizer built with React Native/Expo

## 🚀 Features

- 🔐 **Complete Authentication System** - Email verification, session management
- 📱 **Mobile-First Design** - React Native/Expo with responsive UI
- 🗺️ **Google Maps Integration** - Route optimization with real-time traffic
- 💳 **Subscription Management** - Stripe integration with freemium model
- 📍 **Interactive Navigation** - Turn-by-turn directions with offline support
- 🎯 **Delivery Tracking** - Proof of delivery with photo capture
- ⚡ **Smart Optimization** - AI-powered route planning
- 🏗️ **Robust Backend** - Express.js API with PostgreSQL database

## 🛠️ Tech Stack

### Frontend
- React Native with Expo SDK 54
- TypeScript for type safety
- Expo Router for navigation
- Context API for state management
- Custom theme system with dark mode

### Backend
- Express.js REST API
- PostgreSQL database with Drizzle ORM
- Session-based authentication
- Stripe payment processing
- Google Maps API integration

### Services
- Replit Mail for email verification
- Google Maps API for geocoding & routing
- Stripe for subscription management
- PostgreSQL for data persistence

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- Expo CLI
- Google Maps API key
- Stripe account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nyacly/DropFlow.git
   cd DropFlow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
   DATABASE_URL=your_postgresql_database_url
   SESSION_SECRET=your_session_secret
   ```

4. **Start the development servers**
   
   Backend:
   ```bash
   cd server
   node index.js
   ```
   
   Frontend:
   ```bash
   npx expo start --web --port 5000
   ```

5. **Open the app**
   - Web: http://localhost:5000
   - Mobile: Scan QR code with Expo Go app

## 📱 App Architecture

### Authentication Flow
1. User registration with email verification
2. 6-digit code sent via Replit Mail
3. Email verification and auto-login
4. Session-based authentication with cookies

### Route Optimization Process
1. Import delivery addresses (text input or CSV)
2. Geocode addresses using Google Maps API
3. Optimize route considering traffic patterns
4. Generate turn-by-turn navigation
5. Track deliveries with proof of delivery

### Subscription Model
- **Free Tier**: Up to 10 delivery stops
- **Pro Monthly**: Unlimited stops, advanced features ($4.99 AUD/month)
- **Pro Yearly**: Same as monthly with 17% savings ($49.99 AUD/year)

## 🔧 Development

### Project Structure
```
DropFlow/
├── app/                    # React Native/Expo app
│   ├── (tabs)/            # Tab navigation screens
│   ├── components/        # Reusable components
│   ├── contexts/          # React Context providers
│   ├── hooks/             # Custom React hooks
│   └── theme/             # Theme and styling
├── server/                # Express.js backend
│   ├── auth.ts           # Authentication logic
│   ├── index.js          # Main server file
│   └── replitmail.ts     # Email service
└── package.json          # Dependencies and scripts
```

### Key Components
- **Authentication System** (`hooks/useAuth.tsx`)
- **Route Optimization** (`server/index.js`)
- **Maps Integration** (`components/Maps`)
- **Subscription Management** (`contexts/SubscriptionContext.tsx`)

## 🚀 Deployment

This app is designed to run on Replit with the following integrations:
- PostgreSQL database
- Google Maps API
- Stripe payments
- Replit Mail for email delivery

For other platforms, ensure you have:
- PostgreSQL database
- SMTP email service
- SSL certificate for production

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ for delivery drivers everywhere** 🚛

Ready for deployment and testing!