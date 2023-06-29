export function App() {
  return (
    <div>
      <input aria-label={'Labeled By Target'} value={'Labeled'}/>
      <div>
        By Text Target
      </div>
      <button>
        By Role Target
      </button>
      <div data-testid={"test-id"}>
        Test Id Target
      </div>
    </div>
  );
}

export default App;
