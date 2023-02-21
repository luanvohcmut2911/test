const mongoose = require("mongoose");
class databse {
  constructor() {}
  connect = async () => {
    await mongoose.connect(
      "mongodb+srv://web63:Web63!123@cluster0.cgedwds.mongodb.net/web63?retryWrites=true&w=majority"
    );
  };
}

module.exports = databse;