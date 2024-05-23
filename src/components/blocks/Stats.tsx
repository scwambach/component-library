import { Stat } from '../modules'
import { SectionHeading } from '../modules/SectionHeading'
import { Container, Grid } from '../utility'
import { ColumnSize, StatsProps } from '../../utils/types'
import { BlockWrapper } from '@components/utility/BlockWrapper'

export const Stats = ({
  className,
  componentId,
  container,
  gap = 'xs',
  heading,
  items,
  headingLevel,
  subheading,
  testId,
  ...props
}: StatsProps) => {
  const columns =
    items && items.length > 0 ? (items.length > 6 ? 6 : items.length) : 1

  return (
    <BlockWrapper
      componentId={componentId}
      testId={testId}
      className={`wdrlscw-stats${className ? ` ${className}` : ''}`}
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
        <Grid columns={columns as ColumnSize} gap={gap}>
          {items?.map((item, index) => (
            <Stat key={index + item.value} {...item} />
          ))}
        </Grid>
      </Container>
    </BlockWrapper>
  )
}
