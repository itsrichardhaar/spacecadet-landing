import Head from "next/head";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spacecadet | Ready. Set. Launch.</title>
        <meta
          name="description"
          content="Your mission control for the modern web."
        />
      </Head>

      <section className={styles.home}>
        {/* Inline SVG Logo */}
        <div className={styles.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 311.99 291.88"
            width="340"
            height="340"
          >
            <defs>
              <style>
                {`.cls-1,.cls-2{fill:#051739;}
                  .cls-3{fill:#f0e02a;}
                  .cls-2{
                    font-family:"magistral", system-ui, -apple-system, sans-serif;
                    font-size:43.17px;
                    font-weight:700;
                  }
                  .cls-4{stroke:#051739;stroke-miterlimit:10;stroke-width:.85px;}
                  .cls-4,.cls-5{fill:#94a3b8;}
                  .cls-5{
                    font-family:"proxima-nova", system-ui, -apple-system, sans-serif;
                    font-size:21.59px;
                    font-weight:500;
                  }
                  .cls-6{letter-spacing:-.06em;}
                  .cls-7{letter-spacing:-.06em;}
                  .cls-8{letter-spacing:-.03em;}
                  .cls-9{letter-spacing:-.01em;}
                  .cls-10{letter-spacing:.02em;}
                  .cls-11{letter-spacing:0em;}`}
              </style>
            </defs>

            <text className="cls-2" transform="translate(0 252.94)">
              <tspan x="0" y="0">S</tspan>
              <tspan className="cls-7" x="29.79" y="0">P</tspan>
              <tspan x="59.66" y="0">ACE</tspan>
              <tspan className="cls-10" x="150.19" y="0">C</tspan>
              <tspan x="179.46" y="0">AD</tspan>
              <tspan className="cls-11" x="245.12" y="0">E</tspan>
              <tspan x="274.95" y="0">T</tspan>
            </text>

            <text className="cls-5" transform="translate(60.25 284.54)">
              <tspan className="cls-8" x="0" y="0">R</tspan>
              <tspan x="12.69" y="0">ead</tspan>
              <tspan className="cls-6" x="48.74" y="0">y</tspan>
              <tspan x="58.26" y="0">. Set. </tspan>
              <tspan className="cls-9" x="111.1" y="0">L</tspan>
              <tspan x="121.91" y="0">aunch.</tspan>
            </text>

            <path
              className="cls-4"
              d="M294.49,1.63c-.14,4.13-2.56,7.78-5.94,10.69l-13.96,12.09c-.03,1.37-.75,2.83-2.01,3.93l-.38.34-8.67-10,.38-.34c1.3-1.09,2.83-1.6,4.2-1.43l13.96-12.09c3.35-2.9,7.31-4.78,11.44-4.3.61.03,1.02.51.99,1.13Z"
            />

            <polygon
              className="cls-3"
              points="230.96 54.18 258.09 30.71 227.08 49.31 230.96 54.18"
            />

            <polygon
              className="cls-1"
              points="227.07 49.31 230.95 54.18 203.61 77.83 84.55 180.79 84.53 144.57 84.53 144.56 84.52 134.8 112.76 117.86 195.44 68.28 227.07 49.31"
            />

            <path
              className="cls-1"
              d="M210.59,93.98c-1.1-4.73-2.85-9.15-5.21-13.26l5.21,13.26Z"
            />

            <path
              className="cls-1"
              d="M210.59,93.98c1.09,4.5,1.53,9.27,1.27,14.13-1.4,27.29-24.24,48.33-51.32,47.76-.52,0-1.04,0-1.57-.04-2.45-.09-4.86-.48-7.22-.92l-23.79,30.18c2.23.97,4.55,1.8,6.91,2.58,7.04,2.28,14.52,3.72,22.26,4.12,47.64,2.45,88.23-34.21,90.64-81.8,1.07-20.81-5.31-40.28-16.82-55.81-1.23-1.67-2.53-3.29-3.88-4.87-14.86-17.31-36.51-28.74-61.1-30-47.64-2.45-88.19,34.2-90.64,81.8-.79,15.61,2.61,30.46,9.2,43.46,1.43,2.84,3.03,5.59,4.76,8.24l24.58-31.19c-.42-1.24-.79-2.49-1.11-3.76-1.21-4.75-1.75-9.72-1.51-14.87,1.44-27.82,25.11-49.17,52.88-47.73,12.11.62,23,5.45,31.31,13.02,3.11,2.82,5.86,6.03,8.17,9.55.62.94,1.21,1.9,1.77,2.89l5.21,13.26Z"
            />
          </svg>
        </div>

        <h1>Welcome to Spacecadet.io</h1>
        <p>Your mission control for the modern web.</p>
      </section>
    </>
  );
}






