import 'photoswipe/dist/photoswipe.css'

import { Content, ExternalLink, Heading, RouterLink } from 'components'
import Image from 'next/image'
import Link from 'next/link'
import { Gallery, Item } from 'react-photoswipe-gallery'

interface IPortfolioItemProps {
  project: Record<string, any>
  showMore?: boolean
}

export const PortfolioItem = ({ project, showMore = false }: IPortfolioItemProps) => {
  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <RouterLink className="text-xl font-semibold" href={`/portfolio/${project.slug}`}>
          {project.title}
        </RouterLink>

        <Content>{project.description}</Content>

        {!showMore ? (
          <Link href={`/portfolio/${project.slug}`}>
            <a>
              <Image
                className="w-full h-full bg-black rounded cursor-pointer hover:opacity-80"
                src={`/images/portfolio/${project.slug}/${project.preview}`}
                width={project.imageSize.width}
                height={project.imageSize.height}
                alt={project.title}
              />
            </a>
          </Link>
        ) : (
          <Image
            className="w-full h-full bg-black rounded"
            src={`/images/portfolio/${project.slug}/${project.preview}`}
            width={project.imageSize.width}
            height={project.imageSize.height}
            alt={project.title}
          />
        )}

        {showMore && (
          <div>
            {project.more.content && <Content className="text-justify">{project.more.content}</Content>}

            {project.more.links.length > 0 && (
              <div className="pb-4">
                <ul className="ml-4 space-y-2 list-disc">
                  {project.more.links.map(({ name, link }: Record<string, string>, index: number) => (
                    <li key={index}>
                      <ExternalLink className="text-lg" href={link}>
                        {name}
                      </ExternalLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.more.technologies.length > 0 && (
              <div>
                <Heading title="Technologies" />
                <div className="pb-4">
                  <ul className="ml-4 space-y-2 list-disc">
                    {project.more.technologies.map(({ name, link }: Record<string, string>, index: number) => (
                      <li key={index}>
                        {link ? (
                          <ExternalLink className="text-lg" href={link}>
                            {name}
                          </ExternalLink>
                        ) : (
                          name
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {project.more.screenshots.length > 0 && (
              <div>
                <Heading title="Screenshots" />
                <Gallery>
                  <div className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2">
                    {project.more.screenshots.map((image: string, index: number) => (
                      <Item
                        key={index}
                        original={`/images/portfolio/${project.slug}/${image}`}
                        thumbnail={`/images/portfolio/${project.slug}/${image}`}
                        width={project.imageSize.width}
                        height={project.imageSize.height}
                      >
                        {({ ref, open }) => (
                          <img
                            ref={ref as React.MutableRefObject<HTMLImageElement>}
                            className="bg-black rounded cursor-pointer hover:opacity-80"
                            src={`/images/portfolio/${project.slug}/${image}`}
                            alt={project.title}
                            onClick={open}
                          />
                        )}
                      </Item>
                    ))}
                  </div>
                </Gallery>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
