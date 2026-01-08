# AliceInWonderland

🎉 **A Magical Alice in Wonderland Birthday Invitation Website**

This is a whimsical, fully responsive Angular website for a birthday party invitation with an Alice in Wonderland theme. Features include animated entrance, countdown timer, location map, dress code guide, and a functional RSVP form!

## ✨ Features

- 🐰 **Down the Rabbit Hole** - Animated entrance with falling Alice and themed emojis
- ⏰ **Countdown Timer** - Pocket watch-styled timer to the party date
- 📍 **Location Section** - Interactive map link with animated rabbit
- 👗 **Dress Code Guide** - Character costume suggestions with whimsical styling
- 📧 **RSVP Form** - Fully functional form that sends responses via email
- 📱 **Mobile Responsive** - Beautiful on all devices
- 🎨 **Magical Theming** - Storybook fonts, gradients, and animations throughout

## 🚀 Quick Start

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`.

## 📧 Setting Up the RSVP Form

The RSVP form is ready to send real emails! See **[RSVP_SETUP_GUIDE.md](./RSVP_SETUP_GUIDE.md)** for detailed setup instructions.

**Quick Setup (5 minutes):**
1. Create free account at [EmailJS.com](https://www.emailjs.com/)
2. Connect your email service
3. Create email template
4. Copy Service ID, Template ID, and Public Key
5. Paste them into `/src/app/services/email.service.ts`

That's it! You'll receive RSVPs directly to your email inbox.

## 🎨 Project Structure

```
src/app/
├── components/
│   ├── rabbit-hole/      # Animated entrance
│   ├── countdown-timer/  # Party countdown
│   ├── location/         # Location with map
│   ├── dress-code/       # Costume suggestions
│   └── rsvp/            # RSVP form
└── services/
    └── email.service.ts  # Email handling
```

## Development server

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
