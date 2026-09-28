import React from 'react'

export default function Footer() {
    return (
        <div>

            {/* Footer */}
            <footer
                id="contact"
                className="border-t border-zinc-200 px-6 py-8"
            >
                <div className="mx-auto flex max-w-6xl items-center justify-between text-xs text-zinc-400">
                    <span>© 2026 AI Model Hub</span>

                    <div className="flex gap-6">
                        <a href="#home" className="transition-colors hover:text-zinc-600">
                            Privacy
                        </a>

                        <a href="#home" className="transition-colors hover:text-zinc-600">
                            Terms
                        </a>

                        <a href="#home" className="transition-colors hover:text-zinc-600">
                            Status
                        </a>
                    </div>
                </div>
            </footer>

        </div>
    )
}
