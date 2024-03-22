"use client"
import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.log(" erro is",error)
    }, [error])
    
        return <div>
              <h2> Somthing went wrong!</h2>
    </div>
}