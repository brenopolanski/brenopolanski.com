import { useId } from 'react'

const PhootoAiLogo = (props: React.SVGProps<SVGSVGElement>) => {
  const id = useId()

  return (
    <svg fill="none" height="400" viewBox="0 0 200 200" width="400" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath={`url(#cs_clip_1_ellipse-12_${id})`}>
        <mask
          height="200"
          id={`cs_mask_1_ellipse-12_${id}`}
          maskUnits="userSpaceOnUse"
          style={{ maskType: 'alpha' }}
          width="200"
          x="0"
          y="0"
        >
          <path
            d="M100 150c27.614 0 50-22.386 50-50s-22.386-50-50-50-50 22.386-50 50 22.386 50 50 50zm0 50c55.228 0 100-44.772 100-100S155.228 0 100 0 0 44.772 0 100s44.772 100 100 100z"
            fill="#fff"
            fillRule="evenodd"
          />
        </mask>
        <g mask={`url(#cs_mask_1_ellipse-12_${id})`}>
          <path d="M200 0H0v200h200V0z" fill="#fff" />
          <path d="M200 0H0v200h200V0z" fill="#E5E5E5" fillOpacity="0.33" />
          <g filter={`url(#filter0_f_844_2811_${id})`}>
            <path d="M110 32H18v68h92V32z" fill="#D1D1D1" />
            <path d="M188-24H15v98h173v-98z" fill="#A3A3A3" />
            <path d="M175 70H5v156h170V70z" fill="#666666" />
            <path d="M230 51H100v103h130V51z" fill="#404040" />
          </g>
        </g>
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="410"
          id={`filter0_f_844_2811_${id}`}
          width="385"
          x="-75"
          y="-104"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur_844_2811" stdDeviation="40" />
        </filter>
        <clipPath id={`cs_clip_1_ellipse-12_${id}`}>
          <path d="M0 0H200V200H0z" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  )
}

export { PhootoAiLogo }
