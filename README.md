# PC Builder App - Setup and Integration Guide

## Project Overview
PC Builder App is an Android e-commerce application for building and purchasing custom PCs. Users can:

- Browse real products (CPU, GPU, RAM, Motherboard, Storage, PSU, Case)
- Generate AI-assisted PC builds based on budget, purpose, and brand preference
- View compatible products automatically selected from the backend

---

## Step-by-Step Guide

### 1️⃣ Build Backend API
1. Create a **Node.js + Express.js** backend.
2. Connect backend to **MongoDB** for storing product data (CPU, GPU, RAM, etc.).
3. Implement API endpoints:

- **GET `/products`**  
  Returns all available products from MongoDB.
  ```json
[
  {
    "_id": "1",
    "name": "AMD Ryzen 5 5600",
    "category": "CPU",
    "brand": "AMD",
    "price": 7500,
    "socket": "AM4",
    "image": "https://..."
  }
]
  
- **POST `/ai-builder`**  
  Accepts user input (budget, purpose, brand) and returns a compatible PC build using AI logic and real products.

4. Ensure backend **handles all logic**:
   - Product compatibility (CPU ↔ Motherboard, RAM type, PSU wattage)
   - Budget limits
   - Brand preferences
   - Stock availability

5. Secure backend:
   - Store database credentials **only on the server**
   - Validate all requests
   - Use HTTPS

---

### 2️⃣ Connect Android Studio to Backend

#### a) Add Dependencies
In `app/build.gradle`:

```gradle
implementation 'com.squareup.retrofit2:retrofit:2.9.0'
implementation 'com.squareup.retrofit2:converter-gson:2.9.0'
