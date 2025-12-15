import vine from '@vinejs/vine'

const cardValidator = vine.compile(
  vine.object({
    question: vine.string().minLength(2).maxLength(255),
    reponse: vine.string().minLength(2).maxLength(255),
  })
)

export { cardValidator }
