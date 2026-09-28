'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, TextArea } from '@heroui/react'
import {
    CircleArrowUpIcon,
    EllipsisIcon,
    Share2Icon,
    SparklesIcon,
} from 'lucide-react'
import { postMessageToOpenRouter } from '../actions/action'
import HeroUiAlert from './HeroUiAlert'

type Message = {
    role: 'user' | 'assistant'
    content: string
}

export default function AssistanChat() {
    const [selectedModel, setSelectedModel] = useState('Nemotron-3')
    const [activeAction, setActiveAction] = useState<string | null>(null)

    const [textAreaMessage, setTextAreaMessage] = useState('')
    const [messages, setMessages] = useState<Message[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [showError, setShowError] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const models = ['Nemotron-3', 'Space-Bunny', 'Ling-3', 'Dots3']

    // Scroll to bottom whenever messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth',
        })
    }, [messages, isLoading])

    useEffect(() => {
        handleNewChat()
    }
        , [selectedModel])


    // Send message
    const handleSendMessage = async () => {
        const message = textAreaMessage.trim()

        if (!message || isLoading) {
            return
        }

        // Add user message
        setMessages((prev) => [
            ...prev,
            {
                role: 'user',
                content: message,
            },
        ])

        // Clear textarea
        setTextAreaMessage('')

        setActiveAction('send')
        setIsLoading(true)

        try {
            let result

            switch (selectedModel) {
                case 'Nemotron-3':
                case 'Space-Bunny':
                case 'Ling-3':
                case 'Laguna':
                case 'Dots3':
                case 'Inkling':
                    result = await postMessageToOpenRouter(
                        message,
                        selectedModel
                    )
                    break

                default:
                    throw new Error('Unknown model')
            }

            console.log('result:', result)

            // Add assistant response
            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content:
                        typeof result === 'string'
                            ? result
                            : result.content,
                },
            ])

        } catch (error) {
            console.error('OpenRouter error:', error)

            // Show error dialog
            setShowError(true)

            // Add error message to chat
            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content:
                        'Sorry, something went wrong. Please try again.',
                },
            ])

        } finally {
            setIsLoading(false)
            setActiveAction(null)
        }
    }

    const handleAction = (action: string) => {
        setActiveAction(action)

        if (action === 'send') {
            handleSendMessage()
            return
        }

        if (action === 'new-chat') {
            setMessages([])
            setTextAreaMessage('')
            setActiveAction('new-chat')
        }
    }

    const handleNewChat = () => {
        setMessages([])
        setTextAreaMessage('')
        setActiveAction('new-chat')
    }

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            <HeroUiAlert
                open={showError}
                onOpenChange={setShowError}
            />
            {/* Sidebar */}
            <aside className="hidden md:flex w-64 lg:w-72 shrink-0 flex-col border-r bg-gray-100 px-4 py-5">

                <div className="mb-10">
                    <p className="text-lg font-medium">
                        <span className="inline-block bg-sky-500 mr-2 px-2 rounded-sm text-transparent">
                            .
                        </span>
                        Modelio
                    </p>
                </div>

                <Button
                    fullWidth
                    onPress={handleNewChat}
                    className={`
                        border py-5 rounded-lg transition-all duration-200
                        ${activeAction === 'new-chat'
                            ? 'bg-sky-100 border-sky-300'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }
                        text-black
                    `}
                >
                    + New Chat
                </Button>

                <div className="mt-8">
                    <p className="font-light text-sm text-gray-500">
                        Recent
                    </p>
                </div>

            </aside>

            {/* Main */}
            <main className="flex-1 min-w-0 h-screen flex flex-col">

                {/* Header */}
                <header className="bg-gray-100 border-b shrink-0 px-3 sm:px-5 lg:px-10 py-2">

                    <div className="items-center justify-between gap-3 hidden sm:flex">

                        <div className="min-w-0 shrink-0">
                            <p className="text-sm sm:text-base truncate">
                                New Conversation
                            </p>

                            <span className="font-light text-xs sm:text-sm text-gray-500">
                                Private · Not saved yet
                            </span>
                        </div>

                        {/* Model selector */}
                        <div className="hidden sm:block flex-1 min-w-0 mx-2 lg:mx-6">

                            <div className="p-1 rounded-xl bg-gray-100 border w-fit max-w-full mx-auto overflow-x-auto">

                                <ul className="flex items-center gap-1 whitespace-nowrap">

                                    {models.map((model) => (
                                        <li key={model}>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setSelectedModel(model)
                                                    setActiveAction(
                                                        `model-${model}`
                                                    )
                                                }}
                                                className={`
                                                    rounded-lg px-3 lg:px-4 py-2
                                                    border text-sm
                                                    cursor-pointer
                                                    transition-all duration-200
                                                    ${selectedModel === model
                                                        ? 'bg-white border-gray-300 shadow-sm text-sky-600'
                                                        : 'border-transparent text-gray-600 hover:bg-white/70'
                                                    }
                                                `}
                                            >
                                                {model}
                                            </button>
                                        </li>
                                    ))}

                                </ul>

                            </div>

                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-1 shrink-0">

                            <Button
                                isIconOnly
                                aria-label="More options"
                                onPress={() => handleAction('more')}
                                className={`
                                    min-w-9 w-9 h-9
                                    text-black rounded-lg
                                    transition-all duration-200
                                    ${activeAction === 'more'
                                        ? 'bg-gray-200 scale-95'
                                        : 'bg-gray-100 hover:bg-gray-200'
                                    }
                                `}
                            >
                                <EllipsisIcon size={18} />
                            </Button>

                            <Button
                                isIconOnly
                                aria-label="Share"
                                onPress={() => handleAction('share')}
                                className={`
                                    min-w-9 w-9 h-9
                                    text-black rounded-lg
                                    transition-all duration-200
                                    ${activeAction === 'share'
                                        ? 'bg-sky-100 text-sky-600 scale-95'
                                        : 'bg-gray-100 hover:bg-gray-200'
                                    }
                                `}
                            >
                                <Share2Icon size={18} />
                            </Button>

                        </div>

                    </div>

                    {/* Mobile model selector */}
                    <div className="sm:hidden mt-2 flex items-center justify-center pb-1">

                        <div className="flex gap-1 w-max p-1 rounded-xl bg-gray-100 border">

                            {models.map((model) => (
                                <button
                                    key={model}
                                    type="button"
                                    onClick={() => {
                                        setSelectedModel(model)
                                        setActiveAction(`model-${model}`)
                                    }}
                                    className={`
                                        rounded-lg px-3 py-1.5
                                        border text-xs
                                        transition-all duration-200
                                        ${selectedModel === model
                                            ? 'bg-white border-gray-300 shadow-sm text-sky-600'
                                            : 'border-transparent text-gray-600'
                                        }
                                    `}
                                >
                                    {model}
                                </button>
                            ))}

                        </div>

                    </div>

                </header>

                {/* Chat area */}
                <div className="flex-1 min-h-0 overflow-y-auto">

                    {messages.length === 0 ? (

                        /* Empty state */
                        <div className="h-full flex flex-col justify-center items-center gap-5 sm:gap-7 px-5 text-center bg-gray-50/70">

                            <SparklesIcon
                                size={50}
                                className="p-3 border rounded-lg bg-gray-50 text-sky-500"
                            />

                            <p className="text-3xl sm:text-4xl lg:text-5xl leading-tight mt-4 mb-0">
                                What can I help with?
                            </p>

                            <span className="text-sm sm:text-base lg:text-lg font-light text-gray-500 max-w-xl">
                                Choose a model, ask a question, or start with
                                one of your recent ideas.
                            </span>

                        </div>

                    ) : (

                        /* Messages */
                        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8">

                            {messages.map((message, index) => (

                                <div
                                    key={index}
                                    className={`
                                        flex mb-6
                                        ${message.role === 'user'
                                            ? 'justify-end'
                                            : 'justify-start'
                                        }
                                    `}
                                >

                                    <div
                                        className={`
                                            max-w-[85%] sm:max-w-[75%]
                                            rounded-2xl px-4 py-3
                                            text-sm sm:text-base
                                            whitespace-pre-wrap
                                            ${message.role === 'user'
                                                ? 'bg-sky-500 text-white rounded-br-md'
                                                : 'bg-white border border-gray-200 text-gray-800 rounded-bl-md shadow-sm'
                                            }
                                        `}
                                    >
                                        {message.content}
                                    </div>

                                </div>

                            ))}

                            {/* Loading */}
                            {isLoading && (
                                <div className="flex justify-start mb-6">

                                    <div className="bg-white border border-gray-200 shadow-sm rounded-2xl rounded-bl-md px-5 py-4">

                                        <div className="flex items-center gap-1.5">

                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />

                                            <span
                                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                style={{
                                                    animationDelay: '150ms',
                                                }}
                                            />

                                            <span
                                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                style={{
                                                    animationDelay: '300ms',
                                                }}
                                            />

                                        </div>

                                    </div>

                                </div>
                            )}

                            <div ref={messagesEndRef} />

                        </div>

                    )}

                </div>

                {/* Input */}
                <div className="w-full flex justify-center px-3 sm:px-5 lg:px-10">

                    <div className="w-full sm:w-4/5 lg:w-3/5 mb-5 sm:mb-8 lg:mb-10 bg-gray-50 border border-gray-300 rounded-2xl shadow-sm p-2 sm:p-3">

                        <TextArea
                            value={textAreaMessage}
                            className="w-full bg-transparent shadow-none"
                            placeholder="Ask anything..."
                            disabled={isLoading}
                            onChange={(event) => {
                                setTextAreaMessage(event.target.value)
                            }}
                            onKeyDown={(event) => {
                                if (
                                    event.key === 'Enter' &&
                                    !event.shiftKey
                                ) {
                                    event.preventDefault()
                                    handleSendMessage()
                                }
                            }}
                        />

                        <div className="flex items-center justify-between mt-2">

                            <div className="flex items-center gap-2">

                                <span className="text-xs text-gray-400 hidden sm:block">
                                    {selectedModel}
                                </span>

                            </div>

                            <Button
                                aria-label="Send message"
                                isDisabled={
                                    isLoading ||
                                    !textAreaMessage.trim()
                                }
                                onPress={() => handleSendMessage()}
                                className={`
                                    bg-sky-500 text-black
                                    rounded-xl
                                    w-28
                                    transition-all duration-200
                                    ${activeAction === 'send'
                                        ? 'scale-90 bg-sky-600'
                                        : 'hover:bg-sky-400'
                                    }
                                `}
                            >
                                <span>
                                    {isLoading ? 'Thinking...' : 'Send'}
                                </span>

                                {!isLoading && (
                                    <CircleArrowUpIcon size={20} />
                                )}

                            </Button>

                        </div>

                    </div>

                </div>

            </main>

        </div>
    )
}