import { type Component } from "solid-js";

const App: Component = () => {
  return (
    <div class="bg-white">
      <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stack Desk
          </h2>
          <p class="mt-4 text-gray-500">
            A simple <b>desktop application</b> designed for developers to
            access <b>Stack Overflow</b> questions and answers wit features that
            I wish it was there when using the app.
          </p>
          <p class="mt-4 text-gray-500">
            Below are some of the features that can be expected:
          </p>

          <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">
                Bookmark questions & answers without login
              </dt>
              <dd class="mt-2 text-sm text-gray-500">
                It was challenging to bookmark questions on Stack Overflow
                without logging into the platform.
              </dd>
            </div>
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">
                Watch for (combination) tags
              </dt>
              <dd class="mt-2 text-sm text-gray-500">
                It was hard for developers to watch for questions based on tags.
              </dd>
            </div>
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">
                Get notified of any question activity
              </dt>
              <dd class="mt-2 text-sm text-gray-500">
                Developers often struggled to track updates or activities
                related to specific questions.
              </dd>
            </div>
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">
                Access your notifications
              </dt>
              <dd class="mt-2 text-sm text-gray-500">
                Developers often miss important notifications and updates from
                Stack Overflow, making it harder to stay informed.
              </dd>
            </div>
          </dl>
        </div>
        <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 place-content-center ">
          <a
            href="https://github.com/ak2403/stackdesk/issues/1"
            target="_blank"
            rel="noopener"
          >
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Github Discussions
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
