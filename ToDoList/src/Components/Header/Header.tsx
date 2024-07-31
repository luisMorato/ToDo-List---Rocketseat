import { Container, SpanContainer } from './Header.styles';
import rocket from '../../assets/rocket.svg';

export const Header = () => {
  return (
    <Container>
        <img
          src={rocket}
          alt="rocket-logo"
        />
        <h1>
          <SpanContainer variant={'blue'} >
            To
          </SpanContainer>
          <SpanContainer variant={'purple'} >
            Do
          </SpanContainer>
        </h1>
    </Container>
  )
}