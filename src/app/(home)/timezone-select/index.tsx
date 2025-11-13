'use client'

import { useState } from 'react'
import Flag from 'react-world-flags'

import { Select } from '@/components'
import { TIMEZONES } from '@/utils'

type TimezoneCode = (typeof TIMEZONES)[number]['value']
type CountryCode = (typeof TIMEZONES)[number]['countryCode']

export function TimezoneSelect() {
  const [value, setValue] = useState<TimezoneCode | undefined>(undefined)
  const [countryCode, setCountryCode] = useState<CountryCode | undefined>(
    undefined,
  )

  function handleTimezoneSelected(value: string) {
    setValue(value as TimezoneCode)
    setCountryCode(
      TIMEZONES.find((timezone) => timezone.value === value)?.countryCode,
    )
  }

  return (
    <Select.Root
      name="timezone"
      value={value}
      onValueChange={handleTimezoneSelected}
    >
      <Select.Trigger>
        <Select.Value placeholder="Select your timezone...">
          {value && countryCode && (
            <>
              <Flag
                className="h-5 w-5 rounded-full object-cover object-center"
                code={countryCode}
              />
              {TIMEZONES.find((timezone) => timezone.value === value)?.label}
            </>
          )}
        </Select.Value>
      </Select.Trigger>

      <Select.Content>
        {TIMEZONES.map((timezone) => {
          return (
            <Select.Item key={timezone.value} value={timezone.value}>
              <Select.ItemPrefix>
                <Flag
                  code={timezone.countryCode}
                  className="h-5 w-5 rounded-full object-cover object-center"
                />
              </Select.ItemPrefix>
              <Select.ItemText>{timezone.label}</Select.ItemText>
            </Select.Item>
          )
        })}
      </Select.Content>
    </Select.Root>
  )
}
