import { Person } from '../modules'
import { SectionHeading } from '../modules/SectionHeading'
import { Container, Grid } from '../utility'
import { PeopleProps } from '../../utils/types'
import { BlockWrapper } from '@components/utility/BlockWrapper'

export const People = ({
  className,
  columns = 3,
  componentId,
  container,
  gap = 'sm',
  heading,
  items,
  headingLevel = 3,
  subheading,
  testId,
  ...props
}: PeopleProps) => {
  const renderedPeople = items.map((item, index) => {
    return <Person key={index} {...item} />
  })

  return (
    <BlockWrapper
      componentId={componentId}
      testId={testId}
      className={`wdrlscw-people${className ? ` ${className}` : ''}`}
      {...props}
    >
      <Container containerClass={container}>
        {heading && (
          <SectionHeading
            heading={heading}
            headingLevel={headingLevel}
            subheading={subheading}
          />
        )}
        <Grid columns={columns} gap={gap}>
          {renderedPeople}
        </Grid>
      </Container>
    </BlockWrapper>
  )
}
