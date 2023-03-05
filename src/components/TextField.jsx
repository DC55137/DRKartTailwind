import React from 'react'
import clsx from 'clsx'

const TextField = ({ errors, name, header, register, autoComplete }) => {
  return (
    <div className="sm:col-span-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium capitalize text-gray-50"
      >
        {name}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type="text"
          {...register(name, { required: true })}
          name={name}
          id={name}
          autoComplete={autoComplete}
          className={clsx(
            `block w-full rounded-md  py-3 focus:border-main-200 focus:ring-main-200`,
            errors[name] ? 'border-red-500' : 'border-gray-300'
          )}
        />
        {errors[name] && (
          <p className="text-xs text-red-500">{errors[name].message}</p>
        )}
      </div>
    </div>
  )
}

export default TextField
