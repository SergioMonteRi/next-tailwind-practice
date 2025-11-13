import { Bold, Italic, Link, List, ListOrdered, MailIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import {
  Button,
  FileInput,
  Input,
  Select,
  SettingsTabs,
  Textarea,
} from '@/components'

export default function Home() {
  return (
    <>
      <h1
        className={twMerge(
          'text-3xl font-medium text-zinc-900',
          'dark:text-zinc-100',
        )}
      >
        Settings
      </h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div
          className={twMerge(
            'flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center',
            'dark:border-zinc-700',
          )}
        >
          <div className="space-y-1">
            <h2
              className={twMerge(
                'text-lg font-medium text-zinc-900',
                'dark:text-zinc-100',
              )}
            >
              Personal Info
            </h2>
            <span
              className={twMerge('text-sm text-zinc-500', 'dark:text-zinc-400')}
            >
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings-form" variant="primary">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings-form"
          className={twMerge(
            'mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200',
            'dark:divide-zinc-700',
          )}
        >
          <div className="lg:grid-cols-form flex flex-col gap-3 pb-5 lg:grid">
            <label
              htmlFor="firstName"
              className={twMerge(
                'text-sm font-medium text-zinc-700',
                'dark:text-zinc-300',
              )}
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="John" />
              </Input.Root>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className={twMerge(
                    'text-sm font-medium text-zinc-700 lg:sr-only',
                    'dark:text-zinc-300',
                  )}
                >
                  Last name
                </label>

                <Input.Root>
                  <Input.Control id="lastName" defaultValue="Doe" />
                </Input.Root>
              </div>
            </div>
            <div />
          </div>

          <div className="lg:grid-cols-form flex flex-col gap-3 pb-5 lg:grid">
            <label
              htmlFor="email"
              className={twMerge(
                'text-sm font-medium text-zinc-700',
                'dark:text-zinc-300',
              )}
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <MailIcon className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="john.doe@example.com"
              />
            </Input.Root>
            <div />
          </div>

          <div className="lg:grid-cols-form flex flex-col gap-3 pb-5 lg:grid">
            <label
              htmlFor="photo"
              className={twMerge(
                'text-sm font-medium text-zinc-700',
                'dark:text-zinc-300',
              )}
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed in your profile.
              </span>
            </label>

            <FileInput.Root className="flex w-full flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="lg:grid-cols-form flex flex-col gap-3 pb-5 lg:grid">
            <label
              htmlFor="role"
              className={twMerge(
                'text-sm font-medium text-zinc-700',
                'dark:text-zinc-300',
              )}
            >
              Role
            </label>
            <Input.Root>
              <Input.Control
                id="role"
                type="text"
                defaultValue="Software Engineer"
              />
            </Input.Root>
            <div />
          </div>

          <div className="lg:grid-cols-form flex flex-col gap-3 pb-5 lg:grid">
            <label
              htmlFor="country"
              className={twMerge(
                'text-sm font-medium text-zinc-700',
                'dark:text-zinc-300',
              )}
            >
              Country
            </label>

            <Select.Root placeholder="Select a country...">
              <Select.Item text="United States" value="united-states" />
              <Select.Item text="Brazil" value="brazil" />
            </Select.Root>
          </div>

          <div className="lg:grid-cols-form flex flex-col gap-3 pb-5 lg:grid">
            <label
              htmlFor="timezone"
              className={twMerge(
                'text-sm font-medium text-zinc-700',
                'dark:text-zinc-300',
              )}
            >
              Timezone
            </label>
            <Select.Root placeholder="Select a timezone...">
              <Select.Item text="UTC" value="utc" />
              <Select.Item text="GMT" value="gmt" />
              <Select.Item text="CET" value="cet" />
              <Select.Item text="EET" value="eet" />
            </Select.Root>
          </div>

          <div className="lg:grid-cols-form flex flex-col gap-3 pb-5 lg:grid">
            <label
              htmlFor="bio"
              className={twMerge(
                'text-sm font-medium text-zinc-700',
                'dark:text-zinc-300',
              )}
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select.Root placeholder="" defaultValue="normal">
                  <Select.Item
                    text="Normal text"
                    value="normal"
                    defaultChecked
                  />
                  <Select.Item text="Markdown" value="md" />
                </Select.Root>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="I'm a software engineer with a passion for building web applications."
              />
            </div>
          </div>

          <div className="lg:grid-cols-form flex flex-col gap-3 pb-5 lg:grid">
            <label
              htmlFor="projects"
              className={twMerge(
                'text-sm font-medium text-zinc-700',
                'dark:text-zinc-300',
              )}
            >
              Portifolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root className="w-full">
              <FileInput.Trigger />
              <FileInput.Control multiple />
              <FileInput.FileList />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
