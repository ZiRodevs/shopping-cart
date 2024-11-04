import { NextUIProvider } from '@nextui-org/react';

function App(): JSX.Element {
  return (
    <NextUIProvider>
      <main className='min-h-screen p-4'>
        <h1 className='text-4xl font-bold mb-4'>You got this 💪</h1>
        <p className='text-lg mb-2'>Stuck? Not sure how to proceed?</p>
        <p className='text-lg'>
          Don't worry - we've all been there. Let's build it together!
        </p>
      </main>
    </NextUIProvider>
  );
}

export default App;
