module.exports = {
    subscriptions: {
        primary_key: 'id',
        fields: [
            { name: 'id', type: ['null', 'int'], default: null },
            { name: 'address_id', type: ['null', 'int'], default: null },
            { name: 'customer_id', type: ['null', 'int'], default: null },
            { name: 'charge_interval_frequency', type: ['null', 'int'], default: null },
            { name: 'has_queued_charges', type: ['null', 'boolean'], default: null },
            { name: 'is_prepaid', type: ['null', 'boolean'], default: null },
            { name: 'is_skippable', type: ['null', 'boolean'], default: null },
            { name: 'is_swappable', type: ['null', 'boolean'], default: null },
            { name: 'max_retries_reached', type: ['null', 'boolean'], default: null },
            { name: 'order_interval_frequency', type: ['null', 'int'], default: null },
            { name: 'quantity', type: ['null', 'int'], default: null },
            { name: 'sku_override', type: ['null', 'boolean'], default: null },
        ]
    }
}