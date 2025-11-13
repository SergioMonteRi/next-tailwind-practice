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
} from 'lucide-react'

import { Logo, NavItem, Profile, UsedSpaceWidget } from './components'
import { Input } from '../input'

export function Sidebar() {
  return (
    <aside className="fixed top-0 right-0 bottom-0 left-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 lg:relative lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8">
      <Logo />

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
        <div className="h-px bg-zinc-200" />
        <Profile />
      </div>
    </aside>
  )
}
