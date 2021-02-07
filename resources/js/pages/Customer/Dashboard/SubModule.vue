<template>
  <div class="w-full p-5">
    <div class="flex flex-col md:flex-row">
      <router-link tag="div" to='/customer/report'
        class="w-full relative xszxs px-4 py-3 md:w-1/4 sm:w-2/4 m-2 h-32 border border-black-200 cursor-pointer rounded flex text-left md:text-center shadow-lg overflow-hidden" 
      >
        <div class="w-10/12 flex flex-col justify-start text-left">
          <h3 class="text-xl text-gray-900 font-semibold">Report</h3>
          <p class="text-xs text-gray-300 mt-1">You Have 23 unpaid bill</p>
        </div>
        <div class="w-2/12 flex items-end justify-end">
          <svg
            width="30px"
            height="30px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa fa-wallet fa-w-16 fa-3x"
          >
            <g class="fa-group">
              <path
                fill="#4338CA"
                d="M416 272a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm16-240H64A64 64 0 0 0 0 96a32 32 0 0 0 32 32h48a16 16 0 0 1 0-32h384a16 16 0 0 0 16-16 48 48 0 0 0-48-48z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M461.2 128H32A32 32 0 0 1 0 96v320a64 64 0 0 0 64 64h397.2c28 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
        </div>
      </router-link>
      <router-link tag="div" to='/customer/bill'
        class="w-full relative xszxs px-4 py-3 md:w-1/4 sm:w-2/4 m-2 h-32 border border-black-200 cursor-pointer rounded flex text-left md:text-center shadow-lg overflow-hidden" 
      >
        <div class="w-10/12 flex flex-col justify-start text-left">
          <h3 class="text-xl text-gray-900 font-semibold">Pay Utility</h3>
          <p class="text-xs text-gray-300 mt-1">You Have 23 unpaid bill</p>
        </div>
        <div class="w-2/12 flex items-end justify-end">
       <svg
            width="30px"
            height="30px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa fa-landmark fa-w-16 fa-3x"
          >
            <g class="fa-group">
              <path
                fill="#111827"
                d="M496 448H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-16-80a16 16 0 0 0-16-16h-16V192h-64v160h-96V192h-64v160h-96V192H64v160H48a16 16 0 0 0-16 16v48h448z"
                class="fa-secondary"
              ></path>
              <path
                fill="#4338CA"
                d="M10.38 92.11L244.77 2a32 32 0 0 1 22.47 0l234.38 90.11a16 16 0 0 1 10.38 15V144a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-36.91a16 16 0 0 1 10.38-14.98z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
        </div>
      </router-link>
      <router-link tag="div" to='/customer/complain'
        class="w-full relative xszxs px-4 py-3 md:w-1/4 sm:w-2/4 m-2 h-32 border border-black-200 cursor-pointer rounded flex text-left md:text-center shadow-lg overflow-hidden" 
      >
        <div class="w-10/12 flex flex-col justify-start text-left">
          <h3 class="text-xl text-gray-900 font-semibold">Complain</h3>
          <p class="text-xs text-gray-300 mt-1">You Have 23 unpaid bill</p>
        </div>
        <div class="w-2/12 flex items-end justify-end">
          <svg
            width="30px"
            height="30px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            class="svg-inline--fa fa-tags fa-w-20 fa-3x"
          >
            <g class="fa-group">
              <path
                fill="#111827"
                d="M497.94 225.94L286.06 14.06A48 48 0 0 0 252.12 0H48A48 48 0 0 0 0 48v204.12a48 48 0 0 0 14.06 33.94l211.88 211.88a48 48 0 0 0 67.88 0l204.12-204.12a48 48 0 0 0 0-67.88zM112 160a48 48 0 1 1 48-48 48 48 0 0 1-48 48z"
                class="fa-secondary"
              ></path>
              <path
                fill="#4338CA"
                d="M625.94 293.82L421.82 497.94a48 48 0 0 1-67.88 0l-.36-.36 174.06-174.06a90 90 0 0 0 0-127.28L331.4 0h48.72a48 48 0 0 1 33.94 14.06l211.88 211.88a48 48 0 0 1 0 67.88z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
        </div>
      </router-link>
      <router-link tag="div" to='/customer/top-up'
        class="w-full relative xszxs px-4 py-3 md:w-1/4 sm:w-2/4 m-2 h-32 border border-black-200 cursor-pointer rounded flex text-left md:text-center shadow-lg overflow-hidden" 
      >
        <div class="w-10/12 flex flex-col justify-start text-left">
          <h3 class="text-xl text-gray-900 font-semibold">Mobile Top Up</h3>
          <p class="text-xs text-gray-300 mt-1">You Have 23 unpaid bill</p>
        </div>
        <div class="w-2/12 flex items-end justify-end">
            <svg
            width="30px"
            height="30px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            class="svg-inline--fa fa-phone-laptop fa-w-20 fa-3x"
          >
            <g class="fa-group">
              <path
                fill="#4338CA"
                d="M128 64h320v32h64V48a48.1 48.1 0 0 0-47.91-48H111.91A48.1 48.1 0 0 0 64 48v240H16a16 16 0 0 0-16 16v16a64.14 64.14 0 0 0 63.91 64H352v-96H128z"
                class="fa-secondary"
              ></path>
              <path
                fill="#111827"
                d="M604 128H420a36 36 0 0 0-36 36v312a36 36 0 0 0 36 36h184a36 36 0 0 0 36-36V164a36 36 0 0 0-36-36zm-28 320H448V192h128z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
        </div>
      </router-link>
    </div>
  </div>
</template>