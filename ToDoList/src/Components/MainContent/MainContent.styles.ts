import styled, { css } from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    gap: 4rem;
    max-width: 46rem;
    width: 100%;
`;

type wrapperRowProps = {
    justify: 'start' | 'between' | 'center' | 'around' | 'end'
}

const justifyVariant = {
    start: 'flex-start',
    between: 'space-between', 
    center: 'center', 
    around: 'space-around',
    end: 'flex-end'
}

export const WrapperRow = styled.div<wrapperRowProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: -2rem;
    width: 100%;

    ${props => 
        css`justify-content: ${justifyVariant[props.justify]}`
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: inherit;
`;

export const Input = styled.input`
    background-color: var(--gray-500);
    max-width: 40rem;
    flex-grow: 1;
    border-radius: 8px;
    border: none;
    padding: 0 1rem;
    height: 54px;
    
    &:focus{
        outline: none;
    }
`;

type messageProps = {
    error?: boolean,
    success?: boolean
}

export const Message = styled.p<messageProps>`
    font-size: 0.875rem;
    border-radius: 8px;
    padding: 0.5rem;
    margin-top: -1.5rem;

    ${props => {
        if(props.error) {
            return css`
                background-color: var(--red-300);
            `;
        } else {
            return css`
                background-color: var(--green-300);
            `;
        }
    }}
`;

export const Button = styled.button`
    color: #FFF;
    cursor: pointer;
    background-color: var(--blueDark);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: bold;
    border-radius: 8px;
    width: 90px;
    height: 54px;
    &:hover{
        background-color: var(--lightBlue);
    }
`;

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    width: inherit;
    margin-bottom: 1.5rem;
`;

type spanContainer = {
    variant: 'blue' | 'purple'
}

export const SpanContainer = styled.span<spanContainer>`
    font-size: 0.875rem;
    font-weight: bold;

    ${props => {
        return css`
            color: ${props.variant === 'blue' ? '#4EA8DE' : '#5E60CE'};
        `
    }}
`;

type counterProps = {
    large?: boolean
}

export const Counter = styled.div<counterProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-200);
    font-size: 0.75rem;
    font-weight: bold;
    background-color: var(--gray-400);
    width: 1.5rem;
    height: 1.25rem;
    border-radius: 12px;

    ${props => {
        if(props.large) {
            return css`
                width: 3.4rem;
                height: 1.25rem;
            `;
        } else {
            return css`
                width: 1.5rem;
                height: 1.25rem;
            `;
        }
    }}
`;

export const Empty = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: var(--gray-300);
    border-radius: 8px;
    border-top: 1px solid var(--gray-400);
    width: 40rem;
    padding: 4rem;

    &{
        div {
            text-align: center;
        }
        p:first-of-type{
            font-weight: bold;
        }
    }
`;

type tasksProps = {
    tasksLength: number
}

export const Tasks = styled.div<tasksProps>`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: inherit;
    height: fit-content;
    max-height: 32rem;

    ${props => 
        css`overflow-y: ${props.tasksLength > 5 ? 'scroll' : 'auto'}`
    }
`;