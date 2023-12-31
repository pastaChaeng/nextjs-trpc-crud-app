export default function Home() {
  return (
    <main className='bg-gray-900 text-white min-h-screen flex flex-col items-center'>
      <div className='max-w-3xl mx-auto py-10'>
        <h1 className='text-4xl font-bold mb-8'>Todo App</h1>
        <div className='flex w-full mb-6'>
       
          <input
      type='text'
      placeholder='Add a todo...'
      className='flex-1 px-4 py-2 rounded-l-lg focus:outline-none bg-gray-800 text-white'
      value='Enter todo...'
     
    />
          <button className='bg-gray-800 text-white px-6 py-2 rounded-r-lg'>
            Add
          </button>
        </div>
        <ul className='w-full'>
        </ul>
      </div>
    </main>
  )
}
