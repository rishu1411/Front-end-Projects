// 'use client'
import { useContext } from "react";

import { ShopContext } from "@/app/Context/ShopState";

export function Hello() {
    const cartItem = useContext(ShopContext)
}