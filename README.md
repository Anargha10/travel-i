# Travel Itinerary App

A modern, responsive travel itinerary application built with Next.js, TypeScript, Tailwind CSS, and Radix UI. Plan your trip day by day, view activities at a glance, and manage your schedule in a sleek, mobile-first interface.

---

## 🚀 Table of Contents

1. [Demo](#demo)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Install](#install)  
   - [Environment](#environment)  
   - [Run Locally](#run-locally)  
5. [Project Structure](#project-structure)  
6. [Available Scripts](#available-scripts)  
7. [Contributing](#contributing)  
8. [License](#license)  

---

## 🌐 Demo

Live preview: [https://travel-i.vercel.app/](https://travel-i.vercel.app/)

---

## ✨ Features

- **Itinerary Cards**: Day-by-day itinerary with time, title, and location.  
- **Responsive Design**: Mobile-first layout that adapts seamlessly to tablet and desktop.  
- **Interactive Carousel**: Swipe through days or highlights using Embla Carousel.  
- **Date Picker**: Quickly select travel dates with React Day Picker.  
- **Form Validation**: Build and edit your itinerary with React Hook Form + Zod.  
- **Theming**: Light/dark mode toggles using `next-themes`.  
- **Toasts & Alerts**: Instant feedback with Radix UI Toasts & Sonner notifications.  
- **Accessible UI**: Unstyled, ARIA-driven primitives from Radix UI ensure WCAG compliance.  

---

## 🛠 Tech Stack

| Layer            | Technology                                   |
| ---------------- | --------------------------------------------- |
| **Framework**    | Next.js 15 (SSR/SSG, App Router)              |
| **Language**     | TypeScript                                   |
| **Styling**      | Tailwind CSS + `tailwind-merge`              |
| **UI Primitives**| Radix UI (Accordion, Dialog, Popover, Toast) |
| **State / Forms**| React Hook Form, Zod, Vaul (client cache)     |
| **Date Handling**| date-fns                                     |
| **Carousel**     | embla-carousel-react                         |
| **Charts**       | Recharts                                     |
| **Utilities**    | clsx, class-variance-authority, lucide-react |
| **Notifications**| sonner                                       |
| **Theming**      | next-themes                                  |

---

## 🏁 Getting Started

### Prerequisites

- Node.js v18+  
- npm or yarn  

### Install

1. **Clone the repo**  
   ```bash
   git clone https://github.com/your-username/my-v0-project.git
   cd my-v0-project
