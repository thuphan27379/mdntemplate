/* 
import useSWR from "swr";
import { DEV_MODE } from "../../env";
import { HydrationData } from "../../../../libs/types/hydration";
import { Icon } from "../../ui/atoms/icon";
import Mandala from "../../ui/molecules/mandala";

import "./index.scss";
const contributorGraphic = `${
  process.env.PUBLIC_URL || ""
}/assets/mdn_contributor.png`;

export function ContributorSpotlight(props: HydrationData<any>) {
  const fallbackData = props.hyData ? props : undefined;

  const { data: { hyData } = {} } = useSWR<any>(
    "./index.json",
    async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`${response.status} on ${url}: ${text}`);
      }
      return await response.json();
    },
    {
      fallbackData,
      revalidateOnFocus: DEV_MODE,
      revalidateOnMount: !fallbackData,
    }
  );

  return (
    <div className="contributor-spotlight dark">
      <div className="wrapper">
        <div className="text-col">
          <h3>Contributor Spotlight</h3>
          {hyData && hyData?.featuredContributor && (
            <>
              <a
                className="contributor-name"
                href={hyData?.featuredContributor?.url}
              >
                {hyData?.featuredContributor?.contributorName}
              </a>
              <blockquote>
                <Icon name="quote"></Icon>
                {hyData?.featuredContributor?.quote}
              </blockquote>
            </>
          )}
          <a href="/en-US/community" className="spotlight-cta">
            Get involved ?
          </a>
        </div>
        <figure className="contributor-graphic">
          <img
            width="523"
            height="323"
            src={contributorGraphic}
            alt="Tiled Mozilla Logo"
          />
        </figure>
      </div>
      <Mandala />
    </div>
  );
}

*/

/* 
import useSWR from "swr";
import { DEV_MODE } from "../../env";
import { HydrationData } from "../../../../libs/types/hydration";

import "./index.scss";

export default function FeaturedArticles(props: HydrationData<any>) {
  const fallbackData = props.hyData ? props : undefined;
  const { data: { hyData } = {} } = useSWR<any>(
    "./index.json",
    async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`${response.status} on ${url}: ${text}`);
      }
      return await response.json();
    },
    {
      fallbackData,
      revalidateOnFocus: DEV_MODE,
      revalidateOnMount: !fallbackData,
    }
  );

  return hyData?.featuredArticles.length ? (
    <div className="featured-articles">
      <h2>Featured articles</h2>
      <div className="tile-container">
        {hyData.featuredArticles.map((article) => {
          return (
            <div className="article-tile" key={article.mdn_url}>
              {article.tag && (
                <a href={article.tag.uri} className="tile-tag">
                  {article.tag.title}
                </a>
              )}
              <h3 className="tile-title">
                <a href={article.mdn_url}>{article.title}</a>
              </h3>
              <p>{article.summary}</p>
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
}

*/

/* import "./index.scss";
import { Search } from "../../ui/molecules/search";
import Mandala from "../../ui/molecules/mandala";

export function HomepageHero() {
  return (
    <div className="homepage-hero dark">
      <section>
        <h1>
          Resources for <u>Developers</u>,
          <br /> by Developers
        </h1>
        <p>
          Documenting web technologies, including CSS, HTML, and JavaScript,
          since 2005.
        </p>
        <Search id="hp-search" isHomepageSearch={true} />
      </section>
      <Mandala extraClasses="homepage-hero-bg" />
    </div>
  );
}
 */

/* import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import useSWR from "swr";
import { DEV_MODE } from "../../env";
import { HydrationData } from "../../../../libs/types/hydration";
import { NewsItem } from "../../../../libs/types/document";

import "./index.scss";

dayjs.extend(relativeTime);

export function LatestNews(props: HydrationData<any>) {
  const fallbackData = props.hyData ? props : undefined;

  const { data: { hyData } = {} } = useSWR<any>(
    "./index.json",
    async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`${response.status} on ${url}: ${text}`);
      }
      return await response.json();
    },
    {
      fallbackData,
      revalidateOnFocus: DEV_MODE,
      revalidateOnMount: !fallbackData,
    }
  );

  const newsItems: NewsItem[] = hyData?.latestNews?.items.slice(0, 3) ?? [];

  if (!newsItems.length) {
    return null;
  }

  function NewsItemTitle({ newsItem }: { newsItem: NewsItem }) {
    const ageInDays = dayjs().diff(newsItem.published_at, "day");
    const isNew = ageInDays < 7;

    return (
      <>
        <a href={newsItem.url}>{newsItem.title}</a>
        {isNew && (
          <>
            {" "}
            <span className="badge">New</span>
          </>
        )}
      </>
    );
  }

  function NewsItemSource({ newsItem }: { newsItem: NewsItem }) {
    const { source } = newsItem;

    return (
      <a className="news-source" href={source.url}>
        {source.name}
      </a>
    );
  }

  function NewsItemDate({ newsItem }: { newsItem: NewsItem }) {
    const relativeTime = dayjs(newsItem.published_at).fromNow();

    return <>{relativeTime}</>;
  }

  return (
    <section className="latest-news">
      <h2>Latest news</h2>
      <ul className="news-list">
        {newsItems.map((newsItem) => (
          <li className="news-item" key={newsItem.url}>
            <p className="news-title">
              <span>
                <NewsItemTitle newsItem={newsItem} />
              </span>
              <span>
                <NewsItemSource newsItem={newsItem} />
              </span>
            </p>
            <span className="news-date" suppressHydrationWarning>
              <NewsItemDate newsItem={newsItem} />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
 */

