import { validate } from '@redwoodjs/api'

import { db } from 'src/lib/db'

export const contacts = () => {
  return db.contact.findMany()
}

export const contact = ({ id }) => {
  return db.contact.findUnique({
    where: { id },
  })
}

export const createContact = ({ input }) => {
  // 1st arg is the value we want to check
  // 2nd arg is the "name" prop from the <TextField> so that we know which input field on the page has an error
  // 3rd arg is the validation directives we want to invoke, here we're using the built-in "email" validator
  validate(input.email, 'email', { email: true })

  return db.contact.create({
    data: input,
  })
}

export const updateContact = ({ id, input }) => {
  return db.contact.update({
    data: input,
    where: { id },
  })
}

export const deleteContact = ({ id }) => {
  return db.contact.delete({
    where: { id },
  })
}
