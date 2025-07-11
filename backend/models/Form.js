const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FormDetails", FormSchema);