/* import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import useSWR from "swr";
import { DEV_MODE } from "../../env";
import { HydrationData } from "../../../../libs/types/hydration";

import "./index.scss";

dayjs.extend(relativeTime);

function RecentContributions(props: HydrationData<any>) {
  const fallbackData = props.hyData ? props : undefined;

  const { data: { hyData } = {} } = useSWR<any>(
    "./index.json",
    async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`${response.status} on ${url}: ${text}`);
      }
      return await response.json();
    },
    {
      fallbackData,
      revalidateOnFocus: DEV_MODE,
      revalidateOnMount: !fallbackData,
    }
  );

  return hyData?.recentContributions ? (
    <section className="recent-contributions">
      <h2>Recent contributions</h2>
      <ul className="contribution-list">
        {hyData.recentContributions.items.map(
          ({ number, url, title, updated_at, repo }) => (
            <li className="request-item" key={number}>
              <p className="request-title">
                <a href={url}>{title}</a>
                <span>
                  <a className="request-repo" href={repo.url}>
                    {repo.name}
                  </a>
                </span>
              </p>
              <span className="request-date" suppressHydrationWarning>
                {dayjs(updated_at).fromNow()}
              </span>
            </li>
          )
        )}
      </ul>
    </section>
  ) : null;
}

export default RecentContributions;
 */

/* import React, { ReactElement } from "react";
import useSWR from "swr";
import { DEV_MODE } from "../../env";
import { SidebarContainer } from "../../document/organisms/sidebar";
import { TOC } from "../../document/organisms/toc";
import { Toc } from "../../../../libs/types/document";
import { PageNotFound } from "../../page-not-found";
import { Loading } from "../../ui/atoms/loading";

interface StaticPageDoc {
  id: string;
  title: string;
  sections: string[];
  toc: Toc[];
}

interface StaticPageProps {
  extraClasses?: string;
  locale: string;
  slug: string;
  fallbackData?: any;
  title?: string;
  sidebarHeader?: ReactElement;
}

function StaticPage({
  extraClasses = "",
  locale,
  slug,
  fallbackData = undefined,
  title = "MDN",
  sidebarHeader = <></>,
}: StaticPageProps) {
  const baseURL = `/${locale}/${slug}`;
  const featureJSONUrl = `${baseURL}/index.json`;
  const { data: { hyData } = {}, error } = useSWR<{ hyData: StaticPageDoc }>(
    featureJSONUrl,
    async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`${response.status} on ${url}: ${text}`);
      }
      return await response.json();
    },
    {
      fallbackData,
      revalidateOnFocus: DEV_MODE,
      revalidateOnMount: !fallbackData,
    }
  );

  React.useEffect(() => {
    document.title = hyData ? `${hyData.title} | ${title}` : title;
  }, [hyData, title]);

  if (error) {
    return <PageNotFound />;
  } else if (!hyData) {
    return <Loading />;
  }

  const toc = hyData.toc?.length && <TOC toc={hyData.toc} />;

  return (
    <>
      <div className="main-wrapper">
        <SidebarContainer doc={hyData}>
          {sidebarHeader || null}
        </SidebarContainer>
        <aside className="toc">
          <nav>{toc || null}</nav>
        </aside>
        <main id="content" className="main-content" role="main">
          <article className={`main-page-content ${extraClasses || ""}`}>
            {hyData.sections.map((section, index) => (
              <section
                key={index}
                dangerouslySetInnerHTML={{ __html: section }}
              ></section>
            ))}
          </article>
        </main>
      </div>
    </>
  );
}

export default StaticPage;
 */

/* import "./index.scss";
import { HomepageHero } from "./homepage-hero";
import FeaturedArticles from "./featured-articles";
import { LatestNews } from "./latest-news";
import RecentContributions from "./recent-contributions";
import { ContributorSpotlight } from "./contributor-spotlight";
import { HpFooterPlacement, HpMainPlacement } from "../ui/organisms/placement";

export function Homepage(props) {
  return (
    <main id="content" role="main">
      <div className="homepage mdn-ui-body-m">
        <HomepageHero />
        <HpMainPlacement />
        <FeaturedArticles {...props} />
        <LatestNews {...props} />
        <RecentContributions {...props} />
        <ContributorSpotlight {...props} />
        <HpFooterPlacement />
      </div>
    </main>
  );
}
*/
