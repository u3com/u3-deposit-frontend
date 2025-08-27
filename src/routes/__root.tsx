import { Outlet, createRootRoute } from '@tanstack/react-router'

import { Footer } from '@/components/Footer'
import { Providers } from '@/components/Providers'
import { Toaster } from 'sonner'

export const Route = createRootRoute({
  component: () => (
    <Providers>
      <Toaster position="top-center" offset={120} />
      <Outlet />
      <Footer />
    </Providers>
  ),
})
