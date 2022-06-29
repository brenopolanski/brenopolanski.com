import 'photoswipe/dist/photoswipe.css'

import Image from 'next/image'
import NextLink from 'next/link'
import { Gallery, Item } from 'react-photoswipe-gallery'

import { Content } from './Content'
import { Heading } from './Heading'
import { Link } from './Link'

interface IPortfolioItemProps {
  project: Record<string, any>
  showMore?: boolean
}

export const PortfolioItem = ({ project, showMore = false }: IPortfolioItemProps) => {
  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <Link className="text-xl font-semibold" href={`/portfolio/${project.id}`}>
          {project.title}
        </Link>

        <Content>{project.description}</Content>

        {!showMore ? (
          <NextLink href={`/portfolio/${project.id}`}>
            <a>
              <Image
                alt={project.title}
                className="w-full h-full bg-black rounded cursor-pointer hover:opacity-80"
                height={project.imageSize.height}
                src={`/static/images/portfolio/${project.id}/${project.preview}`}
                width={project.imageSize.width}
              />
            </a>
          </NextLink>
        ) : (
          <Image
            alt={project.title}
            className="w-full h-full bg-black rounded"
            height={project.imageSize.height}
            src={`/static/images/portfolio/${project.id}/${project.preview}`}
            width={project.imageSize.width}
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
                      <Link className="text-lg" href={link} isExternal>
                        {name}
                      </Link>
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
                          <Link className="text-lg" href={link} isExternal>
                            {name}
                          </Link>
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
                        height={project.imageSize.height}
                        original={`/static/images/portfolio/${project.id}/${image}`}
                        thumbnail={`/static/images/portfolio/${project.id}/${image}`}
                        width={project.imageSize.width}
                      >
                        {({ ref, open }) => (
                          <img
                            ref={ref as React.MutableRefObject<HTMLImageElement>}
                            alt={project.title}
                            className="bg-black rounded cursor-pointer hover:opacity-80"
                            src={`/static/images/portfolio/${project.id}/${image}`}
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
