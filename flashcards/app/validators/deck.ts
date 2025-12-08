import vine from '@vinejs/vine'

const deckValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(2).maxLength(255),
    description: vine.string().minLength(2).maxLength(255)
  })
)
export { deckValidator }
