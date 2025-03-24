import { useId } from 'react'

const DolarHojeLogo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg height="86.44" viewBox="0 0 22.881 22.871" width="86.48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g transform="translate(-149.577 -143.535)">
        <rect
          height="22.871"
          rx="4.613"
          ry="5.296"
          style={{
            fill: '#666666',
            fillOpacity: 1,
            paintOrder: 'stroke fill markers',
            stroke: 'none',
            strokeDasharray: 'none',
            strokeMiterlimit: 4,
            strokeOpacity: 1,
            strokeWidth: 0.4,
          }}
          width="22.881"
          x="149.577"
          y="143.535"
        />
        <path
          className="cls-2"
          d="M161.626 150.972a4.84 4.84 0 0 1 3.108 1.144.477.477 0 0 0 .654-.013l.887-.9a.46.46 0 0 0-.023-.675 7.11 7.11 0 0 0-2.39-1.34l.281-1.325a.467.467 0 0 0-.458-.56h-1.731a.47.47 0 0 0-.46.369l-.251 1.178c-2.307.113-4.258 1.252-4.258 3.587 0 2.02 1.612 2.886 3.317 3.486 1.613.6 2.464.821 2.464 1.666 0 .844-.851 1.376-2.105 1.376a4.636 4.636 0 0 1-3.275-1.282.47.47 0 0 0-.657 0l-.963.94a.465.465 0 0 0 0 .669 6.387 6.387 0 0 0 2.785 1.538l-.259 1.233a.479.479 0 0 0 .456.575h1.744a.468.468 0 0 0 .463-.37l.25-1.18c2.755-.178 4.435-1.653 4.435-3.826 0-1.997-1.681-2.838-3.725-3.53-1.166-.422-2.173-.71-2.173-1.577 0-.868.942-1.183 1.884-1.183z"
          style={{ fill: '#ffffff', strokeWidth: '.177403' }}
        />
      </g>
    </svg>
  )
}

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

export { DolarHojeLogo, PhootoAiLogo }
