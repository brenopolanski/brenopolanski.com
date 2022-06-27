import 'photoswipe/dist/photoswipe.css'

import Image from 'next/image'
import Link from 'next/link'
import { Gallery, Item } from 'react-photoswipe-gallery'

import { Content } from './Content'
import { ExternalLink } from './ExternalLink'
import { Heading } from './Heading'
import { RouterLink } from './RouterLink'

interface IPortfolioItemProps {
  project: Record<string, any>
  showMore?: boolean
}

export const PortfolioItem = ({ project, showMore = false }: IPortfolioItemProps) => {
  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <RouterLink className="text-xl font-semibold" href={`/portfolio/${project.id}`}>
          {project.title}
        </RouterLink>

        <Content>{project.description}</Content>

        {!showMore ? (
          <Link href={`/portfolio/${project.id}`}>
            <a>
              <Image
                className="w-full h-full bg-black rounded cursor-pointer hover:opacity-80"
                src={`/static/images/portfolio/${project.id}/${project.preview}`}
                width={project.imageSize.width}
                height={project.imageSize.height}
                alt={project.title}
              />
            </a>
          </Link>
        ) : (
          <Image
            className="w-full h-full bg-black rounded"
            src={`/static/images/portfolio/${project.id}/${project.preview}`}
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
                        original={`/static/images/portfolio/${project.id}/${image}`}
                        thumbnail={`/static/images/portfolio/${project.id}/${image}`}
                        width={project.imageSize.width}
                        height={project.imageSize.height}
                      >
                        {({ ref, open }) => (
                          <img
                            ref={ref as React.MutableRefObject<HTMLImageElement>}
                            className="bg-black rounded cursor-pointer hover:opacity-80"
                            src={`/static/images/portfolio/${project.id}/${image}`}
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
