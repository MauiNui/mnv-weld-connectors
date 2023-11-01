export const customerSchema = {
    schema: {
      customers: {
        primary_key: 'id',
        fields: [
          { name: "id", type: ["null", "int"], default: null },
          {
            name: "has_payment_method_in_dunning",
            type: ["null", "boolean"],
            default: null,
          },
          {
            name: "create_at",
            type: ["null", "datetime"],
            default: null,
          },
          {
            name: "first_charge_processed_at",
            type: ["null", "datetime"],
            default: null,
          },
          {
            name: "updated_at",
            type: ["null", "datetime"],
            default: null,
          },
          {
            name: "external_customer_id",
            type: ["object"],
            default: null,
          },
          {
            name: "first_name",
            type: ["null", "string"],
            default: null,
          },
          {
            name: "last_name",
            type: ["null", "string"],
            default: null,
          },
          {
            name: "phone",
            type: ["null", "string"],
            default: null,
          },
          {
            name: "has_valid_payment_method",
            type: ["null", "boolean"],
            default: null,
          },
          {
            name: "subscriptions_active_count",
            type: ["null", "int"],
            default: null,
          },
          {
            name: "subscriptions_total_count",
            type: ["null", "int"],
            default: null,
          },
          { name: "tax_exempt", type: ["null", "boolean"], default: null },
        ]
      },
    },
  };

  export const subscriptionSchema = {
    schema: {
        subscriptions: {
          primary_key: 'id',
          fields: [
            { name: 'id', type: ['null', 'int'], default: null },
            { name: 'address_id', type: ['null', 'int'], default: null },
            { name: 'customer_id', type: ['null', 'int'], default: null },
            { name: 'analytics_data', type: ['null', 'object'], default: null },
            { name: 'cancellation_reason', type: ['null', 'string'], default: null },
            { name: 'cancellation_reason_comments', type: ['null', 'string'], default: null },
            { name: 'cancelled_at', type: ['null', 'datetime'], default: null },
            { name: 'created_at', type: ['null', 'datetime'], default: null },
            { name: 'charge_interval_frequency', type: ['null', 'int'], default: null },
            { name: 'has_queued_charges', type: ['null', 'boolean'], default: null },
            { name: 'is_prepaid', type: ['null', 'boolean'], default: null },
            { name: 'is_skippable', type: ['null', 'boolean'], default: null },
            { name: 'is_swappable', type: ['null', 'boolean'], default: null },
            { name: 'max_retries_reached', type: ['null', 'boolean'], default: null },
            { name: 'order_interval_frequency', type: ['null', 'int'], default: null },
            { name: 'quantity', type: ['null', 'int'], default: null },
            { name: 'sku_override', type: ['null', 'boolean'], default: null },
            { name: 'external_product_id', type: ['null', 'object'], default: null },
            { name: 'external_variant_id', type: ['null', 'object'], default: null },
            { name: 'next_charge_scheduled_at', type: ['null', 'datetime'], default: null },
            { name: 'order_day_of_month', type: ['null', 'integer'], default: null },
            { name: 'order_interval_unit', type: ['null', 'string'], default: null },
            { name: 'presentment_currency', type: ['null', 'string'], default: null },
            { name: 'price', type: ['null', 'string'], default: null },
            { name: 'product_title', type: ['null', 'string'], default: null },
            { name: 'properties', type: ['null', 'array'], default: null },
            { name: 'status', type: ['null', 'string'], default: null },
            { name: 'updated_at', type: ['null', 'datetime'], default: null },
            { name: 'variant_title', type: ['null', 'string'], default: null }
          ]
        },
      },
  }

  /*
{
  "subscription": {


    "expire_after_specific_number_of_charges": null,
    "external_product_id": {
      "ecommerce": "2103271587891"
    },
    "external_variant_id": {
      "ecommerce": "18261278883891"
    },
    "has_queued_charges": true,
    "is_prepaid": true,
    "is_skippable": false,
    "is_swappable": false,
    "max_retries_reached": false,
    "next_charge_scheduled_at": "2020-07-15",
    "order_day_of_month": null,
    "order_day_of_week": null,
    "order_interval_frequency": "15",
    "order_interval_unit": "day",
    "presentment_currency": "USD",
    "price": 5,
    "product_title": "Powder Milk 50.00% Off Auto renew",
    "properties": [
      {
        "name": "Colour",
        "value": "White"
      },
      {
        "name": "Package Material",
        "value": "Paper"
      }
    ],
    "quantity": 3,
    "sku": null,
    "sku_override": false,
    "status": "active",
    "updated_at": "2020-07-10T10:30:51+00:00",
    "variant_title": "1 / Powder"
  }
}
  */