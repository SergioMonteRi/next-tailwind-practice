'use client'

import { useState } from 'react'
import Flag from 'react-world-flags'

import { Select } from '@/components'
import { countries } from '@/utils'

type CountryCode = keyof typeof countries

export function CountrySelect() {
  const [value, setValue] = useState<CountryCode | undefined>(undefined)

  function handleCountrySelected(value: string) {
    setValue(value as CountryCode)
  }

  return (
    <Select.Root
      name="country"
      value={value}
      onValueChange={handleCountrySelected}
    >
      <Select.Trigger>
        <Select.Value placeholder="Select your country...">
          {value && (
            <>
              <Flag
                className="h-5 w-5 rounded-full object-cover object-center"
                code={value}
              />
              {countries[value]}
            </>
          )}
        </Select.Value>
      </Select.Trigger>

      <Select.Content>
        {Object.entries(countries).map(([code, name]) => {
          return (
            <Select.Item key={code} value={code}>
              <Select.ItemPrefix>
                <Flag
                  code={code}
                  className="h-5 w-5 rounded-full object-cover object-center"
                />
              </Select.ItemPrefix>
              <Select.ItemText>{name}</Select.ItemText>
            </Select.Item>
          )
        })}
      </Select.Content>
    </Select.Root>
  )
}
