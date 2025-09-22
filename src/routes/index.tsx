import { createFileRoute, useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Home,
})

function Home() {
    return (
        <>
        <div className='h-screen w-full bg-red-200 border-0'>
            <h1>Home</h1>
        </div>
        </>
  )
}