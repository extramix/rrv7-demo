import { MilkdownProvider } from "@milkdown/react"
import { MilkdownEditor } from "./MilkDownEditor"

export const MarkdownEditor = () => {
    return (
        <MilkdownProvider>
            <MilkdownEditor />
        </MilkdownProvider>
    )
}