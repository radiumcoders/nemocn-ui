import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='text-3xl text-primary relative z-10 mx-14'>Hello "/components"!</div>
}
