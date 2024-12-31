import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.LinksHeader()
  ],
  afterBody: [
    Component.OnlyFor(
      { titles: ["RoadSide Maker Blog"] },
      Component.RecentPosts({ title: "Recent posts" , limit: 5, filter: (f) => f.slug!.startsWith("") && f.slug! !== "index" && f.frontmatter?.post}),
    ), 
    
  ],

  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
  
    Component.PageTitle(),
    Component.Darkmode(),
    Component.Search(),

    Component.MobileOnly(Component.Spacer()),


    Component.DesktopOnly(Component.Explorer({
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        return !node.name.startsWith("resources")
      },
    }

    )),
  ],
  right: [
 
    
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.Search(),
    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(Component.Explorer({
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        return !node.name.startsWith("resources")
      },
    }

    )),
  ],
  right: [Component.Darkmode(),],
}
