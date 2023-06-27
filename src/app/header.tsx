import Link from 'next/link'
import { Search } from './search'

export function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <div className="grid md:grid-cols-4 md:gap-6 grid-flow-col auto-cols-auto">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">ShopBase</span>
              <svg
                width="13"
                height="18"
                viewBox="0 0 13 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:hidden"
              >
                <path
                  d="M6.8219 8.64715L6.60505 9.22218L7.02011 9.67539L10.6595 13.6492C11.8345 14.9322 10.9243 17 9.18453 17H3C1.89543 17 1 16.1046 1 15V9V3C1 1.89543 1.89543 1 3 1H6.81398C8.21196 1 9.17862 2.39764 8.68534 3.7057L6.8219 8.64715Z"
                  stroke="#1B1B1B"
                  strokeWidth="2"
                />
              </svg>

              <svg
                width="128"
                height="38"
                viewBox="0 0 128 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden sm:block"
              >
                <path
                  d="M6.8219 18.6472L6.60505 19.2222L7.02011 19.6754L10.6595 23.6492C11.8345 24.9322 10.9243 27 9.18453 27H3C1.89543 27 1 26.1046 1 25V19V13C1 11.8954 1.89543 11 3 11H6.81398C8.21196 11 9.17862 12.3976 8.68534 13.7057L6.8219 18.6472Z"
                  stroke="#1B1B1B"
                  strokeWidth="2"
                />
                <path
                  d="M27.848 27.836C26.648 27.836 25.6 27.684 24.704 27.38C23.808 27.06 23.056 26.628 22.448 26.084C21.856 25.524 21.4 24.868 21.08 24.116C20.76 23.364 20.576 22.556 20.528 21.692H22.64C22.928 24.636 24.696 26.108 27.944 26.108C28.536 26.108 29.08 26.044 29.576 25.916C30.088 25.772 30.52 25.572 30.872 25.316C31.24 25.044 31.52 24.708 31.712 24.308C31.92 23.892 32.024 23.42 32.024 22.892C32.024 22.3 31.896 21.812 31.64 21.428C31.4 21.044 31.056 20.724 30.608 20.468C30.16 20.212 29.616 20.004 28.976 19.844C28.352 19.668 27.656 19.492 26.888 19.316C26.136 19.156 25.416 18.972 24.728 18.764C24.056 18.54 23.464 18.252 22.952 17.9C22.44 17.548 22.032 17.108 21.728 16.58C21.424 16.036 21.272 15.356 21.272 14.54C21.272 13.836 21.408 13.204 21.68 12.644C21.968 12.084 22.368 11.612 22.88 11.228C23.392 10.828 24.008 10.524 24.728 10.316C25.448 10.108 26.24 10.004 27.104 10.004C28.176 10.004 29.096 10.14 29.864 10.412C30.648 10.668 31.296 11.028 31.808 11.492C32.32 11.956 32.72 12.524 33.008 13.196C33.296 13.852 33.496 14.572 33.608 15.356H31.568C31.408 14.124 30.944 13.204 30.176 12.596C29.424 11.988 28.416 11.684 27.152 11.684C25.984 11.684 25.048 11.924 24.344 12.404C23.64 12.868 23.288 13.548 23.288 14.444C23.288 14.924 23.4 15.332 23.624 15.668C23.848 15.988 24.16 16.268 24.56 16.508C24.96 16.732 25.432 16.916 25.976 17.06C26.536 17.204 27.136 17.34 27.776 17.468C28.608 17.644 29.408 17.844 30.176 18.068C30.944 18.276 31.624 18.572 32.216 18.956C32.808 19.34 33.28 19.844 33.632 20.468C33.984 21.076 34.16 21.86 34.16 22.82C34.16 23.62 34 24.332 33.68 24.956C33.376 25.58 32.944 26.108 32.384 26.54C31.824 26.956 31.16 27.276 30.392 27.5C29.624 27.724 28.776 27.836 27.848 27.836ZM38.2874 16.724H38.3354C38.7834 16.132 39.3194 15.668 39.9434 15.332C40.5834 14.98 41.3594 14.804 42.2714 14.804C43.5674 14.804 44.5834 15.148 45.3194 15.836C46.0714 16.508 46.4474 17.492 46.4474 18.788V27.5H44.5034V18.956C44.5034 18.14 44.2554 17.516 43.7594 17.084C43.2634 16.652 42.5754 16.436 41.6954 16.436C41.1994 16.436 40.7434 16.524 40.3274 16.7C39.9114 16.86 39.5514 17.092 39.2474 17.396C38.9434 17.684 38.7034 18.044 38.5274 18.476C38.3674 18.892 38.2874 19.356 38.2874 19.868V27.5H36.3434V10.34H38.2874V16.724ZM54.3271 27.836C53.3991 27.836 52.5671 27.668 51.8311 27.332C51.0951 26.98 50.4631 26.508 49.9351 25.916C49.4231 25.324 49.0231 24.636 48.7351 23.852C48.4631 23.052 48.3271 22.204 48.3271 21.308C48.3271 20.412 48.4631 19.572 48.7351 18.788C49.0231 17.988 49.4231 17.292 49.9351 16.7C50.4631 16.108 51.0951 15.644 51.8311 15.308C52.5671 14.956 53.3991 14.78 54.3271 14.78C55.2551 14.78 56.0871 14.956 56.8231 15.308C57.5591 15.644 58.1831 16.108 58.6951 16.7C59.2231 17.292 59.6231 17.988 59.8951 18.788C60.1671 19.572 60.3031 20.412 60.3031 21.308C60.3031 22.204 60.1671 23.052 59.8951 23.852C59.6231 24.636 59.2231 25.324 58.6951 25.916C58.1831 26.508 57.5591 26.98 56.8231 27.332C56.0871 27.668 55.2551 27.836 54.3271 27.836ZM54.3271 26.204C54.9831 26.204 55.5591 26.076 56.0551 25.82C56.5511 25.564 56.9671 25.22 57.3031 24.788C57.6391 24.34 57.8871 23.82 58.0471 23.228C58.2231 22.636 58.3111 21.996 58.3111 21.308C58.3111 20.62 58.2231 19.98 58.0471 19.388C57.8871 18.796 57.6391 18.276 57.3031 17.828C56.9671 17.38 56.5511 17.028 56.0551 16.772C55.5591 16.516 54.9831 16.388 54.3271 16.388C53.6711 16.388 53.0871 16.516 52.5751 16.772C52.0791 17.028 51.6631 17.38 51.3271 17.828C50.9911 18.276 50.7351 18.796 50.5591 19.388C50.3991 19.98 50.3191 20.62 50.3191 21.308C50.3191 21.996 50.3991 22.636 50.5591 23.228C50.7351 23.82 50.9911 24.34 51.3271 24.788C51.6631 25.22 52.0791 25.564 52.5751 25.82C53.0871 26.076 53.6711 26.204 54.3271 26.204ZM62.2419 15.092H64.1859V16.844H64.2339C64.6979 16.204 65.2499 15.708 65.8899 15.356C66.5299 14.988 67.3059 14.804 68.2179 14.804C69.0019 14.804 69.7219 14.956 70.3779 15.26C71.0339 15.548 71.5939 15.972 72.0579 16.532C72.5219 17.076 72.8819 17.756 73.1379 18.572C73.4099 19.388 73.5459 20.308 73.5459 21.332C73.5459 22.324 73.4179 23.228 73.1619 24.044C72.9219 24.844 72.5699 25.532 72.1059 26.108C71.6419 26.668 71.0739 27.1 70.4019 27.404C69.7299 27.708 68.9779 27.86 68.1459 27.86C67.2979 27.86 66.5619 27.724 65.9379 27.452C65.3139 27.18 64.7459 26.708 64.2339 26.036H64.1859V31.484H62.2419V15.092ZM68.0019 26.228C68.5939 26.228 69.1139 26.108 69.5619 25.868C70.0099 25.612 70.3779 25.268 70.6659 24.836C70.9699 24.404 71.1939 23.892 71.3379 23.3C71.4819 22.708 71.5539 22.06 71.5539 21.356C71.5539 20.668 71.4819 20.028 71.3379 19.436C71.1939 18.828 70.9699 18.308 70.6659 17.876C70.3779 17.428 70.0099 17.084 69.5619 16.844C69.1299 16.588 68.6179 16.46 68.0259 16.46C67.3539 16.46 66.7619 16.588 66.2499 16.844C65.7539 17.1 65.3459 17.452 65.0259 17.9C64.7059 18.348 64.4659 18.868 64.3059 19.46C64.1459 20.052 64.0659 20.684 64.0659 21.356C64.0659 22.028 64.1379 22.66 64.2819 23.252C64.4259 23.844 64.6499 24.364 64.9539 24.812C65.2739 25.244 65.6819 25.588 66.1779 25.844C66.6739 26.1 67.2819 26.228 68.0019 26.228ZM75.4841 10.34H83.1641C84.0921 10.34 84.9001 10.452 85.5881 10.676C86.2921 10.884 86.8681 11.188 87.3161 11.588C88.2281 12.404 88.6841 13.476 88.6841 14.804C88.6841 15.684 88.4361 16.412 87.9401 16.988C87.4601 17.548 86.8121 17.964 85.9961 18.236V18.308C86.9561 18.58 87.7241 19.092 88.3001 19.844C88.8921 20.596 89.1881 21.5 89.1881 22.556C89.1881 23.372 89.0601 24.068 88.8041 24.644C88.5641 25.204 88.1881 25.7 87.6761 26.132C87.1801 26.564 86.5641 26.9 85.8281 27.14C85.0921 27.38 84.2681 27.5 83.3561 27.5H75.4841V10.34ZM78.9641 24.62H82.9721C83.8201 24.62 84.4761 24.412 84.9401 23.996C85.4201 23.564 85.6601 22.996 85.6601 22.292C85.6601 21.476 85.3961 20.86 84.8681 20.444C84.3401 20.028 83.6761 19.82 82.8761 19.82H78.9641V24.62ZM82.7321 17.252C83.5001 17.252 84.1161 17.076 84.5801 16.724C85.0441 16.372 85.2761 15.86 85.2761 15.188C85.2761 14.548 85.0521 14.052 84.6041 13.7C84.1721 13.348 83.5721 13.172 82.8041 13.172H78.9641V17.252H82.7321ZM98.7221 27.5C98.6261 27.372 98.5461 27.18 98.4821 26.924C98.4181 26.668 98.3701 26.404 98.3381 26.132H98.2901C98.1301 26.372 97.9461 26.596 97.7381 26.804C97.5461 26.996 97.3061 27.164 97.0181 27.308C96.7461 27.452 96.4181 27.564 96.0341 27.644C95.6501 27.74 95.1941 27.788 94.6661 27.788C93.4021 27.788 92.3701 27.468 91.5701 26.828C90.7701 26.188 90.3701 25.252 90.3701 24.02C90.3701 23.348 90.4981 22.78 90.7541 22.316C91.0101 21.852 91.3621 21.468 91.8101 21.164C92.2581 20.86 92.7781 20.628 93.3701 20.468C93.9781 20.292 94.6261 20.156 95.3141 20.06C96.3381 19.916 97.0901 19.764 97.5701 19.604C98.0501 19.444 98.2901 19.132 98.2901 18.668C98.2901 18.22 98.1141 17.868 97.7621 17.612C97.4261 17.34 96.9141 17.204 96.2261 17.204C95.4581 17.204 94.8821 17.348 94.4981 17.636C94.1141 17.908 93.8981 18.34 93.8501 18.932H90.9461C90.9621 18.388 91.0821 17.876 91.3061 17.396C91.5301 16.9 91.8581 16.468 92.2901 16.1C92.7221 15.732 93.2661 15.436 93.9221 15.212C94.5781 14.988 95.3541 14.876 96.2501 14.876C98.0901 14.876 99.4101 15.276 100.21 16.076C101.026 16.86 101.434 17.972 101.434 19.412V25.676C101.434 26.604 101.578 27.172 101.866 27.38V27.5H98.7221ZM95.4581 25.508C95.9221 25.508 96.3301 25.444 96.6821 25.316C97.0501 25.172 97.3541 24.996 97.5941 24.788C97.8501 24.564 98.0421 24.316 98.1701 24.044C98.2981 23.756 98.3621 23.46 98.3621 23.156V21.308C98.0741 21.484 97.7221 21.628 97.3061 21.74C96.9061 21.836 96.4981 21.932 96.0821 22.028C95.2181 22.22 94.5781 22.444 94.1621 22.7C93.7461 22.956 93.5381 23.372 93.5381 23.948C93.5381 24.524 93.7141 24.932 94.0661 25.172C94.4181 25.396 94.8821 25.508 95.4581 25.508ZM108.501 27.86C106.709 27.86 105.325 27.468 104.349 26.684C103.373 25.884 102.837 24.828 102.741 23.516H105.765C105.877 24.236 106.165 24.756 106.629 25.076C107.109 25.396 107.717 25.556 108.453 25.556C109.173 25.556 109.725 25.428 110.109 25.172C110.509 24.916 110.709 24.572 110.709 24.14C110.709 23.852 110.613 23.62 110.421 23.444C110.245 23.268 110.005 23.124 109.701 23.012C109.413 22.9 109.069 22.812 108.669 22.748C108.285 22.668 107.885 22.588 107.469 22.508C106.909 22.396 106.365 22.268 105.837 22.124C105.325 21.98 104.861 21.772 104.445 21.5C104.045 21.228 103.717 20.876 103.461 20.444C103.221 20.012 103.101 19.46 103.101 18.788C103.101 18.116 103.229 17.54 103.485 17.06C103.741 16.564 104.093 16.156 104.541 15.836C105.005 15.5 105.541 15.252 106.149 15.092C106.757 14.932 107.413 14.852 108.117 14.852C109.749 14.852 111.005 15.22 111.885 15.956C112.765 16.692 113.269 17.684 113.397 18.932H110.445C110.365 18.26 110.125 17.796 109.725 17.54C109.325 17.268 108.773 17.132 108.069 17.132C107.429 17.132 106.917 17.252 106.533 17.492C106.149 17.716 105.957 18.052 105.957 18.5C105.957 18.772 106.053 18.988 106.245 19.148C106.437 19.292 106.685 19.42 106.989 19.532C107.309 19.628 107.669 19.708 108.069 19.772C108.485 19.836 108.909 19.916 109.341 20.012C109.853 20.124 110.365 20.252 110.877 20.396C111.405 20.54 111.877 20.756 112.293 21.044C112.709 21.316 113.045 21.684 113.301 22.148C113.557 22.596 113.685 23.18 113.685 23.9C113.685 24.524 113.557 25.084 113.301 25.58C113.045 26.06 112.685 26.468 112.221 26.804C111.773 27.14 111.229 27.396 110.589 27.572C109.965 27.764 109.269 27.86 108.501 27.86ZM121.059 27.86C120.035 27.86 119.123 27.692 118.323 27.356C117.539 27.02 116.875 26.564 116.331 25.988C115.787 25.396 115.371 24.7 115.083 23.9C114.811 23.1 114.675 22.244 114.675 21.332C114.675 20.42 114.819 19.572 115.107 18.788C115.411 17.988 115.827 17.3 116.355 16.724C116.899 16.148 117.539 15.692 118.275 15.356C119.027 15.02 119.851 14.852 120.747 14.852C121.739 14.852 122.611 15.036 123.363 15.404C124.115 15.756 124.747 16.26 125.259 16.916C125.771 17.572 126.155 18.356 126.411 19.268C126.683 20.164 126.819 21.164 126.819 22.268H117.891C118.019 23.228 118.339 23.98 118.851 24.524C119.379 25.068 120.107 25.34 121.035 25.34C121.675 25.34 122.187 25.204 122.571 24.932C122.955 24.66 123.235 24.292 123.411 23.828H126.627C126.515 24.372 126.307 24.892 126.003 25.388C125.715 25.868 125.331 26.292 124.851 26.66C124.387 27.028 123.835 27.316 123.195 27.524C122.555 27.748 121.843 27.86 121.059 27.86ZM120.795 17.372C119.931 17.372 119.275 17.612 118.827 18.092C118.379 18.556 118.083 19.196 117.939 20.012H123.411C123.363 19.228 123.099 18.596 122.619 18.116C122.155 17.62 121.547 17.372 120.795 17.372Z"
                  fill="#1B1B1B"
                />
              </svg>
            </Link>
          </div>
          <div className="col-span-2 flex items-center">
            <Search />
          </div>
          <div className="flex items-center justify-end">
            <Link
              href="/"
              className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center relative"
            >
              <span className="bg-green-500 text-white text-xs flex items-center justify-center w-5 h-5 absolute -top-2 -right-2 rounded-md normal-nums">
                1
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.833374 0.833425L1.25004 0.833374V0.833374C2.4832 0.833404 3.56694 1.65089 3.90571 2.8366L4.04766 3.33342M4.04766 3.33342L5.34048 7.85831C5.81588 9.52218 6.05357 10.3541 6.53884 10.9716C6.96715 11.5167 7.52976 11.941 8.17149 12.2031C8.89855 12.5001 9.76378 12.5001 11.4942 12.5001H12.5096C13.5593 12.5001 14.0842 12.5001 14.5439 12.3899C15.6412 12.1269 16.5765 11.4126 17.119 10.4231C17.3462 10.0086 17.4843 9.50222 17.7605 8.48948V8.48948C18.097 7.25578 18.2652 6.63893 18.2326 6.13847C18.154 4.93159 17.3584 3.88993 16.2147 3.49655C15.7405 3.33342 15.1011 3.33342 13.8223 3.33342H4.04766ZM10 16.6667C10 17.5872 9.25385 18.3334 8.33337 18.3334C7.4129 18.3334 6.66671 17.5872 6.66671 16.6667C6.66671 15.7462 7.4129 15 8.33337 15C9.25385 15 10 15.7462 10 16.6667ZM16.6667 16.6667C16.6667 17.5872 15.9205 18.3334 15 18.3334C14.0796 18.3334 13.3334 17.5872 13.3334 16.6667C13.3334 15.7462 14.0796 15 15 15C15.9205 15 16.6667 15.7462 16.6667 16.6667Z"
                  stroke="#1B1B1B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
