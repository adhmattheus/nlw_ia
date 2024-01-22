import { createTranscriptionRoute } from './routes/create-transcription'
import { getAllPromptsRoutes } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'
import { fastify } from 'fastify'

const app = fastify()

app.register(getAllPromptsRoutes)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)

app.listen({
  port: 3333,
}).then(() => {
  console.log("HTTP server Running ...🚀")
})