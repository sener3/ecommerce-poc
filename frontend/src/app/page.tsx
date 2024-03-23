import Hero from "@/components/hero"
import Products from "@/components/products"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Hero />
            <Products />
        </main>
    )
}
