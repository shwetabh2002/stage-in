# Wishlist API

This project provides a simple Wishlist API for managing users' wishlists of movies and TV shows.

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)
- MongoDB (local installation or a cloud MongoDB service like MongoDB Atlas)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/shwetabh2002/stage-in.git
    cd stage-in
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Create a `.env` file**:

    Create a `.env` file in the root of your project and add your MongoDB connection string:

    ```
    MONGO_URI=mongodb://localhost:27017/your-database
    ```

    If you are running MongoDB locally, you can use MongoDB Compass to obtain the connection string.

### Running the Server

To start the server on your local machine:

```bash
npm run dev
```
**Adding Sample Data**
Stop the server if it's running. Then run the following scripts in the given sequence to add sample data to your MongoDB:

Compile and run the first sample collection script:

bash
Copy code
```
tsc ./scripts/sampleCollection.ts
node ./scripts/sampleCollection.js
```
Compile and run the second sample collection script:

bash
Copy code
```
tsc ./scripts/sampleCollection2.ts
node ./scripts/sampleCollection2.js
```
After successfully running the scripts, sample data will be added to your MongoDB. You can verify this using MongoDB Compass or any other MongoDB client.

Running Tests
To run the test cases:

bash
Copy code
```
npm test
```
Testing the API with Postman
You can test the API endpoints using Postman or curl.

Add to Wishlist
bash
Copy code
```
curl --location 'http://localhost:5000/mylist/add?userId=user2' \
--header 'Content-Type: application/json' \
--data '{
    "_id": "mo12",
    "contentType": "Movie",
    "contentTitle": "hero"
}'
```
Remove from Wishlist
bash
Copy code
```
curl --location 'http://localhost:5000/mylist/remove' \
--header 'Content-Type: application/json' \
--data '{
    "userId": "user3",
    "itemId": "tv1"
}'
```
Show User Wishlist
bash
Copy code
```
curl --location 'http://localhost:5000/mylist/list?page=2&limit=3&userId=user9'
 The default limit is 3 and the default page is 1.
```
Additional Notes
Ensure the server is running before testing with Postman or curl.
If you encounter any issues, feel free to comment or email me at shwetabhgupta2002@gmail.com.
