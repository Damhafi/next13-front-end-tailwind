'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { any } from 'zod'

export default function ContactForm() {
    // const {
    //     register,
    //     reset,
    //     handleSubmit,
    //     formState: { errors, isSubmitting }
    // } = useForm<ContactFormData>({
    //     resolver: zodResolver(ContactFormSchema)
    // })

    const [sending, setSending] = useState(false)
    const [result, setResult] = useState<string | null>(null)

    // const sendContact = async (data: ContactFormData) => {
    //     setResult(null)
    //     setSending(true)

    //     const response = await fetch('/api/contact/', {
    //         method: 'POST',
    //         body: JSON.stringify(data)
    //     })

    //     setSending(false)

    //     if (!response.ok) {
    //         setResult('Não foi possível enviar sua mensagem :(')
    //     } else {
    //         setResult('Mensagem enviada com sucesso!')
    //         reset()
    //     }
    // }

    const { handleSubmit, register, reset, formState: { errors, isSubmitting } } = useForm<any>()
    const sendContact = async (data: any) => { }

    return (
        <form
            onSubmit={handleSubmit(sendContact)}
            className="grid w-full grid-cols-1 gap-x-7 gap-y-3 md:grid-cols-2 md:gap-y-6"
        >
            <p className="col-span-full hidden pb-3 text-left text-5xl font-semibold md:block">
                Contato
            </p>

            <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 text-lg font-semibold">
                    Seu nome:
                </label>
                <input
                    {...register('name')}
                    type="text"
                    autoComplete="name"
                    className="focs:ring h-14 rounded border-none bg-gray-50 focus:ring-green-500"
                />
                {errors && errors.name && (
                    <span className="mt-1 text-sm text-red-500">
                        {/* {errors.name.message} */}
                    </span>
                )}
            </div>

            <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-lg font-semibold">
                    Seu e-mail:
                </label>
                <input
                    {...register('email')}
                    type="email"
                    autoComplete="email"
                    className="focs:ring h-14 rounded border-none bg-gray-50 focus:ring-green-500"
                />
                {errors && errors.email && (
                    <span className="mt-1 text-sm text-red-500">
                        {/* {errors.email.message} */}
                    </span>
                )}
            </div>

            <div className="col-span-full flex flex-col">
                <label htmlFor="message" className="mb-2 text-lg font-semibold">
                    Sua mensagem:
                </label>
                <textarea
                    {...register('message')}
                    maxLength={250}
                    className="custom-scroll h-40 resize-none rounded border-none bg-gray-50 focus:ring-green-500"
                />
                {errors && errors.message && (
                    <span className="mt-1 text-sm text-red-500">
                        {/* {errors.message.message} */}
                    </span>
                )}
            </div>

            <div className="col-span-full flex flex-col items-center gap-y-1">
                <div className="relative flex w-full items-center justify-between">
                    <button
                        type="submit"
                        disabled={sending || isSubmitting}
                        className="w-full rounded border border-black bg-black px-7 py-7 text-left text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black disabled:cursor-not-allowed md:px-16 md:text-2xl"
                    >
                        {sending ? 'Enviando mensagem...' : 'Enviar mensagem'}
                    </button>
                    <svg
                        className="absolute right-16 hidden md:block"
                        width="80"
                        height="12"
                        viewBox="0 0 80 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M80 6.00001L70 0.226503L70 11.7735L80 6.00001ZM-8.74228e-08 7L71 7.00001L71 5.00001L8.74228e-08 5L-8.74228e-08 7Z"
                            fill="#1EFDA4"
                        />
                    </svg>
                    <svg
                        className="absolute right-7 md:hidden"
                        width="29"
                        height="6"
                        viewBox="0 0 29 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M28.5 3L23.5 0.113249V5.88675L28.5 3ZM0 3.5H24V2.5H0V3.5Z"
                            fill="#1EFDA4"
                        />
                    </svg>
                </div>
                {result && <p className="text-gray-500">{result}</p>}
            </div>
        </form>
    )
}
