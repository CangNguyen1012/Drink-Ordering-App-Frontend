export type User = {
    _id: string
    email: string
    name: string
    addressLine1: string
    city: string
    country: string
}

export type MenuItem = {
    _id: string
    name: string
    price: number
}

export type Store = {
    _id: string
    user: string
    storeName: string
    city: string
    country: string
    deliveryPrice: number
    estimatedDeliveryTime: number
    cuisines: string[]
    menuItems: MenuItem[]
    imageUrl: string
    lastUpdated: string
}

export type OrderStatus =
    | "placed"
    | "paid"
    | "inProgress"
    | "outForDelivery"
    | "delivered"

export type Order = {
    _id: string
    store: Store
    user: User
    cartItems: {
        menuItemId: string
        name: string
        quantity: string
    }[]
    deliveryDetails: {
        name: string
        addressLine1: string
        city: string
        email: string
    }
    totalAmount: number
    status: OrderStatus
    createdAt: string
    storeId: string
}

export type StoreSearchResponse = {
    data: Store[]
    pagination: {
        total: number
        page: number
        pages: number
    }
}
