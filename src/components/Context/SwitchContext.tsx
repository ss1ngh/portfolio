"use client"
import React, { createContext, useContext, useEffect, useState } from "react"

type SwitchContextType = {
    isSwitchOn: boolean
    toggleSwitch: () => void
}

const SwitchContext = createContext<SwitchContextType | undefined>(undefined)

export const SwitchProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const storedValue = localStorage.getItem("isSwitchOn")
        if (storedValue !== null) {
            setIsSwitchOn(JSON.parse(storedValue))
        }
        setIsLoaded(true)
    }, [])

    const toggleSwitch = () => {
        setIsSwitchOn((prev) => {
            const newValue = !prev
            localStorage.setItem("isSwitchOn", JSON.stringify(newValue))
            return newValue
        })
    }

    return (
        <SwitchContext.Provider value={{ isSwitchOn, toggleSwitch }}>
            {isLoaded ? children : null}
        </SwitchContext.Provider>
    )
}

export const useSwitch = () => {
    const context = useContext(SwitchContext)
    if (!context) {
        throw new Error("useSwitch must be used within a SwitchProvider")
    }
    return context
}
