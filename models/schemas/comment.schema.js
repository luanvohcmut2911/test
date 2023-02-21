const { ObjectID } = require("bson");
const { default: mongoose } = require("mongoose");

const OrderSchema = new mongoose.Schema({
    name: String,
    size: String,
    price: Number,
    quantity: Number,
    date: Date,
    createdBy: ObjectID,
    items: Array.of(ObjectID)
})

const commentSchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'users' },
    content: String,
    parentID: { type: Schema.Types.ObjectId, ref: 'comment', require: false, default: null },
    childrenID: [{ type: Schema.Types.ObjectId, ref: 'comment' }]
});

module.exports = OrderSchema