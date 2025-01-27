import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <ul style="display: flex; 
           flex-direction: row; 
           flex-wrap: wrap;
           align-items: center; 
           justify-content: center; 
           list-style: none; 
           padding: 0; 
           margin: 0;
           gap: 20px;">

          {/* YouTube */}
          <a  href="https://www.youtube.com/@RoadSideMaker" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
          </a>
          {/* X */}
          <a class="links-header-item" href="https://x.com/RoadSideMaker" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-twitter"> <path d="M8,2H3L16.7,22h5.1L8,2z"/> <line x1="2.3" y1="22.1" x2="10.2" y2="12.8"/> <line x1="19.8" y1="2" x2="13.3" y2="9.6"/> </svg>
          </a>  
          {/* Printables */}
          <a class="links-header-item" href="https://www.printables.com/@RoadSideMakr_2767978" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="36" viewBox="0 0 160 35" fill="currentcolor" stroke="none" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-twitter">
            <path d="m0 35 12.172-7L0 21ZM12.172 0 0 7l12.172 7v14l12.172-7V7Z"></path>
            <g class="printables-text svelte-9g56ef"><path d="M33.919 25.752V6.998h8.921a6.735 6.735 0 0 1 3.359.83 5.724 5.724 0 0 1 2.269 2.359 7.517 7.517 0 0 1 .806 3.561 7.617 7.617 0 0 1-.806 3.58 5.709 5.709 0 0 1-2.269 2.37 6.735 6.735 0 0 1-3.359.83h-3.949v5.21Zm8.585-10a1.686 1.686 0 0 0 1.288-.547 2.321 2.321 0 0 0 0-2.906 1.663 1.663 0 0 0-1.288-.566h-3.628v4.019ZM50.6 25.752V11.819h4.084l.269.99h.134a2.344 2.344 0 0 1 .956-.7 3.518 3.518 0 0 1 1.463-.294h2.527v4.313h-2.419q-2.37 0-2.37 2.475v7.145ZM65.825 9.943h-4.759V6.192h4.759Zm-.059 15.809h-4.647V11.819h4.647ZM68.113 25.752V11.819h4.084l.269 1.072h.134a4.044 4.044 0 0 1 1.426-.923 5.647 5.647 0 0 1 2.258-.43 5.5 5.5 0 0 1 2.8.7 4.881 4.881 0 0 1 1.892 1.984 6.255 6.255 0 0 1 .687 3v8.537h-4.651v-7.521a2.2 2.2 0 0 0-.579-1.582 2.124 2.124 0 0 0-3.665 1.582v7.517ZM89.319 25.748a4.633 4.633 0 0 1-3.307-1.072 4.01 4.01 0 0 1-1.12-3.081v-5.463h-2.15v-4.313h2.15V7.558h4.647v4.261h3.091v4.313h-3.091v4.447a.79.79 0 0 0 .941.938h2.15v4.231ZM96.344 25.458a4.173 4.173 0 0 1-1.758-1.53 3.991 3.991 0 0 1-.6-2.17 4.088 4.088 0 0 1 1.452-3.282 6.286 6.286 0 0 1 4.192-1.247h2.93v-.238a1.691 1.691 0 0 0-.511-1.273 1.944 1.944 0 0 0-3.012.521h-4.479a4.829 4.829 0 0 1 .9-2.33 5.349 5.349 0 0 1 2.139-1.716 7.451 7.451 0 0 1 3.185-.655 7.7 7.7 0 0 1 3.412.744 5.322 5.322 0 0 1 2.24 1.943 5.079 5.079 0 0 1 .78 2.787v8.742h-4.108l-.269-1.072h-.131a3.733 3.733 0 0 1-1.411.923 5.614 5.614 0 0 1-2.217.417 6.137 6.137 0 0 1-2.734-.564Zm5.6-3.524a2.043 2.043 0 0 0 .62-1.567v-.242h-2.18a2.159 2.159 0 0 0-1.288.32 1.022 1.022 0 0 0-.429.86 1.059 1.059 0 0 0 .4.882 1.848 1.848 0 0 0 1.18.324 2.4 2.4 0 0 0 1.687-.577ZM115.291 25.603a3.732 3.732 0 0 1-1.445-1h-.134l-.269 1.154h-4.076V6.996h4.651v5.735h.134a3.4 3.4 0 0 1 1.329-.819 5.674 5.674 0 0 1 2.083-.372 5.96 5.96 0 0 1 3.21.912 6.538 6.538 0 0 1 2.34 2.557 8.524 8.524 0 0 1 0 7.517 6.5 6.5 0 0 1-2.34 2.572 5.96 5.96 0 0 1-3.21.912 5.659 5.659 0 0 1-2.273-.406Zm3.266-4.674a3.385 3.385 0 0 0 0-4.287 2.652 2.652 0 0 0-3.8 0 3.451 3.451 0 0 0 0 4.287 2.652 2.652 0 0 0 3.8 0ZM130.221 25.752h-4.647V6.996h4.647ZM135.391 25.068a6.869 6.869 0 0 1-2.646-2.6 7.58 7.58 0 0 1 0-7.368 6.869 6.869 0 0 1 2.646-2.6 7.516 7.516 0 0 1 3.762-.962 7.382 7.382 0 0 1 3.68.923 6.675 6.675 0 0 1 2.568 2.56 7.332 7.332 0 0 1 .918 3.684 6.265 6.265 0 0 1-.134 1.34h-9.828a2.6 2.6 0 0 0 .914 1.649 2.745 2.745 0 0 0 1.866.685 3.218 3.218 0 0 0 1.385-.283 2.808 2.808 0 0 0 .9-.6h4.524a6.333 6.333 0 0 1-3.464 3.859 7.765 7.765 0 0 1-3.333.67 7.517 7.517 0 0 1-3.759-.953Zm6.394-7.577a2.751 2.751 0 0 0-.858-1.7 2.5 2.5 0 0 0-1.773-.685 2.7 2.7 0 0 0-1.866.685 2.822 2.822 0 0 0-.929 1.7ZM149.974 25.376a5.151 5.151 0 0 1-2.161-1.794 3.981 3.981 0 0 1-.687-2.17h4.54a1.078 1.078 0 0 0 .481.915 2.447 2.447 0 0 0 1.463.35 2.62 2.62 0 0 0 1.37-.283.819.819 0 0 0 .459-.707.892.892 0 0 0-.295-.711 2.1 2.1 0 0 0-1.049-.372l-1.963-.3a6.876 6.876 0 0 1-3.669-1.489 3.638 3.638 0 0 1-1.221-2.817 3.914 3.914 0 0 1 .713-2.289 4.754 4.754 0 0 1 2.12-1.637 8.638 8.638 0 0 1 3.4-.6 8.125 8.125 0 0 1 3.453.67 5.167 5.167 0 0 1 2.165 1.742 3.907 3.907 0 0 1 .724 2.233h-4.513a1.026 1.026 0 0 0-.47-.871 2.331 2.331 0 0 0-1.359-.335 2.17 2.17 0 0 0-1.236.294.841.841 0 0 0-.429.7c0 .484.437.789 1.318.912l2.016.294q4.852.744 4.852 4.5a3.892 3.892 0 0 1-.713 2.263 4.768 4.768 0 0 1-2.15 1.637 9.08 9.08 0 0 1-3.509.6 8.147 8.147 0 0 1-3.654-.733Z"></path></g></svg> 
          </a>
          {/* GitHUB */}
          <a class="links-header-item" href="https://github.com/RoadsideMaker" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          {/* MAIL */}
          <a class="links-header-item" href="mailto:roadsidemaker@gmail.com" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
          {/* Top */}
          <a href="javascript:void(0);" onclick="window.scrollTo(0, 0);">↑ Back to top</a>

        </ul>
        <br/>

        <ul style="display: flex; 
           flex-direction: row; 
           flex-wrap: wrap;
           align-items: center; 
           justify-content: center; 
           list-style: none; 
           padding: 0; 
           margin: 0;
           gap: 20px;">
        
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
          {Object.entries(links).map(([text, link]) => (
              <a href={link}>{text}</a>
          ))}

        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor

{/* <p>
        <a class="links-header-item" href="about">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
        </a>
        <a class="links-header-item" href="about">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
        </a>
        </p> */}