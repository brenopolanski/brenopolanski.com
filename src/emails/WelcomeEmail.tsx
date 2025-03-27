/* eslint-disable react/no-unescaped-entities */
import { Body, Container, Head, Html, Img, Link, Row, Section, Tailwind, Text } from '@react-email/components'

import { siteConfig } from '@/config/site'

export const WelcomeEmail = () => {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                background: '#09090B',
                foreground: '#FAFAFA',
              },
              spacing: {
                20: '20px',
                45: '45px',
              },
            },
          },
        }}
      >
        <Body className="bg-background font-mono text-base">
          <Container className="mx-auto my-20">
            <Img
              alt={`${siteConfig.name} profile`}
              className="mx-auto mt-12 rounded-lg"
              height="80"
              src={`${siteConfig.url}/breno-pfp.png`}
              width="80"
            />
          </Container>

          <Container className="mb-45 bg-background p-45 text-foreground">
            <Section>
              <Row>
                <Text className="text-base">Hey there! 👋</Text>

                <Text className="text-base">
                  Thanks for subscribing to my newsletter! I'm excited to have you join this journey where I share my
                  thoughts, experiences, and learnings about web development and technology.
                </Text>

                <Text className="text-base">Here's what you can expect from me:</Text>
              </Row>
            </Section>

            <ul className="list-none pl-0">
              {[
                '🚀 Web development tips and best practices',
                '💡 Tech insights and industry trends',
                '📝 Early access to new articles and content',
                '🛠 Project updates and behind-the-scenes',
                '💪 Career growth and personal development',
              ].map((item) => (
                <li key={item} className="mb-20 text-base">
                  {item}
                </li>
              ))}
            </ul>

            <Section className="mt-45">
              <Row>
                <Text className="text-base">Feel free to connect with me on social media:</Text>
              </Row>
            </Section>

            <ul className="list-none pl-0">
              {[
                { name: 'Twitter', url: siteConfig.links.twitter },
                { name: 'GitHub', url: siteConfig.links.github },
                { name: 'LinkedIn', url: siteConfig.links.linkedin },
              ].map(({ name, url }) => (
                <li key={name} className="mb-20">
                  <Link className="text-blue-500 hover:text-blue-600" href={url}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            <Section className="mt-45">
              <Row>
                <Text className="text-base">Looking forward to sharing valuable content with you!</Text>

                <Text className="mt-20 text-base">Best regards,</Text>
                <Text className="text-base font-bold">{siteConfig.creator.name}</Text>

                <Text className="mt-45 text-sm text-gray-400">
                  P.S. If you ever want to reach out, just reply to this email. I read all responses!
                </Text>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default WelcomeEmail
