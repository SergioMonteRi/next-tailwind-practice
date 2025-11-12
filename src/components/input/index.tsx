import { ComponentProps } from 'react'

type InputRootProps = ComponentProps<'div'>

type InputPrefixProps = ComponentProps<'div'>

type InputControlProps = ComponentProps<'input'>

function InputPrefix(props: InputPrefixProps) {
  return <div {...props}></div>
}

function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
      {...props}
    />
  )
}

function InputRoot(props: InputRootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100"
      {...props}
    ></div>
  )
}

export const Input = {
  Root: InputRoot,
  Control: InputControl,
  Prefix: InputPrefix,
}
