## Usage

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = production
PORT = 5000
MONGO_URI = mongodb+srv://danAdmin:admin@twice-ecommerce.xkvav.mongodb.net/TwiceShop?retryWrites=true&w=majority
JWT_SECRET = '3-bscs-b'
EMAIL_SECRET = 'PSULINGAYEN'
GMAIL_USER = 'danhendrix.confirm@gmail.com'
GMAIL_PASS = 'confirmthepassword'
PAYPAL_CLIENT_ID = AQp6V88nFjrom-i1HssgAVSpy-poWKD6z5I2h3BXQdQjAU4PMFezCHLzydL0xf-lidMx-rKelBb8R44Q
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
cd ..
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

danhendrix.v@gmail.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```
