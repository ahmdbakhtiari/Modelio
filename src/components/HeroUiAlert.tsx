import React from 'react'
import { AlertDialog, Button } from '@heroui/react'

interface HeroUiAlertProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export default function HeroUiAlert({
    open,
    onOpenChange,
}: HeroUiAlertProps) {
    return (
        <AlertDialog
            isOpen={open}
            onOpenChange={onOpenChange}
        >
            <AlertDialog.Backdrop variant="blur">
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">

                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />

                            <AlertDialog.Heading>
                                Error Sending Message
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body>
                            <p>
                                Unfortunately, there was a problem connecting
                                 to the model. Please try again.

                            </p>
                        </AlertDialog.Body>

                        <AlertDialog.Footer>
                            <Button
                                slot="close"
                                variant="tertiary"
                            >
                                Close
                            </Button>
                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    )
}