import Card from "./components/Card"
function App() {

  return (
    <>
      <h1 className='bg-red-500 p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username='Abc' btntext='CLick'/>
      <Card username='ccc' />
      <Card username='icici' btntext='Visit'/>
    </>
  )
}

export default App
