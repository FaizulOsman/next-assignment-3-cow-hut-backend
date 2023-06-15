import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// Database Connection
async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://university-admin:viO1WFfKX9cKex0J@cluster0.mzkazhr.mongodb.net/cow-sell?retryWrites=true&w=majority"
    );
    console.log("Database Connected");

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(`Failed to connect database`, error);
  }
}
main();
