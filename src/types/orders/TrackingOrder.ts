export type TrackingOrder = {
    id: String,
    steps: Step[],
    orderId: String,
    status: String
}

export type Step = {
    id: String
    name: String,
    status: String,
    message: String
}