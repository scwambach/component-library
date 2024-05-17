import { ImageObject } from '../modules'
import { Flex } from '../utility'
import { LogoBannerProps } from '../../utils/types'

// TODO: Create LogoBanner tests and stories

export const LogoBanner = ({
  backgroundImage,
  className,
  componentId,
  logo,
  testId,
}: LogoBannerProps) => {
  return (
    <section
      id={componentId}
      data-testid={testId}
      className={`wdrlscw-logoBanner${className ? ` ${className}` : ''}`}
    >
      <ImageObject {...backgroundImage} alt="" isBackground />
      {logo && (
        <Flex alignItems="center" justifyContent="center">
          <ImageObject {...logo} alt="Logo" className="logo" />
        </Flex>
      )}
    </section>
  )
}
