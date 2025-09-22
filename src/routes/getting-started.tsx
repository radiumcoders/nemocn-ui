import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/getting-started')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="relative z-10">Hello "/getting-started"!</div>
}
