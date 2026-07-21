import { Button } from "@/shadcn-components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import { Spinner } from "@/components/ui/spinner"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RiErrorWarningLine } from "@remixicon/react"

const SCRIPT_URL = import.meta.env.VITE_MAILING_LIST_SCRIPT

interface MailingListSectionProps {
  closeDialog: () => void
}

const MailingListSection = ({ closeDialog }: MailingListSectionProps) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const reset = () => {
    setName("")
    setEmail("")
    setError(false)
  }

  const handleSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ name, email }),
      })

      if (!response.ok) {
        setError(true)
        throw new Error(`Request failed with status ${response.status}`)
      }

      setLoading(false)
      closeDialog()
    } catch {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="mailing-list-name">Name</FieldLabel>
        <Input
          id="mailing-list-name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="mailing-list-email">Email</FieldLabel>
        <Input
          id="mailing-list-email"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Field>
      {error && (
        <Alert className="w-fit gap-2 border-red-500 p-3">
          <div className="flex flex-row items-center gap-3">
            <RiErrorWarningLine className="text-red-500" size={16} />
            <AlertTitle className="text-xs">We're Having Issues</AlertTitle>
          </div>
          <AlertDescription className="text-[10px]">
            Please try again shortly.
          </AlertDescription>
        </Alert>
      )}
      <Field orientation="horizontal">
        <Button
          type="reset"
          variant="outline"
          onClick={reset}
          disabled={loading}
        >
          Reset
        </Button>
        <Button onClick={handleSignUp} type="submit" disabled={loading}>
          {loading ? <Spinner /> : "Sign Up"}
        </Button>
      </Field>
    </FieldGroup>
  )
}

export default MailingListSection
