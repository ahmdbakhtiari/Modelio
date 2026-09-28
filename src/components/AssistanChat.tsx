"use client";

import { useEffect, useRef, useState } from "react";
import { Button, TextArea } from "@heroui/react";
import {
  CircleArrowUpIcon,
  EllipsisIcon,
  Share2Icon,
  SparklesIcon,
} from "lucide-react";
import { postMessageToOpenRouter } from "../actions/action";
import HeroUiAlert from "./HeroUiAlert";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const models = [
  "Nemotron-3",
  "Space-Bunny",
  "Ling-3",
  "Dots3",
];

export default function AssistanChat() {
  const [selectedModel, setSelectedModel] = useState("Nemotron-3");
  const [activeAction, setActiveAction] = useState<string | null>(null);

  const [textAreaMessage, setTextAreaMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  // Start a new chat when model changes
  useEffect(() => {
    setMessages([]);
    setTextAreaMessage("");
    setActiveAction("new-chat");
  }, [selectedModel]);

  // Send message
  const handleSendMessage = async () => {
    const message = textAreaMessage.trim();

    if (!message || isLoading) {
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: message,
      },
    ]);

    setTextAreaMessage("");
    setActiveAction("send");
    setIsLoading(true);

    try {
      let result;

      switch (selectedModel) {
        case "Nemotron-3":
        case "Space-Bunny":
        case "Ling-3":
        case "Laguna":
        case "Dots3":
        case "Inkling":
          result = await postMessageToOpenRouter(
            message,
            selectedModel
          );
          break;

        default:
          throw new Error("Unknown model");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            typeof result === "string"
              ? result
              : result.content,
        },
      ]);
    } catch (error) {
      console.error("OpenRouter error:", error);

      setShowError(true);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
      setActiveAction(null);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setTextAreaMessage("");
    setActiveAction("new-chat");
  };

  const handleAction = (action: string) => {
    if (action === "send") {
      handleSendMessage();
      return;
    }

    if (action === "new-chat") {
      handleNewChat();
      return;
    }

    setActiveAction(action);
  };

  return (
    <div className="flex h-[100dvh] w-full overflow-hidden bg-gray-50">
      {/* Error */}
      <HeroUiAlert
        open={showError}
        onOpenChange={setShowError}
      />

      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col border-r bg-gray-100 px-4 py-5 md:flex lg:w-72">
        <div className="mb-10">
          <p className="text-lg font-medium">
            <span className="mr-2 inline-block rounded-sm bg-sky-500 px-2 text-transparent">
              .
            </span>
            Modelio
          </p>
        </div>

        <Button
          fullWidth
          onPress={handleNewChat}
          className={`
            rounded-lg border py-5 text-black transition-all duration-200
            ${
              activeAction === "new-chat"
                ? "border-sky-300 bg-sky-100"
                : "border-transparent bg-gray-100 hover:bg-gray-200"
            }
          `}
        >
          + New Chat
        </Button>

        <div className="mt-8">
          <p className="text-sm font-light text-gray-500">
            Recent
          </p>
        </div>
      </aside>

      {/* Main */}
      <main className="flex h-[100dvh] min-w-0 flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="shrink-0 border-b bg-gray-100 px-3 py-2 sm:px-5 lg:px-10">
          {/* Desktop Header */}
          <div className="hidden items-center justify-between gap-3 sm:flex">
            {/* Conversation Info */}
            <div className="min-w-0 shrink-0">
              <p className="truncate text-sm sm:text-base">
                New Conversation
              </p>

              <span className="text-xs font-light text-gray-500 sm:text-sm">
                Private · Not saved yet
              </span>
            </div>

            {/* Model Selector */}
            <div className="mx-2 min-w-0 flex-1 lg:mx-6">
              <div className="mx-auto w-fit max-w-full overflow-x-auto rounded-xl border bg-gray-100 p-1">
                <ul className="flex items-center gap-1 whitespace-nowrap">
                  {models.map((model) => (
                    <li key={model}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedModel(model);
                          setActiveAction(`model-${model}`);
                        }}
                        className={`
                          rounded-lg border px-3 py-2 text-sm
                          transition-all duration-200 lg:px-4
                          ${
                            selectedModel === model
                              ? "border-gray-300 bg-white text-sky-600 shadow-sm"
                              : "border-transparent text-gray-600 hover:bg-white/70"
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
            <div className="flex shrink-0 items-center gap-1">
              <Button
                isIconOnly
                aria-label="More options"
                onPress={() => handleAction("more")}
                className={`
                  h-9 min-w-9 rounded-lg text-black
                  transition-all duration-200
                  ${
                    activeAction === "more"
                      ? "scale-95 bg-gray-200"
                      : "bg-gray-100 hover:bg-gray-200"
                  }
                `}
              >
                <EllipsisIcon size={18} />
              </Button>

              <Button
                isIconOnly
                aria-label="Share"
                onPress={() => handleAction("share")}
                className={`
                  h-9 min-w-9 rounded-lg text-black
                  transition-all duration-200
                  ${
                    activeAction === "share"
                      ? "scale-95 bg-sky-100 text-sky-600"
                      : "bg-gray-100 hover:bg-gray-200"
                  }
                `}
              >
                <Share2Icon size={18} />
              </Button>
            </div>
          </div>

          {/* Mobile Model Selector */}
          <div className="flex justify-center overflow-x-auto pb-1 sm:hidden">
            <div className="flex w-max gap-1 rounded-xl border bg-gray-100 p-1">
              {models.map((model) => (
                <button
                  key={model}
                  type="button"
                  onClick={() => {
                    setSelectedModel(model);
                    setActiveAction(`model-${model}`);
                  }}
                  className={`
                    rounded-lg border px-3 py-1.5 text-xs
                    transition-all duration-200
                    ${
                      selectedModel === model
                        ? "border-gray-300 bg-white text-sky-600 shadow-sm"
                        : "border-transparent text-gray-600"
                    }
                  `}
                >
                  {model}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Chat Area */}
        <div className="min-h-0 flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            /* Empty State */
            <div className="flex min-h-full flex-col items-center justify-center gap-5 bg-gray-50/70 px-5 text-center sm:gap-7">
              <SparklesIcon
                size={50}
                className="rounded-lg border bg-gray-50 p-3 text-sky-500"
              />

              <h1 className="mt-3 text-3xl leading-tight sm:text-4xl lg:text-5xl">
                What can I help with?
              </h1>

              <p className="max-w-xl text-sm font-light text-gray-500 sm:text-base lg:text-lg">
                Choose a model, ask a question, or start with
                one of your recent ideas.
              </p>
            </div>
          ) : (
            /* Messages */
            <div className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`
                    mb-5 flex
                    ${
                      message.role === "user"
                        ? "justify-end"
                        : "justify-start"
                    }
                  `}
                >
                  <div
                    className={`
                      max-w-[88%] whitespace-pre-wrap rounded-2xl
                      px-4 py-3 text-sm sm:max-w-[75%] sm:text-base
                      ${
                        message.role === "user"
                          ? "rounded-br-md bg-sky-500 text-white"
                          : "rounded-bl-md border border-gray-200 bg-white text-gray-800 shadow-sm"
                      }
                    `}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {/* Loading */}
              {isLoading && (
                <div className="mb-5 flex justify-start">
                  <div className="rounded-2xl rounded-bl-md border border-gray-200 bg-white px-5 py-4 shadow-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />

                      <span
                        className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                        style={{ animationDelay: "150ms" }}
                      />

                      <span
                        className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="shrink-0 px-3 pb-3 pt-2 sm:px-5 sm:pb-6 lg:px-10">
          <div className="mx-auto w-full rounded-2xl border border-gray-300 bg-gray-50 p-2 shadow-sm sm:w-4/5 sm:p-3 lg:w-3/5">
            <TextArea
              value={textAreaMessage}
              className="w-full bg-transparent shadow-none"
              placeholder="Ask anything..."
              disabled={isLoading}
              onChange={(event) => {
                setTextAreaMessage(event.target.value);
              }}
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" &&
                  !event.shiftKey
                ) {
                  event.preventDefault();
                  handleSendMessage();
                }
              }}
            />

            <div className="mt-2 flex items-center justify-between gap-2">
              <span className="hidden text-xs text-gray-400 sm:block">
                {selectedModel}
              </span>

              <Button
                aria-label="Send message"
                isDisabled={
                  isLoading ||
                  !textAreaMessage.trim()
                }
                onPress={handleSendMessage}
                className={`
                  ml-auto h-10 rounded-xl bg-sky-500 px-5
                  text-black transition-all duration-200
                  ${
                    activeAction === "send"
                      ? "scale-90 bg-sky-600"
                      : "hover:bg-sky-400"
                  }
                `}
              >
                <span>
                  {isLoading ? "Thinking..." : "Send"}
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
  );
}
