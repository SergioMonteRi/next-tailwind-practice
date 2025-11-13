'use client'

import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  SquareStack,
  Users,
  SearchIcon,
  Menu,
} from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import * as CollapsibleRadix from '@radix-ui/react-collapsible'

import { Logo, NavItem, Profile, UsedSpaceWidget } from './components'
import { Input } from '../input'
import { Button } from '../button'

export function Sidebar() {
  return (
    <CollapsibleRadix.Root className="fixed top-0 right-0 left-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <Logo />
        <CollapsibleRadix.Trigger className="lg:hidden" asChild>
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </CollapsibleRadix.Trigger>
      </div>

      <CollapsibleRadix.Content
        asChild
        forceMount
        className={twMerge(
          'data-[state=closed]:animate-slide-up-and-fade data-[state=open]:animate-slide-down-and-fade data-[state=closed]:hidden',
          'lg:data-[state=closed]:flex',
        )}
      >
        <div className="flex flex-1 flex-col gap-6">
          <Input.Root>
            <Input.Prefix>
              <SearchIcon className="h-5 w-5 text-zinc-500" />
            </Input.Prefix>
            <Input.Control placeholder="Search" />
          </Input.Root>

          <nav>
            <NavItem title="Home" icon={Home} />
            <NavItem title="Dashboard" icon={BarChart} />
            <NavItem title="Projects" icon={SquareStack} />
            <NavItem title="Tasks" icon={CheckSquare} />
            <NavItem title="Reporting" icon={Flag} />
            <NavItem title="Users" icon={Users} />
          </nav>

          <div className="mt-auto flex flex-col gap-6">
            <nav className="space-y-0.5">
              <NavItem title="Support" icon={LifeBuoy} />
              <NavItem title="Settings" icon={Cog} />
            </nav>

            <UsedSpaceWidget />

            <div className={twMerge('h-px bg-zinc-200', 'dark:bg-zinc-800')} />

            <Profile />
          </div>
        </div>
      </CollapsibleRadix.Content>
    </CollapsibleRadix.Root>
  )
}
