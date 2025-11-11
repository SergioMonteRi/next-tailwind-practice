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
      {...props}
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
    />
  )
}

function InputRoot(props: InputRootProps) {
  return (
    <div
      {...props}
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
    ></div>
  )
}

export const Input = {
  Root: InputRoot,
  Control: InputControl,
  Prefix: InputPrefix,
}
