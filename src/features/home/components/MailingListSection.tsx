import { Button } from "@/shadcn-components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const MailingListSection = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const reset = () => {
    setName("")
    setEmail("")
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
      <Field orientation="horizontal">
        <Button type="reset" variant="outline" onClick={reset}>
          Reset
        </Button>
        <Button type="submit">Sign Up</Button>
      </Field>
    </FieldGroup>
  )
}

export default MailingListSection
