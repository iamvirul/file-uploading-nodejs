
**Node.js File Upload API**

**Overview:**

This Node.js application provides an API endpoint for uploading files to the server. It utilizes Express.js for handling HTTP requests, Multer for processing file uploads, and CORS for enabling cross-origin resource sharing.

**Usage:**

1. **Install Dependencies:**

   Ensure you have Node.js installed on your system. Then, install the required dependencies by running:

   ```
   npm install express cors multer
   ```

2. **Clone the Repository:**

   Clone or download this repository to your local machine.

3. **Navigate to the Directory:**

   Open a terminal or command prompt and navigate to the directory containing the downloaded files.

4. **Run the Application:**

   Execute the following command to start the Node.js server:

   ```
   node app.js
   ```

   This will start the server on port 8080 by default.

5. **Upload Files:**

   You can upload files to the server by sending a POST request to the `/uploads` endpoint. Use a tool like Postman or write a client application to interact with the API programmatically.

   Example request using cURL:

   ```
   curl -X POST -F "files=@/path/to/file1.txt" -F "files=@/path/to/file2.txt" http://localhost:8080/uploads
   ```

6. **Response:**

   Upon receiving the files, the server logs the request body and files to the console. It then responds with a JSON object indicating the status of the file upload.

**Important Notes:**

- Ensure that the server has sufficient disk space and appropriate permissions to store uploaded files in the specified destination directory (`./uploads`).
- Adjust the destination directory path in the Multer configuration (`storage.destination`) as needed.
- This application includes CORS middleware to allow cross-origin requests. Make sure to configure CORS settings according to your requirements, especially in a production environment.
- Multer is a middleware for handling `multipart/form-data`, commonly used for file uploads. It automatically parses incoming file uploads and makes them available as `req.files` object in the request handler.
- For larger-scale applications, consider implementing additional security measures, such as file type validation and size restrictions, to prevent abuse and ensure data integrity.

**Contributing:**

Contributions to this project are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

**License:**

This project is licensed under the [MIT License](LICENSE).

**Author:**

Virul Nirmala - https://virul.me

**Acknowledgments:**

- This application was developed to provide a simple and efficient solution for handling file uploads in Node.js applications.
- Special thanks to the Node.js community for creating and maintaining the Express.js and Multer libraries, simplifying the development of web applications in Node.js.
