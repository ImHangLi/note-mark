import { Content, DraggableTopBar, Rootlayout, Sidebar } from '@/components'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <Rootlayout>
        <Sidebar className="p-2">Sidebar</Sidebar>
        <Content className="border-l bg-zinc-900/45 border-l-white/20">Content</Content>
      </Rootlayout>
    </>
  )
}

export default App
