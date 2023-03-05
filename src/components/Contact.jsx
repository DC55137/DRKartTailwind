import { useState, useEffect } from 'react'

import SVGBox from './SVGBox'
import TextFieldEmail from './TextFieldEmail'
import TextField from './TextField'
// form
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Spinner from './Spinner'

export default function Contact() {
  const highestNumber = 7777
  const [loading, setLoading] = useState(false)
  const [requestSent, setRequestSent] = useState(false)

  const NewJobSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    mobile: Yup.string().required('Phone is required'),
    notes: Yup.string().required('Description is required'),
    email: Yup.string().required('Email is required'),
    address: Yup.string().required('Address is required'),
  })

  const defaultValues = {
    name: '',
    mobile: '',
    email: '',
    address: '',
    notes: '',
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(NewJobSchema),
    defaultValues,
  })

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const res = await fetch('/api/addJob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, highestNumber }),
      })
      if (res.ok) {
        setLoading(false)
        setRequestSent(true)
      } else {
        setLoading(false)
        console.error('Error creating document')
        setRequestSent(true)
      }
    } catch (error) {
      setRequestSent(true)
      setLoading(false)
      console.error('Error creating document')
    }
  }

  return (
    <section id="contact" className="relative bg-white">
      <div className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative mx-auto max-w-xl ">
          <SVGBox classes="left-full translate-x-1/2" />
          <SVGBox classes="right-full bottom-0 -translate-x-1/2" />
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get A Free Quote!
            </h2>
            <p className="mt-4 text-lg font-bold leading-6 text-red-700 underline">
              Unfortunately due to the current workload and recent weather
              events, we are not completing any maintenance, leaks or repair
              works
            </p>
          </div>
          <div className="mt-12">
            {!requestSent ? (
              loading ? (
                <Spinner className="my-60 h-40 w-40" />
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <TextField
                    name="name"
                    register={register}
                    errors={errors}
                    autoComplete="name"
                  />
                  <TextFieldEmail
                    name="email"
                    register={register}
                    errors={errors}
                  />
                  <TextField
                    name="mobile"
                    register={register}
                    errors={errors}
                    autoComplete="tel"
                  />
                  <TextField
                    name="address"
                    register={register}
                    errors={errors}
                    autoComplete="street-address"
                  />

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="notes"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="notes"
                        name="notes"
                        {...register('notes', { required: true })}
                        rows={4}
                        className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                      {errors.notes && (
                        <p className="text-xs text-red-500">
                          {errors.notes.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-main-100 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-main-200 focus:outline-none focus:ring-2 focus:ring-main-200 focus:ring-offset-2"
                    >
                      Request Quote
                    </button>
                  </div>
                </form>
              )
            ) : (
              <div className="my-60 text-sm">
                Thank you for submitting your job request through our website.
                We appreciate your interest in working with us and will review
                your submission carefully. Please note that Daniel in the office
                will be in touch with you shortly to discuss your submission
                further. In the meantime, if you have any further questions or
                need to update your submission, please don&apos;t hesitate to
                contact us. Thank you again for considering us for your
                employment needs. We look forward to potentially working with
                you in the future.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
