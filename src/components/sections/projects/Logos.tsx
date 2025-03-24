import { useId } from 'react'

const DolarHojeLogo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="22.870583mm"
      id="svg1651"
      version="1.1"
      viewBox="0 0 22.881168 22.870582"
      width="22.881168mm"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs id="defs1645" />
      <g id="layer1" transform="translate(-149.57727,-143.53494)">
        <rect
          height="22.870583"
          id="rect1364-6-1-2"
          rx={4.612958}
          ry={5.2955542}
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
          width="22.881168"
          x="149.57727"
          y="143.53494"
        />
        <path
          className="cls-2"
          d="m 161.62574,150.97152 a 4.8395722,4.8395722 0 0 1 3.10811,1.14426 0.47721588,0.47721588 0 0 0 0.65462,-0.0124 l 0.88702,-0.90121 a 0.4594755,0.4594755 0 0 0 -0.0231,-0.67414 7.1103392,7.1103392 0 0 0 -2.38962,-1.33939 l 0.28029,-1.3252 a 0.46657166,0.46657166 0 0 0 -0.4577,-0.5606 h -1.73146 a 0.47011973,0.47011973 0 0 0 -0.45948,0.36899 l -0.25191,1.17797 c -2.30625,0.11354 -4.25769,1.25247 -4.25769,3.5871 0,2.02062 1.6126,2.88636 3.31744,3.48598 1.61261,0.59963 2.46415,0.82138 2.46415,1.66583 0,0.84444 -0.85154,1.37665 -2.10578,1.37665 a 4.6355579,4.6355579 0 0 1 -3.27488,-1.28263 0.47011973,0.47011973 0 0 0 -0.65639,0 l -0.9633,0.94024 a 0.46479762,0.46479762 0 0 0 0,0.66881 6.3865322,6.3865322 0 0 0 2.78524,1.53809 l -0.25901,1.23295 a 0.47898992,0.47898992 0 0 0 0.45592,0.57479 h 1.74389 a 0.46834569,0.46834569 0 0 0 0.46302,-0.369 l 0.25013,-1.1815 c 2.75509,-0.17741 4.4351,-1.65164 4.4351,-3.82483 0,-1.99757 -1.68179,-2.83846 -3.72548,-3.53033 -1.16554,-0.42222 -2.1732,-0.70962 -2.1732,-1.57712 0,-0.8675 0.94202,-1.18329 1.88404,-1.18329 z"
          id="path1300-5-2-2-3"
          style={{
            fill: '#ffffff',
            strokeWidth: 0.177403,
          }}
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
