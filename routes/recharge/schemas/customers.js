export default customers = {
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
    }
}