import { Suspense, type Component } from "solid-js";

const App: Component = (props: { children: Element }) => {
  return (
    <div style={{ "background-color": "rgb(15, 17, 21)" }}>
      <main class="max-w-2xl mx-auto h-screen flex flex-col justify-center px-4">
        <h1 class="text-5xl mx-auto mb-8 text-slate-600 font-light">
          Stack Desk
        </h1>
        <Suspense>{props.children}</Suspense>
      </main>
    </div>
  );
};

export default App;
