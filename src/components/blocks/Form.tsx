import { Button } from '../modules'
import { SectionHeading } from '../modules/SectionHeading'
import { Container } from '../utility'
import { FormProps } from '../../utils/types'

const Form = ({
  children,
  className,
  componentId,
  container,
  heading,
  headingLevel,
  markdown,
  onSubmit,
  subheading,
  submitCopy,
  testId,
}: FormProps) => {
  return (
    <section
      id={componentId}
      className={`wdrlscw-form${className ? ` ${className}` : ''}`}
      data-testid={testId}
    >
      <Container containerClass={container}>
        {heading && (
          <SectionHeading
            heading={heading}
            headingLevel={headingLevel}
            markdown={markdown}
            subheading={subheading}
          />
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            onSubmit && onSubmit(e)
          }}
        >
          <fieldset>{children}</fieldset>
          <Button type="submit">{submitCopy || 'Submit'}</Button>
        </form>
      </Container>
    </section>
  )
}

export { Form }
