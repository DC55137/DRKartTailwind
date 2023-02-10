import React from 'react'
import clsx from 'clsx'

const TextFieldEmail = ({ name, register, errors }) => {
  return (
    <div className="sm:col-span-2">
      <label
        htmlFor="email"
        className="block text-sm font-medium capitalize text-gray-700"
      >
        {name}
      </label>
      <div className="mt-1">
        <input
          {...register('email', { required: true })}
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={clsx(
            `block w-full rounded-md  py-3 focus:border-main-200 focus:ring-main-200`,
            errors.email ? 'border-red-500' : 'border-gray-300'
          )}
        />
        {errors[name] && (
          <p className="text-xs text-red-500">{errors[name].message}</p>
        )}
      </div>
    </div>
  )
}

export default TextFieldEmail
