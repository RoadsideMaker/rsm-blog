import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, SimpleSlug, resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { byDateAndAlphabetical } from "./PageList"
import style from "./styles/recentPosts.scss"
import { Date, getDate } from "./Date"
import { GlobalConfiguration } from "../cfg"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

interface Options {
  title?: string
  limit: number
  linkToMore: SimpleSlug | false
  showTags: boolean
  filter: (f: QuartzPluginData) => boolean
  sort: (f1: QuartzPluginData, f2: QuartzPluginData) => number
}

const defaultOptions = (cfg: GlobalConfiguration): Options => ({
  limit: 3,
  linkToMore: false,
  showTags: true,
  filter: () => true,
  sort: byDateAndAlphabetical(cfg), 
})

export default ((userOpts?: Partial<Options>) => {
  const RecentPosts: QuartzComponent = ({
    allFiles,
    fileData,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    const opts = { ...defaultOptions(cfg), ...userOpts }
    const pages = allFiles.filter(opts.filter).sort(opts.sort)
    const remaining = Math.max(0, pages.length - opts.limit)
    
    return (
      <div class={classNames(displayClass, "recent-notes")}>
        <h3>{opts.title ?? i18n(cfg.locale).components.recentPosts.title}</h3>
        <ul class="recent-ul">
          {pages.slice(0, opts.limit).map((page) => {

            const DEFAULT_COVER_IMAGE = "resources/covers/defaultCoverWide.png"
            const title = page.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title
            const description = page.frontmatter?.description ?? i18n(cfg.locale).propertyDefaults.description
            // const coverImage = page.frontmatter?.coverImage ?? i18n(cfg.locale).propertyDefaults.coverImage
            const coverImage = page.frontmatter?.coverImage || DEFAULT_COVER_IMAGE
            const tags = page.frontmatter?.tags ?? []

            return (
                          
              <li class="recent-li">
                           
              {/* For Post - Cover side by side view */}
              <table class="responsive-table desktop-table">
                  <tr >
                    <td width="60%"> 
                      <div class="section">
                        <div class="desc">
                          <h3>
                            <a href={resolveRelative(fileData.slug!, page.slug!)} class="internal">
                              {title}
                            </a>
                            <br/>
                          </h3>
                          {description}
                          <br/>
                        </div>
                        {page.dates && (
                          <p class="meta">
                            <Date date={getDate(cfg, page)!} locale={cfg.locale} />
                          </p>
                        )}
                        {opts.showTags && (
                          <ul class="tags">
                            {tags.map((tag) => (
                              <li>
                                <a class="internal tag-link"
                                  href={resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)}>
                                  {tag}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </td>
                    <td>
                      <div>
                        <a href={resolveRelative(fileData.slug!, page.slug!)} class="external">
                          <img src={coverImage} style="width: 100%; height: 200px; object-fit: cover; object-position: left;" alt="Read more..."></img>
                        </a>
                      </div>
                    </td>
                  </tr>
                </table>
             
              
{/* For Post - Cover side by side view */}         
            <table class="responsive-table mobile-table">
              <tr>
                <td>
                <div class="section">
                  <div>
                      <a href={resolveRelative(fileData.slug!, page.slug!)} class="external">
                        <img src={coverImage} style="width: 100%; height: 200px; object-fit: cover; object-position: left;" alt="Read more..."></img>
                      </a>
                  </div>
                  <div class="desc">
                    <h3>
                      <a href={resolveRelative(fileData.slug!, page.slug!)} class="internal">
                        {title}
                      </a>
                      <br/>
                    </h3>
                    
                    {description}
                    <br/>
                  </div>
                  {page.dates && (
                    <p class="meta">
                      <Date date={getDate(cfg, page)!} locale={cfg.locale} />
                    </p>
                  )}
                  {opts.showTags && (
                    <ul class="tags">
                      {tags.map((tag) => (
                        <li>
                          <a class="internal tag-link"
                            href={resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)}>
                            {tag}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                </td>
                </tr>
            </table>
            
              </li>
              
            )
          })}
        </ul>
        {opts.linkToMore && remaining > 0 && (
          <p>
            <a href={resolveRelative(fileData.slug!, opts.linkToMore)}>
              {i18n(cfg.locale).components.recentPosts.seeRemainingMore({ remaining })}
            </a>
          </p>
        )}
      </div>
    )
  }

  RecentPosts.css = style
  return RecentPosts
}) satisfies QuartzComponentConstructor
