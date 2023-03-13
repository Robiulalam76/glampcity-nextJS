import { NextResponse } from "next/server";

export default function middleware(req) {
    const token = localStorage.getItem('glampcity-token')
    const url = req.url


    console.log(token);

    if (url.includes('/')) {
        return NextResponse.redirect('http://localhost:3000/login');
    }
}