import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { joinSegments } from "../util/path"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const iconPath = joinSegments(baseDir, "static/logo.jpg")
  return (
    <div>
      <img src={iconPath} onerror="this.style.display='none'" width="225px" ></img>
    </div>
    // <table>
    //     <tr>
    //       <td>
    //         <h2 class={classNames(displayClass, "page-title")}>
    //           {/* {title} */}
        
    //           {/* <a href={baseDir}>{title}</a> */}
    //         </h2>
    //       </td>
  
    //     <td valign="bottom">
    //        <img src={iconPath} onerror="this.style.display='none'" width="300px" ></img>
    //     </td>
    //   </tr>
    // </table>
     
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0 ;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
