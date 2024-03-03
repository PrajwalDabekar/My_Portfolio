import React from "react";

function Projects(){
    return(
        <div className='h-full text-white text-left font-semibold my-5 text-2xl space-y-4'>
          More Projects

          <a 
          href='https://github.com/PrajwalDabekar/Currency_Converter'
          class="flex items-start border-b mt-4 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-9 w-9"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        <div class="ml-5">
          <h3 class="text-xl font-semibold">Currency Converter</h3>
          <p class="mt-3 text-base text-gray-300">
            ReactJS Context-API
          </p>
        </div>
      </a>

      <a 
      href='https://github.com/PrajwalDabekar/TuDu'
      class="flex items-start border-b py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-9 w-9"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        <div class="ml-5">
          <h3 class="text-xl font-semibold">ToDo App</h3>
          <p class="mt-3 text-base text-gray-300">
            ReactJS LocalStorage Context-API
          </p>
        </div>
      </a>

        </div>
    )
}
export default Projects