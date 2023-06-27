export function Breadcrumbs() {
  return (
    <div className="space-x-1.5 flex items-center">
      <span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current text-gray-400"
        >
          <g clipPath="url(#home)">
            <path
              d="M7.49999 13.3333H12.5M5.00243 3.99805L4.62389 4.30088C3.56574 5.1474 3.03666 5.57066 2.65031 6.09172C2.27194 6.602 1.99428 7.17971 1.83218 7.79394C1.66666 8.42113 1.66666 9.09868 1.66666 10.4538V10.4538C1.66666 13.1405 1.66666 14.4838 2.16948 15.5186C2.65926 16.5265 3.47345 17.3407 4.48139 17.8305C5.51618 18.3333 6.85952 18.3333 9.54621 18.3333H10.4538C13.1405 18.3333 14.4838 18.3333 15.5186 17.8305C16.5265 17.3407 17.3407 16.5265 17.8305 15.5186C18.3333 14.4838 18.3333 13.1405 18.3333 10.4538V10.4538C18.3333 9.09868 18.3333 8.42113 18.1678 7.79394C18.0057 7.17971 17.728 6.602 17.3497 6.09172C16.9633 5.57066 16.4342 5.1474 15.3761 4.30088L14.9976 3.99805C13.214 2.57118 12.3222 1.85774 11.3331 1.58413C10.4608 1.34279 9.53922 1.34279 8.66683 1.58413C7.67782 1.85774 6.78602 2.57118 5.00243 3.99805Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="home">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
      <span className="text-gray-400 text-base font-medium">Home</span>
      <span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current text-gray-400"
        >
          <path
            d="M6.66669 4L10.6667 8L6.66669 12"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-gray-400 text-base font-medium">Catalog</span>
      <span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current text-gray-400"
        >
          <path
            d="M6.66669 4L10.6667 8L6.66669 12"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-black text-base font-medium flex-shrink-0">
        New Items
      </span>
    </div>
  )
}
