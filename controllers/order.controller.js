const model = require("../models/order.model");

class OrderController {
  constructor() {}

  getAll = async (req, res) => {
    let result = await model.getAll();
    res.send(result);
  };

  getById = async (req, res) => {
    let { id } = req.params;
    let result =  await model.get(id);
    res.send(result)
  }

  getOrderDetailById = async (req, res) => {
    let { id } = req.params;
    let result = await model.getOrderDetail(id);
    res.send(result);
  };

  aggregate = async (req, res) => {
    const agg = [
      {
        $match: {
          size: `${req.query.size}`,
        },
      },
      {
        $group: {
          _id: "$name",
          totalQuantity: {
            $sum: "$quantity",
          },
          averageOrderPrice: {
            $avg: "$price",
          },
        },
      },
    ];

    const client = await MongoClient.connect(
      "mongodb+srv://web63:Web63!123@cluster0.cgedwds.mongodb.net/test",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const coll = client.db("web63").collection("orders");
    const cursor = coll.aggregate(agg);
    const result = await cursor.toArray();
    await client.close();

    res.send(result);
  };

  //Create new order
  //Update an order
  //Delete an order
}

module.exports = new OrderController();
