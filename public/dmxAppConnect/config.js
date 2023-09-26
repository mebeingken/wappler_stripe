dmx.config({
  "main": {
    "shopping_cart": [
      {
        "type": "text",
        "name": "product_id"
      },
      {
        "type": "number",
        "name": "quantity"
      }
    ],
    "query": [
      {
        "type": "text",
        "name": "checkout_session_id"
      }
    ]
  },
  "index": {
    "repeat1": {
      "meta": [
        {
          "name": "$id",
          "type": "number"
        },
        {
          "type": "text",
          "name": "product_id"
        },
        {
          "type": "text",
          "name": "qty"
        }
      ],
      "outputType": "array"
    }
  }
});
