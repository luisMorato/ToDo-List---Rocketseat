import styled, { css } from 'styled-components';

export const Container = styled.header`
    background-color: var(--gray-700);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    height: 12.5rem;
`;

type spanContainer = {
    variant: 'blue' | 'purple'
}

export const SpanContainer = styled.span<spanContainer>`
    font-size: 2.5rem;

    ${props => {
        return css`
            color: ${props.variant === 'blue' ? '#4EA8DE' : '#5E60CE'};
        `
    }}
`;