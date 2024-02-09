import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Github, Wand2 } from 'lucide-react'
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Button } from "./components/ui/button";
import { Slider } from "./components/ui/slider";
import { Label } from "./components/ui/label";
import { VideoInputForm } from "./components/video-input-form";
import { PromptSelect } from "./components/prompt-select";
import { useState } from "react";

export function App() {
  const [temperature, setTemperature] = useState(0.5)
  const [videoId, setVideoId] = useState<string | null>(null)

  function handlePromptSelected(template: string) {
    console.log(template)
  }



  return (
    <div className="min-h-screen flex flex-col" >

      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3 ">
          <span className="text-sm text-muted-foreground ">
            by Mattheus 💻
          </span>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="outline">
            <Github className=" w-4 h-4 mr-2" />
            Gihub
          </Button>

        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">

        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-3 leading-relaxed"
              placeholder="Inclua o prompt para a IA..."
            />

            <Textarea
              className="resize-none p-3 leading-relaxed"
              placeholder="Resultado gerado pela IA..."

            />

          </div>

          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável <code className="text-violet-400">{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.
          </p>

        </div>

        <aside className="w-80 space-y-6 ">

          <VideoInputForm onVideoUploaded={setVideoId}
          />

          <Separator />

          < form className="space-y-6">

            <div className="space-y-2">
              <Label>Prompt</Label>
              <PromptSelect onPromptSelected={handlePromptSelected} />
            </div>

            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select disabled defaultValue="gpt 3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt 3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground">Você pdoerá customizar essa opção em breve.</span>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Temperatura</Label>
              <Slider min={0} max={1} step={0.1}
                value={[temperature]}
                onValueChange={value => setTemperature(value[0])}
              />

              <span className="block text-xs text-muted-foreground">
                Valores mais altos tendem a deixar os resultados mais criativos e com possíveis erros.
              </span>
            </div>

            <Separator />

            <Button type="submit" className="w-full">
              Executar
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}